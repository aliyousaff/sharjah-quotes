/**
 * Google Apps Script for Handling Form Submissions
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste this code into Code.gs
 * 4. Run `setupSheet` function once to create headers.
 * 5. Deploy > New Deployment > Web App.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the URL and paste it into your frontend config.
 */

function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = [
    'Submission ID',
    'Timestamp',
    'Full Name',
    'Phone',
    'Email',
    'Project Type',
    'Location',
    'Needs',
    'Area/Quantity',
    'Budget',
    'Timeline',
    'Notes',
    'UTM Source',
    'UTM Medium',
    'UTM Campaign'
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const submissionId = 'SHJ-' + Utilities.formatDate(new Date(), "GMT+4", "yyyyMMdd") + '-' + Math.floor(Math.random() * 9000 + 1000);
    const timestamp = new Date();
    
    sheet.appendRow([
      submissionId,
      timestamp,
      data.fullName,
      data.phone,
      data.email,
      data.projectType,
      data.location,
      Array.isArray(data.needs) ? data.needs.join(', ') : data.needs,
      data.quantity,
      data.budget,
      data.timeline,
      data.notes,
      data.utm_source || '',
      data.utm_medium || '',
      data.utm_campaign || ''
    ]);
    
    // Send Email Notification
    sendEmailNotification(data, submissionId);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', id: submissionId }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data, id) {
  // Use getEffectiveUser() to send email to YOU (the script owner).
  // getActiveUser() returns nothing for anonymous web visitors.
  const email = Session.getEffectiveUser().getEmail();
  
  // OR: Uncomment the line below to hardcode a specific address
  // const email = "your.email@example.com";
  const subject = `New Quote Request: ${data.fullName} [${id}]`;
  const body = `
    New Lead Received!
    
    ID: ${id}
    Name: ${data.fullName}
    Phone: ${data.phone}
    Location: ${data.location}
    Type: ${data.projectType}
    Budget: ${data.budget}
    
    Needs: ${Array.isArray(data.needs) ? data.needs.join(', ') : data.needs}
    
    Notes: ${data.notes}
  `;
  
  MailApp.sendEmail({
    to: email,
    subject: subject,
    body: body
  });
}

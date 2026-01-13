export const GA_MEASUREMENT_ID = 'G-XRH3LBEX10';

export const trackEvent = (action, params = {}) => {
    try {
        if (window.gtag) {
            window.gtag('event', action, params);
        } else {
            console.log('GA Event (Local):', action, params);
        }
    } catch (error) {
        console.error('Analytics Error:', error);
    }
};

export const trackAdsConversion = () => {
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-17864035582/-jdACK-BqeIbEP6ZnsZC',
            'value': 1.0,
            'currency': 'PKR'
        });
    } else {
        console.log('Google Ads Conversion Triggered (Local)');
    }
};

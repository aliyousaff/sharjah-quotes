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

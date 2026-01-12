import { useEffect, useState } from 'react';

export function useUTM() {
    const [utm, setUtm] = useState({
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_term: '',
        utm_content: ''
    });

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUtm({
            utm_source: params.get('utm_source') || '',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            utm_term: params.get('utm_term') || '',
            utm_content: params.get('utm_content') || ''
        });
    }, []);

    return utm;
}

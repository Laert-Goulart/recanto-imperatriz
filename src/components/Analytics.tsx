'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // ex.: G-XXXXXXXXXX
const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID; // ex.: AW-XXXXXXXXXX

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params);
  }
}

export function Analytics() {
  // Tracks clicks on WhatsApp and Airbnb links across the whole site
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const page = window.location.pathname;
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        trackEvent('click_whatsapp', { page });
      } else if (href.includes('airbnb.com')) {
        trackEvent('click_airbnb', { page });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const mainId = GA_ID || ADS_ID;
  if (!mainId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${mainId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}');` : ''}
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}
        `}
      </Script>
    </>
  );
}

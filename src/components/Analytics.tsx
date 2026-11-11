'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { colors } from '@/content/config';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // G-XXXXXXXXXX
const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID; // AW-XXXXXXXXXX (opcional)
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID; // opcional
const CONSENT_KEY = 'cookie-consent'; // 'granted' | 'denied'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

function readConsent(): 'granted' | 'denied' | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', name, params);
  // Pixel da Meta só existe se o visitante aceitou cookies
  if (window.fbq) {
    if (name === 'generate_lead') window.fbq('track', 'Lead');
    else if (name === 'click_whatsapp' || name === 'click_airbnb') window.fbq('track', 'Contact', params);
  }
}

function applyConsent(value: 'granted' | 'denied') {
  window.gtag?.('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

export function Analytics() {
  const [consent, setConsent] = useState<'granted' | 'denied' | null>('denied');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
  }, []);

  // Cliques no WhatsApp e no Airbnb em qualquer página
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const page = window.location.pathname;
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) trackEvent('click_whatsapp', { page });
      else if (href.includes('airbnb.com')) trackEvent('click_airbnb', { page });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const choose = (value: 'granted' | 'denied') => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {}
    applyConsent(value);
    setConsent(value);
  };

  const mainId = GA_ID || ADS_ID;

  return (
    <>
      {mainId && (
        <>
          {/* Modo de consentimento do Google: tudo negado até o visitante aceitar */}
          <Script id="gtag-consent" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              var c = null; try { c = localStorage.getItem('${CONSENT_KEY}'); } catch (e) {}
              var v = c === 'granted' ? 'granted' : 'denied';
              gtag('consent', 'default', { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v, wait_for_update: 500 });
              gtag('js', new Date());
              ${GA_ID ? `gtag('config', '${GA_ID}');` : ''}
              ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}
            `}
          </Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${mainId}`} strategy="afterInteractive" />
        </>
      )}

      {META_PIXEL_ID && consent === 'granted' && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          style={{
            // Compacto: no celular não pode cobrir os botões de contato da primeira tela
            position: 'fixed', left: '8px', right: '8px', bottom: '8px', zIndex: 200, maxWidth: '640px', margin: '0 auto',
            background: '#fff', color: colors.text, border: `1px solid ${colors.divider}`, borderRadius: '8px',
            boxShadow: '0 6px 20px rgba(0,0,0,.16)', padding: '8px 10px', display: 'flex', gap: '10px',
            alignItems: 'center', fontSize: '12px', lineHeight: 1.35,
          }}
        >
          <p style={{ margin: 0, flex: '1 1 auto', minWidth: 0 }}>
            Usamos cookies para medir visitas.{' '}
            <Link href="/privacidade" style={{ color: colors.accent, fontWeight: 600 }}>Privacidade</Link>
          </p>
          <div style={{ display: 'flex', gap: '6px', flex: 'none' }}>
            <button
              type="button"
              onClick={() => choose('denied')}
              style={{ padding: '7px 10px', background: 'transparent', border: `1px solid ${colors.divider}`, borderRadius: '4px', cursor: 'pointer', fontSize: '12px', color: colors.text }}
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => choose('granted')}
              style={{ padding: '7px 12px', background: colors.accent, color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}
            >
              Aceitar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

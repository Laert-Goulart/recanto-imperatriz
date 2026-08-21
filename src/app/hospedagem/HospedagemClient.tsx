'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import type { HospedagemContent } from '@/content/hospedagem';
import { siteConfig, colors } from '@/content/config';

export function HospedagemClient({ content: hospedagemContent }: { content: HospedagemContent }) {
  const [galeriaOpenId, setGaleriaOpenId] = useState<string | null>(null);

  const handleGaleriaNext = () => {
    if (!galeriaOpenId) return;
    const cur = parseInt(galeriaOpenId.split('-')[1], 10);
    const next = (cur % hospedagemContent.galeria.images.length) + 1;
    setGaleriaOpenId(`galeria-${next}`);
  };

  const handleGaleriaPrev = () => {
    if (!galeriaOpenId) return;
    const cur = parseInt(galeriaOpenId.split('-')[1], 10);
    const prev = cur === 1 ? hospedagemContent.galeria.images.length : cur - 1;
    setGaleriaOpenId(`galeria-${prev}`);
  };

  const currentGaleriaIndex = galeriaOpenId ? parseInt(galeriaOpenId.split('-')[1], 10) - 1 : 0;

  return (
    <div style={{ background: colors.bg, color: colors.text, minHeight: '100vh' }}>
      <Header />

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          minHeight: 'min(88vh, 720px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${hospedagemContent.hero.image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(to top, rgba(10,9,9,0.82), rgba(10,9,9,0.4) 55%, rgba(10,9,9,0.15) 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1180px',
            margin: '0 auto',
            padding: '0 clamp(20px, 5vw, 64px)',
            width: '100%',
            color: '#f3f2f2',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              marginBottom: '16px',
              fontSize: '12px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              opacity: 0.9,
              color: '#f3f2f2',
              background: colors.accent,
              padding: '6px 12px',
              borderRadius: '2px',
            }}
          >
            {hospedagemContent.hero.tag}
          </span>
          <h1
            style={{
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              margin: '16px 0 20px',
              color: '#f3f2f2',
              maxWidth: '22ch',
            }}
          >
            {hospedagemContent.hero.title}
          </h1>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              opacity: 0.92,
              maxWidth: '52ch',
              margin: 0,
            }}
          >
            {hospedagemContent.hero.description}
          </p>
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* AMENIDADES */}
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        <span
          style={{
            display: 'inline-block',
            marginBottom: '12px',
            fontSize: '12px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          AMENIDADES
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>O que está incluído</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
            background: colors.divider,
          }}
        >
          {hospedagemContent.amenidades.map((item, i) => (
            <div key={i} style={{ background: colors.bg, padding: '24px' }}>
              <p style={{ fontWeight: 800, fontSize: '15px', margin: '0 0 8px' }}>{item.title}</p>
              <p style={{ fontSize: '14px', opacity: 0.75, margin: 0 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* GALERIA */}
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        <span
          style={{
            display: 'inline-block',
            marginBottom: '12px',
            fontSize: '12px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          {hospedagemContent.galeria.tag}
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>{hospedagemContent.galeria.title}</h2>

        {galeriaOpenId && (
          <>
            <div
              onClick={() => setGaleriaOpenId(null)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(20,18,17,0.92)',
                zIndex: 100,
                cursor: 'zoom-out',
              }}
            />
            <button
              onClick={() => setGaleriaOpenId(null)}
              style={{
                position: 'fixed',
                top: '24px',
                right: '24px',
                zIndex: 102,
                width: '44px',
                height: '44px',
                background: colors.bg,
                border: 'none',
                fontSize: '22px',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
            <button
              onClick={handleGaleriaPrev}
              style={{
                position: 'fixed',
                left: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 102,
                width: '48px',
                height: '48px',
                background: 'rgba(20,18,17,0.7)',
                color: '#f3f2f2',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleGaleriaNext}
              style={{
                position: 'fixed',
                right: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 102,
                width: '48px',
                height: '48px',
                background: 'rgba(20,18,17,0.7)',
                color: '#f3f2f2',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <div
              style={{
                position: 'fixed',
                inset: '48px',
                zIndex: 101,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'zoom-out',
              }}
              onClick={() => setGaleriaOpenId(null)}
            >
              <img
                src={hospedagemContent.galeria.images[currentGaleriaIndex].src}
                alt={hospedagemContent.galeria.images[currentGaleriaIndex].alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
          }}
        >
          {hospedagemContent.galeria.images.map((item, i) => (
            <figure
              key={i}
              onClick={() => setGaleriaOpenId(`galeria-${i + 1}`)}
              style={{
                margin: 0,
                position: 'relative',
                cursor: 'zoom-in',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </figure>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* CTA */}
      <section style={{ background: colors.accent, color: colors.bg }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
          <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', margin: '0 0 24px', color: colors.bg }}>
            Pronto para sua próxima hospedagem?
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de consultar disponibilidade para hospedagem.')}`}
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: colors.bg,
                color: colors.accent,
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Consultar disponibilidade
            </a>
            <a
              href={siteConfig.airbnbUrl}
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-block',
                padding: '12px 20px',
                background: 'transparent',
                color: colors.bg,
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
                border: `2px solid ${colors.bg}`,
              }}
            >
              Ver no Airbnb
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Olá! Gostaria de consultar hospedagem no Recanto da Imperatriz." />
    </div>
  );
}

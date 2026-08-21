'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { faunaContent } from '@/content/fauna';
import { colors } from '@/content/config';

export default function Fauna() {
  const [galeriaOpenId, setGaleriaOpenId] = useState<string | null>(null);

  const handleGaleriaNext = () => {
    if (!galeriaOpenId) return;
    const cur = parseInt(galeriaOpenId.split('-')[1], 10);
    const next = (cur % faunaContent.galeria.length) + 1;
    setGaleriaOpenId(`galeria-${next}`);
  };

  const handleGaleriaPrev = () => {
    if (!galeriaOpenId) return;
    const cur = parseInt(galeriaOpenId.split('-')[1], 10);
    const prev = cur === 1 ? faunaContent.galeria.length : cur - 1;
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
            backgroundImage: `url(${faunaContent.hero.image.src})`,
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
            {faunaContent.hero.tag}
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
            {faunaContent.hero.title}
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
            {faunaContent.hero.description}
          </p>
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* GALERIA */}
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
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
                flexDirection: 'column',
                cursor: 'zoom-out',
              }}
              onClick={() => setGaleriaOpenId(null)}
            >
              <img
                src={faunaContent.galeria[currentGaleriaIndex].src}
                alt={faunaContent.galeria[currentGaleriaIndex].alt}
                style={{
                  maxWidth: '90%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                }}
              />
              <p style={{ color: '#f3f2f2', marginTop: '24px', fontSize: '16px', fontWeight: 500 }}>
                {faunaContent.galeria[currentGaleriaIndex].name}
              </p>
            </div>
          </>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
          }}
        >
          {faunaContent.galeria.map((item, i) => (
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
                  borderRadius: '2px',
                }}
              />
              <figcaption
                style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  opacity: 0.75,
                  textAlign: 'center',
                }}
              >
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* INFO */}
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
          {faunaContent.info.tag}
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 24px' }}>{faunaContent.info.title}</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.65, opacity: 0.85, maxWidth: '80ch' }}>
          {faunaContent.info.description}
        </p>
      </section>

      <Footer />
      <WhatsAppButton message="Olá! Gostaria de saber mais sobre a fauna do Recanto da Imperatriz." />
    </div>
  );
}

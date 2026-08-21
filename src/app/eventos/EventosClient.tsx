'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import type { EventosContent } from '@/content/eventos';
import { siteConfig, colors } from '@/content/config';

export function EventosClient({ content: eventosContent }: { content: EventosContent }) {
  const [galeriaOpenId, setGaleriaOpenId] = useState<string | null>(null);

  const handleGaleriaNext = () => {
    if (!galeriaOpenId) return;
    const cur = parseInt(galeriaOpenId.split('-')[1], 10);
    const next = (cur % eventosContent.ambientes.images.length) + 1;
    setGaleriaOpenId(`galeria-${next}`);
  };

  const handleGaleriaPrev = () => {
    if (!galeriaOpenId) return;
    const cur = parseInt(galeriaOpenId.split('-')[1], 10);
    const prev = cur === 1 ? eventosContent.ambientes.images.length : cur - 1;
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
            backgroundImage: `url(${eventosContent.hero.image.src})`,
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
            {eventosContent.hero.tag}
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
            {eventosContent.hero.title}
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
            {eventosContent.hero.description}
          </p>
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* SUBNAV - Qual é o seu formato */}
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
          QUAL É O SEU FORMATO?
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>Escolha seu tipo de evento</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {eventosContent.subnav.map((formato, i) => (
            <a
              key={i}
              href="#contato"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  padding: '32px 24px',
                  background: colors.bg,
                  border: `1px solid ${colors.divider}`,
                  borderRadius: '2px',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{formato.icon}</div>
                <h3 style={{ fontSize: '20px', margin: '0 0 8px' }}>{formato.title}</h3>
                <p style={{ fontSize: '14px', opacity: 0.75, margin: 0 }}>{formato.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* AMBIENTES */}
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
          {eventosContent.ambientes.tag}
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>{eventosContent.ambientes.title}</h2>

        {/* Galeria Lightbox */}
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
                src={eventosContent.ambientes.images[currentGaleriaIndex].src}
                alt={eventosContent.ambientes.images[currentGaleriaIndex].alt}
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
          {eventosContent.ambientes.images.map((item, i) => (
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

      {/* CASOS DE USO */}
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
          CASOS DE USO
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>Como empresas usam o Recanto</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {eventosContent.casosUso.map((caso, i) => (
            <div
              key={i}
              style={{
                padding: '24px',
                background: colors.surface,
                borderRadius: '2px',
              }}
            >
              <h3 style={{ fontSize: '18px', margin: '0 0 12px' }}>{caso.title}</h3>
              <p style={{ fontSize: '14px', opacity: 0.75, margin: 0 }}>{caso.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* RESUMO TÉCNICO */}
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
          INFORMAÇÕES TÉCNICAS
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>Resumo das capacidades</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          {Object.entries(eventosContent.resumoTecnico).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: '20px',
                border: `1px solid ${colors.divider}`,
                borderRadius: '2px',
              }}
            >
              <p style={{ fontSize: '12px', letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.6, margin: '0 0 8px' }}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* CTA FINAL */}
      <section style={{ background: colors.accent, color: colors.bg }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.6vw, 44px)',
              margin: '0 0 24px',
              color: colors.bg,
            }}
          >
            {eventosContent.cta.title}
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.92, maxWidth: '60ch', margin: '0 0 24px' }}>
            {eventosContent.cta.description}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site de eventos corporativos e gostaria de consultar sobre disponibilidade.')}`}
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
              <span>Consultar disponibilidade</span>
            </a>
            <a
              href="/"
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
              Voltar à Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Olá! Vim pelo site de eventos corporativos do Recanto da Imperatriz." />
    </div>
  );
}

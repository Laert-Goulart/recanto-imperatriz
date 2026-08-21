'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BackToTopButton } from '@/components/BackToTopButton';
import type { LocalizacaoContent } from '@/content/localizacao';
import { siteConfig, colors } from '@/content/config';

export function LocalizacaoClient({ content: localizacaoContent }: { content: LocalizacaoContent }) {
  const [mapaOpen, setMapaOpen] = useState(false);

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
            backgroundImage: `url(${localizacaoContent.hero.image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(to right, rgba(20,20,20,0.82), rgba(20,20,20,0.35) 65%)',
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
            {localizacaoContent.hero.tag}
          </span>
          <h1
            style={{
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              lineHeight: 1.08,
                fontWeight: 700,
              letterSpacing: '-0.02em',
              margin: '16px 0 20px',
              color: '#f3f2f2',
              maxWidth: '22ch',
            }}
          >
            {localizacaoContent.hero.title}
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
            {localizacaoContent.hero.description}
          </p>
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* BLOCOS DE INFO */}
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {localizacaoContent.blocos.map((bloco, i) => (
            <div key={i} style={{ padding: '24px', background: colors.surface, borderRadius: '2px' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{bloco.icon}</div>
              <h3 style={{ fontSize: '18px', margin: '0 0 8px' }}>{bloco.title}</h3>
              <p style={{ fontSize: '14px', opacity: 0.75, margin: 0 }}>{bloco.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* MAPA */}
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <h2 style={{ fontSize: '28px', margin: '0 0 20px' }}>Roteiro de acesso</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.65, opacity: 0.85, margin: '0 0 20px' }}>
              {localizacaoContent.roteiro.description}
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre o acesso ao Recanto da Imperatriz.')}`}
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-block',
                padding: '12px 20px',
                background: colors.accent,
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Solicitar instruções
            </a>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '4/3',
              overflow: 'hidden',
              cursor: 'zoom-in',
            }}
            onClick={() => setMapaOpen(true)}
          >
            <img
              src={localizacaoContent.mapa.src}
              alt={localizacaoContent.mapa.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                background: colors.surface,
              }}
            />
            {mapaOpen && (
              <>
                <div
                  onClick={() => setMapaOpen(false)}
                  style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(20,18,17,0.92)',
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '32px',
                    cursor: 'zoom-out',
                  }}
                >
                  <img
                    src={localizacaoContent.mapa.src}
                    alt={localizacaoContent.mapa.alt}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <button
                    onClick={() => setMapaOpen(false)}
                    style={{
                      position: 'absolute',
                      top: '24px',
                      right: '24px',
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
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* CLIMA E AMBIENTE */}
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
          <div>
            <h3 style={{ fontSize: '24px', margin: '0 0 12px' }}>{localizacaoContent.clima.title}</h3>
            <p style={{ fontSize: '16px', opacity: 0.85, margin: 0 }}>{localizacaoContent.clima.description}</p>
          </div>
          <div>
            <h3 style={{ fontSize: '24px', margin: '0 0 12px' }}>{localizacaoContent.visita.title}</h3>
            <p style={{ fontSize: '16px', opacity: 0.85, margin: '0 0 20px' }}>{localizacaoContent.visita.description}</p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita ao Recanto da Imperatriz.')}`}
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-block',
                padding: '12px 20px',
                background: colors.accent,
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Agendar visita
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
      <WhatsAppButton message="Olá! Gostaria de saber mais sobre a localização e acesso ao Recanto da Imperatriz." />
    </div>
  );
}

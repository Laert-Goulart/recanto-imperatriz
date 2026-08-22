'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BackToTopButton } from '@/components/BackToTopButton';
import { ProvaRapidaIcon } from '@/components/ProvaRapidaIcon';
import type { HomeContent } from '@/content/home';
import { siteConfig, colors } from '@/content/config';
import { useLead } from '@/hooks/useLead';

export function HomeClient({ content: homeContent }: { content: HomeContent }) {
  const [heroIndex, setHeroIndex] = useState(0);
  const [galeriaOpenId, setGaleriaOpenId] = useState<string | null>(null);
  const [mapaOpen, setMapaOpen] = useState(false);
  const [bookCoverOpen, setBookCoverOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ nome: '', email: '', telefone: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const { submitLead, loading: leadLoading } = useLead();

  const handleHeroNext = () => setHeroIndex((i) => (i + 1) % homeContent.hero.images.length);
  const handleHeroPrev = () =>
    setHeroIndex((i) => (i - 1 + homeContent.hero.images.length) % homeContent.hero.images.length);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, email, telefone } = contactForm;

    // Gravar lead no Supabase antes de abrir WhatsApp
    const leadRecorded = await submitLead({
      nome,
      email,
      telefone,
      tipo_evento: 'Contato Geral',
      origem_pagina: 'Home - Formulário de Contato',
    });

    // Se gravou (ou falhar, mesmo assim abrir WhatsApp)
    const msg = `Olá! Sou ${nome}. E-mail: ${email}. Telefone: ${telefone}. Estou entrando em contato pelo site sobre hospedagem ou evento no Recanto da Imperatriz.`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setContactSubmitted(true);
  };

  const handleGaleriaNext = () => {
    if (!galeriaOpenId) return;
    const cur = parseInt(galeriaOpenId.split('-')[1], 10);
    const next = (cur % homeContent.galeria.images.length) + 1;
    setGaleriaOpenId(`galeria-${next}`);
  };

  const handleGaleriaPrev = () => {
    if (!galeriaOpenId) return;
    const cur = parseInt(galeriaOpenId.split('-')[1], 10);
    const prev = cur === 1 ? homeContent.galeria.images.length : cur - 1;
    setGaleriaOpenId(`galeria-${prev}`);
  };

  const currentGaleriaIndex = galeriaOpenId ? parseInt(galeriaOpenId.split('-')[1], 10) - 1 : 0;
  const currentImage = homeContent.hero.images[heroIndex];

  return (
    <div style={{ background: colors.bg, color: colors.text, minHeight: '100vh' }}>
      <Header />

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          height: 'min(88vh, 720px)',
          overflow: 'hidden',
        }}
      >
        {homeContent.hero.images.map((img, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              transform: `translateX(${(i - heroIndex) * 100}%)`,
              transition: 'transform 0.6s cubic-bezier(.65,0,.35,1)',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            background: 'linear-gradient(to top, rgba(10,9,9,0.82), rgba(10,9,9,0.4) 55%, rgba(10,9,9,0.15) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: '64px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              maxWidth: '1180px',
              margin: '0 auto',
              padding: '0 clamp(20px, 5vw, 64px)',
              width: '100%',
              color: '#f3f2f2',
              pointerEvents: 'auto',
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
              {homeContent.hero.tag}
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
              {homeContent.hero.title}
            </h1>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.6,
                opacity: 0.92,
                maxWidth: '52ch',
                margin: '0 0 28px',
              }}
            >
              {homeContent.hero.description}
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site do Recanto da Imperatriz e gostaria de saber mais sobre eventos corporativos.')}`}
                target="_blank"
                rel="noopener"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: colors.accent,
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.6 9 10 7.6 9.8 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5A9.9 9.9 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 1 1-2.9-.2-.3A8 8 0 1 1 12 20z" />
                </svg>
                <span>Consultar disponibilidade pelo WhatsApp</span>
              </a>
              <a
                href="/book"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: 'transparent',
                  color: '#f3f2f2',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: `2px solid #f3f2f2`,
                }}
              >
                Baixar o Book Corporativo
              </a>
            </div>
          </div>
        </div>

        {/* Hero Navigation */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: 0,
            right: 0,
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <button
            onClick={handleHeroPrev}
            style={{
              width: '36px',
              height: '36px',
              border: '1px solid rgba(243,242,242,0.6)',
              background: 'rgba(10,9,9,0.35)',
              color: '#f3f2f2',
              fontSize: '16px',
              fontWeight: 800,
              cursor: 'pointer',
              borderRadius: '2px',
            }}
          >
            ‹
          </button>
          <div style={{ display: 'flex', gap: '10px' }}>
            {homeContent.hero.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                style={{
                  width: '10px',
                  height: '10px',
                  background: i === heroIndex ? '#f3f2f2' : 'rgba(243,242,242,0.4)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  borderRadius: '50%',
                }}
              />
            ))}
          </div>
          <button
            onClick={handleHeroNext}
            style={{
              width: '36px',
              height: '36px',
              border: '1px solid rgba(243,242,242,0.6)',
              background: 'rgba(10,9,9,0.35)',
              color: '#f3f2f2',
              fontSize: '16px',
              fontWeight: 800,
              cursor: 'pointer',
              borderRadius: '2px',
            }}
          >
            ›
          </button>
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* PROVA RÁPIDA */}
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '40px clamp(20px, 5vw, 64px)' }}>
        <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', gap: '28px' }}>
          {homeContent.provaRapida.map((item, i) => (
            <div
              key={i}
              style={{
                flex: 'none',
                whiteSpace: 'nowrap',
                paddingTop: '14px',
                borderTop: `2px solid ${colors.divider}`,
              }}
            >
              <ProvaRapidaIcon name={item.icon} color={colors.accent} />
              <p
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  opacity: 0.6,
                  margin: '0 0 4px',
                }}
              >
                {item.label}
              </p>
              <p style={{ fontWeight: 800, fontSize: '16px', margin: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* FORMATOS */}
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
          PARA QUE TIPO DE ENCONTRO?
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>Escolha o formato do seu evento</h2>
        <style>{`
          .formatos-row { display: flex; flex-wrap: wrap; gap: 16px; }
          .formato-card-home { transition: box-shadow 0.2s ease; }
          .formato-card-home:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
          @media (max-width: 700px) {
            .formatos-row {
              flex-wrap: nowrap;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              margin: 0 -20px;
              padding: 0 20px 8px;
            }
            .formatos-row > a { flex: 0 0 68% !important; max-width: none !important; scroll-snap-align: start; }
          }
        `}</style>
        <div className="formatos-row">
          {homeContent.formatos.map((formato, i) => (
            <a
              key={i}
              href={i === 4 ? '/hospedagem' : '#contato'}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                flex: '1 1 190px',
                maxWidth: '220px',
              }}
            >
              <div
                className="formato-card-home"
                style={{
                  padding: '20px',
                  minHeight: '180px',
                  height: '100%',
                  background: colors.bg,
                  border: `1px solid ${colors.divider}`,
                  borderRadius: '2px',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    opacity: 0.6,
                    margin: '0 0 8px',
                  }}
                >
                  {formato.kicker}
                </p>
                <h3 style={{ fontSize: '20px', margin: '0 0 8px' }}>{formato.title}</h3>
                <p style={{ fontSize: '14px', opacity: 0.75, margin: 0 }}>{formato.description}</p>
                <p style={{ color: colors.accent, fontSize: '13px', fontWeight: 800, marginTop: '12px' }}>
                  Saiba mais →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* A EXPERIÊNCIA */}
      <section
        style={{
          position: 'relative',
          minHeight: 'min(75vh, 620px)',
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
            backgroundImage: `url(${homeContent.experiencia.image.src})`,
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
          }}
        >
          <div style={{ maxWidth: '48ch', color: '#f3f2f2' }}>
            <span
              style={{
                display: 'inline-block',
                marginBottom: '12px',
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
              {homeContent.experiencia.tag}
            </span>
            <h2 style={{ fontSize: '30px', margin: '12px 0 16px', color: '#f3f2f2' }}>
              {homeContent.experiencia.title}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.65, opacity: 0.92, margin: 0 }}>
              {homeContent.experiencia.description}
            </p>
          </div>
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* ESTRUTURA */}
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
          ESTRUTURA
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>O que a casa oferece</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2px',
            background: colors.divider,
          }}
        >
          {homeContent.estrutura.map((item, i) => (
            <div key={i} style={{ background: colors.bg, padding: '20px' }}>
              <p style={{ fontWeight: 800, fontSize: '15px', margin: '0 0 6px' }}>{item.title}</p>
              <p style={{ fontSize: '13px', opacity: 0.75, margin: 0 }}>{item.description}</p>
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
          {homeContent.galeria.tag}
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>{homeContent.galeria.title}</h2>

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
                src={homeContent.galeria.images[currentGaleriaIndex].src}
                alt={homeContent.galeria.images[currentGaleriaIndex].alt}
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
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
          }}
        >
          {homeContent.galeria.images.map((item, i) => (
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

      {/* COMO FUNCIONA */}
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
          COMO FUNCIONA
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>Do primeiro contato ao seu evento</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 0,
          }}
        >
          {homeContent.comoFunciona.map((item, i) => (
            <div key={i} style={{ borderTop: `2px solid ${colors.divider}`, padding: '20px 20px 0 0' }}>
              <p style={{ fontWeight: 800, fontSize: '13px', color: colors.accent, margin: '0 0 8px' }}>
                {item.n}
              </p>
              <p style={{ fontWeight: 800, fontSize: '16px', margin: '0 0 6px' }}>{item.title}</p>
              <p style={{ fontSize: '13px', opacity: 0.75, margin: 0 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* LOCALIZAÇÃO */}
      <section
        id="localizacao"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '56px clamp(20px, 5vw, 64px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div>
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
            {homeContent.localizacao.tag}
          </span>
          <h2 style={{ fontSize: '30px', margin: '12px 0 16px' }}>{homeContent.localizacao.title}</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.65, opacity: 0.85, maxWidth: '44ch', margin: '0 0 20px' }}>
            {homeContent.localizacao.description}
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de planejar uma visita ao Recanto da Imperatriz.')}`}
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-block',
              padding: '12px 20px',
              background: 'transparent',
              color: colors.text,
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 500,
              border: `2px solid ${colors.accent}`,
            }}
          >
            Planejar minha visita
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
            src={homeContent.localizacao.mapa.src}
            alt={homeContent.localizacao.mapa.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              background: colors.surface,
            }}
          />
        </div>
        {mapaOpen && (
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
              src={homeContent.localizacao.mapa.src}
              alt={homeContent.localizacao.mapa.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMapaOpen(false);
              }}
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
        )}
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* BOOK */}
      <section style={{ background: colors.surface }}>
        <style>{`
          .book-teaser-grid {
            max-width: 1180px;
            margin: 0 auto;
            padding: 56px clamp(20px, 5vw, 64px);
            display: grid;
            grid-template-columns: minmax(260px, 0.8fr) minmax(320px, 1.4fr);
            gap: 48px;
            align-items: center;
          }
          @media (max-width: 700px) {
            .book-teaser-grid { grid-template-columns: 1fr; }
          }
        `}</style>
        <div className="book-teaser-grid">
          <div>
            <span
              style={{
                display: 'inline-block',
                marginBottom: '12px',
                fontSize: '12px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                opacity: 0.6,
                color: colors.accent,
              }}
            >
              {homeContent.book.tag}
            </span>
            <h2 style={{ fontSize: '30px', margin: '12px 0 16px' }}>{homeContent.book.title}</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.65, opacity: 0.85, maxWidth: '44ch', margin: '0 0 20px' }}>
              {homeContent.book.description}
            </p>
            <a
              href="/book"
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
              Baixar o Book Corporativo
            </a>
          </div>
          <figure
            onClick={() => setBookCoverOpen(!bookCoverOpen)}
            style={{
              margin: 0,
              position: bookCoverOpen ? 'fixed' : 'relative',
              inset: bookCoverOpen ? '48px' : 'auto',
              zIndex: bookCoverOpen ? 101 : 'auto',
              display: bookCoverOpen ? 'flex' : 'block',
              alignItems: bookCoverOpen ? 'center' : 'auto',
              justifyContent: bookCoverOpen ? 'center' : 'auto',
              cursor: bookCoverOpen ? 'zoom-out' : 'zoom-in',
            }}
          >
            <img
              src={homeContent.book.cover.src}
              alt={homeContent.book.cover.alt}
              style={{
                width: bookCoverOpen ? '100%' : '100%',
                height: bookCoverOpen ? '100%' : 'auto',
                aspectRatio: bookCoverOpen ? 'auto' : '4/3',
                objectFit: bookCoverOpen ? 'contain' : 'cover',
              }}
            />
            {!bookCoverOpen && (
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  background: 'rgba(20,18,17,0.7)',
                  color: '#f3f2f2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </svg>
              </div>
            )}
          </figure>
          {bookCoverOpen && (
            <>
              <div
                onClick={() => setBookCoverOpen(false)}
                style={{
                  position: 'fixed',
                  inset: 0,
                  background: 'rgba(20,18,17,0.92)',
                  zIndex: 100,
                  cursor: 'zoom-out',
                }}
              />
              <button
                onClick={() => setBookCoverOpen(false)}
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
            </>
          )}
        </div>
      </section>

      {/* FAQ */}
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
          PERGUNTAS FREQUENTES
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>Perguntas frequentes</h2>
        <div>
          {homeContent.faq.map((item, i) => (
            <details
              key={i}
              style={{
                borderTop: `2px solid ${colors.divider}`,
                padding: '16px 0',
              }}
            >
              <summary style={{ cursor: 'pointer', fontWeight: 800, fontSize: '16px' }}>{item.q}</summary>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: '12px 0 0', maxWidth: '60ch' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

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
            Pronto para tirar o seu time da rotina ou fazer uma hospedagem em família?
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site do Recanto da Imperatriz e gostaria de saber mais sobre eventos corporativos.')}`}
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.6 9 10 7.6 9.8 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5A9.9 9.9 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 1 1-2.9-.2-.3A8 8 0 1 1 12 20z" />
              </svg>
              <span>Falar no WhatsApp agora</span>
            </a>
            <a
              href="/book"
              style={{
                display: 'inline-block',
                padding: '12px 20px',
                background: 'transparent',
                color: colors.bg,
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
                border: 'none',
              }}
            >
              Baixar o Book Corporativo
            </a>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO */}
      <section id="contato" style={{ maxWidth: '640px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        <span
          style={{
            display: 'inline-block',
            marginBottom: '12px',
            fontSize: '12px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            opacity: 0.6,
            color: colors.accent,
          }}
        >
          {homeContent.contato.tag}
        </span>
        <h2 style={{ fontSize: '28px', margin: '12px 0 8px' }}>{homeContent.contato.title}</h2>
        <p style={{ fontSize: '14px', opacity: 0.75, margin: '0 0 24px' }}>{homeContent.contato.description}</p>

        {!contactSubmitted ? (
          <form onSubmit={handleContactSubmit} style={{ display: 'grid', gap: '16px' }}>
            <div>
              <label
                htmlFor="nome"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '6px',
                }}
              >
                Nome
              </label>
              <input
                id="nome"
                type="text"
                required
                value={contactForm.nome}
                onChange={(e) => setContactForm({ ...contactForm, nome: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: `1px solid ${colors.divider}`,
                  borderRadius: '4px',
                  background: colors.bg,
                  color: colors.text,
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '6px',
                }}
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: `1px solid ${colors.divider}`,
                  borderRadius: '4px',
                  background: colors.bg,
                  color: colors.text,
                }}
              />
            </div>
            <div>
              <label
                htmlFor="telefone"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '6px',
                }}
              >
                Telefone
              </label>
              <input
                id="telefone"
                type="tel"
                inputMode="numeric"
                required
                placeholder="(21) 97048-2177"
                value={contactForm.telefone}
                onChange={(e) => setContactForm({ ...contactForm, telefone: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: `1px solid ${colors.divider}`,
                  borderRadius: '4px',
                  background: colors.bg,
                  color: colors.text,
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                type="submit"
                style={{
                  padding: '12px 20px',
                  background: colors.accent,
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                Enviar
              </button>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Estou entrando em contato pelo site sobre hospedagem ou evento no Recanto da Imperatriz.')}`}
                target="_blank"
                rel="noopener"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: 'transparent',
                  color: colors.text,
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: `2px solid ${colors.accent}`,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.6 9 10 7.6 9.8 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5A9.9 9.9 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 1 1-2.9-.2-.3A8 8 0 1 1 12 20z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </form>
        ) : (
          <div
            style={{
              padding: '24px',
              background: colors.bg,
              border: `1px solid ${colors.divider}`,
              borderRadius: '4px',
            }}
          >
            <p style={{ margin: '0 0 12px' }}>Recebemos seus dados! Abrimos o WhatsApp para você confirmar diretamente com nossa equipe.</p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Estou entrando em contato pelo site sobre hospedagem ou evento no Recanto da Imperatriz.')}`}
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: colors.accent,
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.6 9 10 7.6 9.8 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5A9.9 9.9 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 1 1-2.9-.2-.3A8 8 0 1 1 12 20z" />
              </svg>
              <span>Abrir WhatsApp</span>
            </a>
          </div>
        )}
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      <Footer />

      <BackToTopButton />
      <WhatsAppButton />

      <style>{`
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          line-height: 1.5;
        }
        @media (max-width: 1100px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-burger {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}

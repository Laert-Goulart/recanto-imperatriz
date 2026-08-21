'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import type { BookContent } from '@/content/book';
import { siteConfig, colors } from '@/content/config';

export function BookClient({ content: bookContent }: { content: BookContent }) {
  const [bookCoverOpen, setBookCoverOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '', ddd: '', telefone: '', tipoEvento: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, email, ddd, telefone, tipoEvento } = formData;
    const msg = `Olá! Sou ${nome}, e-mail: ${email}, telefone: (${ddd}) ${telefone}. Interesse em: ${tipoEvento}. Gostaria do Book Corporativo.`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    // Trigger download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = bookContent.pdf;
      link.download = 'Recanto-Imperatriz-Book-Corporativo.pdf';
      link.click();
    }, 500);
    setSubmitted(true);
  };

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
            backgroundImage: `url(${bookContent.hero.image.src})`,
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
            {bookContent.hero.tag}
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
            {bookContent.hero.title}
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
            {bookContent.hero.description}
          </p>
        </div>
      </section>

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* FORM + COVER */}
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          <div>
            <h2 style={{ fontSize: '28px', margin: '0 0 24px' }}>{bookContent.form.title}</h2>
            <p style={{ fontSize: '14px', opacity: 0.75, margin: '0 0 24px' }}>{bookContent.form.description}</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                {(() => {
                  const dddField = bookContent.form.fields.find((f) => f.name === 'ddd');
                  const telefoneField = bookContent.form.fields.find((f) => f.name === 'telefone');
                  const otherFields = bookContent.form.fields.filter(
                    (f) => f.name !== 'ddd' && f.name !== 'telefone'
                  );

                  const renderInput = (field: (typeof bookContent.form.fields)[number]) =>
                    field.type === 'select' ? (
                      <select
                        id={field.name}
                        required={field.required}
                        value={formData[field.name as keyof typeof formData] || ''}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          fontSize: '14px',
                          border: `1px solid ${colors.divider}`,
                          borderRadius: '4px',
                          background: colors.bg,
                          color: colors.text,
                        }}
                      >
                        <option value="">Selecione...</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        value={formData[field.name as keyof typeof formData] || ''}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
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
                    );

                  return (
                    <>
                      <div key="nome-email-group" style={{ display: 'contents' }}>
                        {otherFields
                          .filter((f) => f.name === 'nome' || f.name === 'email')
                          .map((field) => (
                            <div key={field.name}>
                              <label
                                htmlFor={field.name}
                                style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}
                              >
                                {field.label}
                              </label>
                              {renderInput(field)}
                            </div>
                          ))}
                      </div>

                      {dddField && telefoneField && (
                        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '12px' }}>
                          <div>
                            <label
                              htmlFor={dddField.name}
                              style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}
                            >
                              {dddField.label}
                            </label>
                            {renderInput(dddField)}
                          </div>
                          <div>
                            <label
                              htmlFor={telefoneField.name}
                              style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}
                            >
                              {telefoneField.label}
                            </label>
                            {renderInput(telefoneField)}
                          </div>
                        </div>
                      )}

                      {otherFields
                        .filter((f) => f.name !== 'nome' && f.name !== 'email')
                        .map((field) => (
                          <div key={field.name}>
                            <label
                              htmlFor={field.name}
                              style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}
                            >
                              {field.label}
                            </label>
                            {renderInput(field)}
                          </div>
                        ))}
                    </>
                  );
                })()}
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
                  Baixar o Book
                </button>
              </form>
            ) : (
              <div
                style={{
                  padding: '24px',
                  background: colors.surface,
                  border: `1px solid ${colors.divider}`,
                  borderRadius: '4px',
                }}
              >
                <p style={{ margin: '0 0 12px', fontWeight: 500 }}>✓ Arquivo enviado para download!</p>
                <p style={{ fontSize: '14px', opacity: 0.75, margin: 0 }}>
                  Se o download não começou, <a href={bookContent.pdf} download>clique aqui</a>.
                </p>
              </div>
            )}
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
              src={bookContent.cover.src}
              alt={bookContent.cover.alt}
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

      <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />

      {/* CONTEÚDO DO BOOK */}
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
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
          {bookContent.content.tag}
        </span>
        <h2 style={{ fontSize: '32px', margin: '12px 0 32px' }}>Material completo incluído</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {bookContent.content.sections.map((section, i) => (
            <div
              key={i}
              style={{
                padding: '24px',
                background: colors.surface,
                borderRadius: '2px',
              }}
            >
              <h3 style={{ fontSize: '18px', margin: '0 0 8px' }}>{section.title}</h3>
              <p style={{ fontSize: '14px', opacity: 0.75, margin: 0 }}>{section.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Olá! Gostaria do Book Corporativo do Recanto da Imperatriz." />
    </div>
  );
}

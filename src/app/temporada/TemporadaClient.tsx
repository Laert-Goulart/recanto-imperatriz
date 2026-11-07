'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BackToTopButton } from '@/components/BackToTopButton';
import { AmenidadeIcon } from '@/components/AmenidadeIcon';
import type { TemporadaContent } from '@/content/temporada';
import { siteConfig, colors } from '@/content/config';

const SECTION: React.CSSProperties = { maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' };
const TAG: React.CSSProperties = { display: 'inline-block', marginBottom: '12px', fontSize: '12px', letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.6 };
const H2: React.CSSProperties = { fontSize: '32px', fontWeight: 700, margin: '12px 0 28px', lineHeight: 1.15 };
const DIVIDER = <hr style={{ margin: 0, border: 'none', borderTop: `2px solid ${colors.divider}` }} />;

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flex: 'none' }}>
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.6 9 10 7.6 9.8 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5A9.9 9.9 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 1 1-2.9-.2-.3A8 8 0 1 1 12 20z" />
    </svg>
  );
}

function Star({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={colors.accent2} style={{ flex: 'none' }}>
      <path d="M12 2l3 6.5 7 .9-5.2 4.8 1.4 7L12 17.8 5.8 21.2l1.4-7L2 9.4l7-.9z" />
    </svg>
  );
}

export function TemporadaClient({ content: c }: { content: TemporadaContent }) {
  const [lightbox, setLightbox] = useState<{ imgs: { src: string; alt: string }[]; i: number } | null>(null);
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(c.cta.whatsappMensagem)}`;
  const abrir = (imgs: { src: string; alt: string }[], i: number) => setLightbox({ imgs, i });
  const passo = (dir: number) =>
    setLightbox((lb) => (lb ? { ...lb, i: (lb.i + dir + lb.imgs.length) % lb.imgs.length } : lb));

  const btnAirbnb: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 22px', background: '#fff', color: colors.text,
    textDecoration: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: 600,
  };
  const btnWhats: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 22px', background: colors.accent, color: '#fff',
    textDecoration: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: 600,
  };

  return (
    <div style={{ background: colors.bg, color: colors.text, minHeight: '100vh' }}>
      <style>{`
        .tp-numeros { display: grid; grid-template-columns: repeat(4, 1fr); }
        .tp-numeros > div + div { border-left: 1px solid ${colors.divider}; }
        .tp-prova { display: grid; grid-template-columns: minmax(240px, 0.8fr) 1.4fr; gap: 40px; align-items: center; }
        .tp-cat { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: ${colors.divider}; }
        .tp-scroll { display: grid; gap: 16px; }
        .tp-dif { grid-template-columns: repeat(4, 1fr); }
        .tp-quartos { grid-template-columns: repeat(5, 1fr); }
        .tp-galeria { grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .tp-loc { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .tp-dep { grid-template-columns: repeat(3, 1fr); }
        .tp-fotos-quartos { grid-template-columns: repeat(4, 1fr); }
        .tp-regras { display: grid; grid-template-columns: minmax(220px, 0.6fr) 1.4fr; gap: 32px; }
        .tp-anfitria { display: grid; grid-template-columns: minmax(260px, 0.8fr) 1.4fr; gap: 28px; align-items: center; }
        @media (max-width: 900px) {
          .tp-dep { grid-template-columns: repeat(2, 1fr); }
          .tp-fotos-quartos { grid-template-columns: repeat(2, 1fr); }
          .tp-regras, .tp-anfitria { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (max-width: 900px) {
          .tp-prova { grid-template-columns: 1fr; gap: 24px; }
          .tp-dif { grid-template-columns: repeat(2, 1fr); }
          .tp-quartos { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 700px) {
          .tp-numeros { grid-template-columns: repeat(2, 1fr); }
          .tp-numeros > div:nth-child(3) { border-left: none; }
          .tp-numeros > div:nth-child(n+3) { border-top: 1px solid ${colors.divider}; }
          .tp-cat { grid-template-columns: repeat(2, 1fr); }
          .tp-loc { grid-template-columns: 1fr; }
          .tp-scroll {
            display: flex; overflow-x: auto; gap: 12px; scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch; margin: 0 -20px; padding: 0 20px 8px;
          }
          .tp-scroll > * { flex: 0 0 70%; min-width: 0; scroll-snap-align: start; }
          .tp-galeria > * { flex: 0 0 45%; }
          .tp-dep > * { flex: 0 0 82%; }
          .tp-fotos-quartos > * { flex: 0 0 72%; }
        }
        .tp-foto { cursor: zoom-in; transition: opacity .2s ease; }
        .tp-foto:hover { opacity: .9; }
      `}</style>

      <Header />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 'min(90vh, 740px)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${c.hero.image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,9,0.85), rgba(10,9,9,0.45) 55%, rgba(10,9,9,0.2) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto', padding: '64px clamp(20px, 5vw, 64px)', width: '100%', color: '#f3f2f2' }}>
          <span style={{ display: 'inline-block', fontSize: '12px', letterSpacing: '0.04em', textTransform: 'uppercase', background: colors.accent, padding: '6px 12px', borderRadius: '2px' }}>
            {c.hero.tag}
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 4.4vw, 54px)', lineHeight: 1.08, fontWeight: 700, letterSpacing: '-0.02em', margin: '18px 0 18px', maxWidth: '20ch' }}>
            {c.hero.title}
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.6, opacity: 0.92, maxWidth: '54ch', margin: '0 0 22px' }}>{c.hero.description}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', margin: '0 0 26px', fontSize: '15px' }}>
            <Star size={18} />
            <b style={{ fontSize: '17px' }}>{c.provaSocial.nota}</b>
            <span style={{ opacity: 0.85 }}>· {c.provaSocial.totalAvaliacoes}</span>
            {c.provaSocial.selos[0] && (
              <span style={{ border: '1px solid rgba(243,242,242,.5)', borderRadius: '20px', padding: '3px 12px', fontSize: '13px' }}>
                {c.provaSocial.selos[0]}
              </span>
            )}
          </div>

          {c.hero.precoAPartirDe && (
            <p style={{ fontSize: '15px', margin: '0 0 18px' }}>
              Diárias a partir de <b style={{ fontSize: '22px' }}>{c.hero.precoAPartirDe}</b>
            </p>
          )}

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={siteConfig.airbnbUrl} target="_blank" rel="noopener" style={btnAirbnb}>
              Ver datas e reservar no Airbnb
            </a>
            <a href={waLink} target="_blank" rel="noopener" style={btnWhats}>
              <WhatsAppIcon /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section style={{ background: '#fff', borderBottom: `1px solid ${colors.divider}` }}>
        <div className="tp-numeros" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {c.numeros.map((n, i) => (
            <div key={i} style={{ padding: '22px 12px', textAlign: 'center' }}>
              <div style={{ fontSize: '30px', fontWeight: 700, color: colors.accent, lineHeight: 1 }}>{n.valor}</div>
              <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section style={SECTION}>
        <span style={TAG}>{c.provaSocial.tag}</span>
        <h2 style={H2}>{c.provaSocial.title}</h2>
        <div className="tp-prova">
          <div style={{ background: colors.accent, color: '#fff', borderRadius: '6px', padding: '28px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '10px' }}>
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={20} />)}
            </div>
            <div style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1 }}>{c.provaSocial.nota}</div>
            <div style={{ fontSize: '14px', opacity: 0.85, margin: '8px 0 18px' }}>{c.provaSocial.totalAvaliacoes}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {c.provaSocial.selos.filter(Boolean).map((s, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '20px', padding: '6px 12px', fontSize: '13px' }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="tp-cat">
              {c.provaSocial.categorias.map((cat, i) => (
                <div key={i} style={{ background: colors.bg, padding: '18px' }}>
                  <div style={{ fontSize: '13px', opacity: 0.7 }}>{cat.label}</div>
                  <div style={{ fontSize: '22px', fontWeight: 700, marginTop: '4px' }}>{cat.nota}</div>
                </div>
              ))}
            </div>
            <a href={siteConfig.airbnbUrl} target="_blank" rel="noopener"
               style={{ display: 'inline-block', marginTop: '18px', color: colors.accent, fontWeight: 700, fontSize: '14px' }}>
              {c.provaSocial.linkTexto} →
            </a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      {c.depoimentos.itens.length > 0 && (
        <section style={{ background: colors.surface }}>
          <div style={SECTION}>
            <span style={TAG}>{c.depoimentos.tag}</span>
            <h2 style={H2}>{c.depoimentos.title}</h2>
            <div className="tp-scroll tp-dep">
              {c.depoimentos.itens.filter((d) => d.texto).map((d, i) => (
                <figure key={i} style={{ margin: 0, background: '#fff', borderRadius: '6px', padding: '22px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                    {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={14} />)}
                  </div>
                  <blockquote style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, flex: 1 }}>“{d.texto}”</blockquote>
                  <figcaption style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '18px' }}>
                    <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: colors.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                      {d.nome.charAt(0)}
                    </span>
                    <span>
                      <b style={{ display: 'block', fontSize: '14px' }}>{d.nome}</b>
                      <span style={{ fontSize: '12px', opacity: 0.65 }}>{d.data} · via Airbnb</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DIFERENCIAIS */}
      <section style={SECTION}>
        <span style={TAG}>{c.diferenciais.tag}</span>
        <h2 style={H2}>{c.diferenciais.title}</h2>
        <div className="tp-scroll tp-dif">
          {c.diferenciais.itens.map((d, i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${colors.divider}`, borderRadius: '4px', padding: '22px' }}>
              <AmenidadeIcon name={d.icon} color={colors.accent} />
              <p style={{ fontWeight: 800, fontSize: '15px', margin: '0 0 6px' }}>{d.title}</p>
              <p style={{ fontSize: '14px', opacity: 0.75, margin: 0 }}>{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {DIVIDER}

      {/* QUARTOS */}
      <section style={SECTION}>
        <span style={TAG}>{c.quartos.tag}</span>
        <h2 style={{ ...H2, marginBottom: '8px' }}>{c.quartos.title}</h2>
        <p style={{ fontSize: '16px', opacity: 0.8, margin: '0 0 28px' }}>{c.quartos.description}</p>
        <div className="tp-scroll tp-quartos">
          {c.quartos.itens.map((q, i) => (
            <div key={i} style={{ background: colors.surface, borderRadius: '4px', padding: '20px' }}>
              <AmenidadeIcon name="bed" color={colors.accent} />
              <p style={{ fontWeight: 800, fontSize: '15px', margin: '0 0 4px' }}>{q.nome}</p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>{q.camas}</p>
            </div>
          ))}
        </div>
        {c.quartos.fotos.length > 0 && (
          <div className="tp-scroll tp-fotos-quartos" style={{ marginTop: '20px' }}>
            {c.quartos.fotos.filter((f) => f.src).map((f, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <img src={f.src} alt={f.alt} className="tp-foto" onClick={() => abrir(c.quartos.fotos, i)}
                     style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', borderRadius: '4px' }} />
                <figcaption style={{ fontSize: '13px', opacity: 0.7, marginTop: '8px' }}>{f.alt}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {DIVIDER}

      {/* GALERIA */}
      <section style={SECTION}>
        <span style={TAG}>{c.galeria.tag}</span>
        <h2 style={H2}>{c.galeria.title}</h2>
        <div className="tp-scroll tp-galeria">
          {c.galeria.images.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} className="tp-foto" onClick={() => abrir(c.galeria.images, i)}
                 style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block', borderRadius: '2px' }} />
          ))}
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)}
             style={{ position: 'fixed', inset: 0, background: 'rgba(20,18,17,0.94)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '56px 16px', cursor: 'zoom-out' }}>
          <img src={lightbox.imgs[lightbox.i].src} alt={lightbox.imgs[lightbox.i].alt}
               style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          <button aria-label="Fechar" onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
                  style={{ position: 'absolute', top: '16px', right: '16px', width: '44px', height: '44px', background: colors.bg, border: 'none', fontSize: '22px', cursor: 'pointer' }}>
            ×
          </button>
          <button aria-label="Foto anterior" onClick={(e) => { e.stopPropagation(); passo(-1); }}
                  style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', background: 'rgba(20,18,17,0.7)', color: '#fff', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
            ‹
          </button>
          <button aria-label="Próxima foto" onClick={(e) => { e.stopPropagation(); passo(1); }}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', background: 'rgba(20,18,17,0.7)', color: '#fff', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
            ›
          </button>
        </div>
      )}

      {DIVIDER}

      {/* REGRAS */}
      <section style={SECTION}>
        <span style={TAG}>{c.regras.tag}</span>
        <h2 style={H2}>{c.regras.title}</h2>
        <div className="tp-regras">
          <div style={{ display: 'grid', gap: '12px', alignContent: 'start' }}>
            {c.regras.horarios.map((h, i) => (
              <div key={i} style={{ background: colors.accent, color: '#fff', borderRadius: '6px', padding: '18px 20px' }}>
                <div style={{ fontSize: '13px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h.label}</div>
                <div style={{ fontSize: '24px', fontWeight: 700, marginTop: '4px' }}>{h.valor}</div>
              </div>
            ))}
          </div>
          <div>
            {c.regras.itens.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', padding: '14px 0', borderTop: i ? `1px solid ${colors.divider}` : 'none' }}>
                <span style={{ width: '8px', height: '8px', marginTop: '7px', flex: 'none', background: colors.accent2, transform: 'rotate(45deg)' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>{r.titulo}</div>
                  {r.detalhe && <div style={{ fontSize: '13px', opacity: 0.7 }}>{r.detalhe}</div>}
                </div>
              </div>
            ))}
            {c.regras.cancelamento && (
              <p style={{ fontSize: '13px', opacity: 0.7, marginTop: '12px', paddingTop: '14px', borderTop: `1px solid ${colors.divider}` }}>
                <b>Cancelamento:</b> {c.regras.cancelamento}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ANFITRIÃ */}
      <section style={{ background: colors.surface }}>
        <div style={SECTION}>
          <div className="tp-anfitria">
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <span style={{ width: '72px', height: '72px', flex: 'none', borderRadius: '50%', background: colors.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 700 }}>
                {c.anfitria.nome.charAt(0)}
              </span>
              <div>
                <span style={{ ...TAG, marginBottom: '2px' }}>{c.anfitria.tag}</span>
                <div style={{ fontSize: '26px', fontWeight: 700 }}>{c.anfitria.nome}</div>
              </div>
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.85, margin: 0 }}>{c.anfitria.descricao}</p>
          </div>
          <div className="tp-numeros" style={{ marginTop: '24px', background: '#fff', borderRadius: '6px' }}>
            {c.anfitria.stats.map((s, i) => (
              <div key={i} style={{ padding: '18px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 700, color: colors.accent }}>{s.valor}</div>
                <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section style={SECTION}>
        <span style={TAG}>{c.localizacao.tag}</span>
        <h2 style={H2}>{c.localizacao.title}</h2>
        <div className="tp-loc">
          {c.localizacao.itens.map((l, i) => (
            <div key={i} style={{ borderTop: `2px solid ${colors.accent}`, paddingTop: '14px' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: colors.accent }}>{l.valor}</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>{l.label}</div>
            </div>
          ))}
        </div>
        {c.localizacao.observacao && <p style={{ fontSize: '14px', opacity: 0.7, marginTop: '22px' }}>{c.localizacao.observacao}</p>}
      </section>

      {DIVIDER}

      {/* FAQ */}
      <section style={SECTION}>
        <span style={TAG}>PERGUNTAS FREQUENTES</span>
        <h2 style={H2}>Antes de reservar</h2>
        <div>
          {c.faq.map((item, i) => (
            <details key={i} style={{ borderTop: `2px solid ${colors.divider}`, padding: '16px 0' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 800, fontSize: '16px' }}>{item.q}</summary>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: '12px 0 0', maxWidth: '60ch' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: colors.accent, color: colors.bg }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
          <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 700, margin: '0 0 12px', color: colors.bg }}>{c.cta.title}</h2>
          <p style={{ fontSize: '16px', opacity: 0.92, margin: '0 0 24px', maxWidth: '60ch' }}>{c.cta.description}</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={siteConfig.airbnbUrl} target="_blank" rel="noopener" style={btnAirbnb}>Ver datas e reservar no Airbnb</a>
            <a href={waLink} target="_blank" rel="noopener"
               style={{ ...btnWhats, background: 'transparent', border: `2px solid ${colors.bg}` }}>
              <WhatsAppIcon /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
      <WhatsAppButton message={c.cta.whatsappMensagem} />
    </div>
  );
}

import { Block } from '@/lib/blocks';
import { colors } from '@/content/config';

export function BlockRenderer({ block }: { block: Block }) {
  if (block.type === 'hero') {
    return (
      <section
        style={{
          position: 'relative',
          minHeight: 'min(70vh, 560px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {block.image && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              backgroundImage: `url(${block.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(to top, rgba(10,9,9,0.82), rgba(10,9,9,0.4) 55%, rgba(10,9,9,0.15) 100%)',
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
          {block.tag && (
            <span
              style={{
                display: 'inline-block',
                marginBottom: '16px',
                fontSize: '12px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#f3f2f2',
                background: colors.accent,
                padding: '6px 12px',
                borderRadius: '2px',
              }}
            >
              {block.tag}
            </span>
          )}
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1, margin: '16px 0 20px', maxWidth: '22ch' }}>
            {block.title}
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.6, opacity: 0.92, maxWidth: '52ch', margin: 0 }}>
            {block.description}
          </p>
        </div>
      </section>
    );
  }

  if (block.type === 'text') {
    return (
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        {block.tag && (
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
            {block.tag}
          </span>
        )}
        <h2 style={{ fontSize: '30px', margin: '12px 0 20px' }}>{block.title}</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.85, maxWidth: '75ch', whiteSpace: 'pre-line' }}>
          {block.body}
        </p>
      </section>
    );
  }

  if (block.type === 'gallery') {
    return (
      <section style={{ maxWidth: '1180px', margin: '0 auto', padding: '56px clamp(20px, 5vw, 64px)' }}>
        {block.tag && (
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
            {block.tag}
          </span>
        )}
        <h2 style={{ fontSize: '30px', margin: '12px 0 24px' }}>{block.title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          {block.images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '2px' }}
            />
          ))}
        </div>
      </section>
    );
  }

  if (block.type === 'cta') {
    return (
      <section style={{ background: colors.accent, color: colors.bg }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '48px clamp(20px, 5vw, 64px)' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', margin: '0 0 12px', color: colors.bg }}>{block.title}</h2>
          {block.description && (
            <p style={{ fontSize: '16px', opacity: 0.92, margin: '0 0 20px', maxWidth: '60ch' }}>
              {block.description}
            </p>
          )}
          <a
            href={block.buttonLink}
            style={{
              display: 'inline-block',
              padding: '12px 20px',
              background: colors.bg,
              color: colors.accent,
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 700,
            }}
          >
            {block.buttonText}
          </a>
        </div>
      </section>
    );
  }

  return null;
}

import { siteConfig, colors } from '@/content/config';

export function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        minHeight: '260px',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'url(/images/footer-casa-aerea.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to top, rgba(16, 31, 17, 0.92), rgba(16, 31, 17, 0.55))',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '32px clamp(20px, 5vw, 64px)',
          width: '100%',
        }}
      >
        <img
          src="/images/logo-recanto-imperatriz.png"
          alt={siteConfig.name}
          style={{
            height: '168px',
            width: 'auto',
            display: 'block',
            margin: '0 auto 12px',
            padding: '10px',
            background: 'radial-gradient(circle, rgba(247, 243, 234, 0.14) 0%, transparent 72%)',
            filter: 'drop-shadow(0 4px 18px rgba(0, 0, 0, 0.45))',
          }}
        />
        <div
          style={{
            fontSize: '13px',
            color: colors.bg,
            opacity: 0.92,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span>{siteConfig.name} — {siteConfig.location}</span>
          <span>
            {siteConfig.email} · {siteConfig.whatsappFormatted}
          </span>
        </div>
      </div>
    </footer>
  );
}

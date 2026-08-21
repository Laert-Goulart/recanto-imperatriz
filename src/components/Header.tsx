'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig, colors } from '@/content/config';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        style={{
          background: colors.accent,
          color: colors.bg,
          fontSize: '12.5px',
          letterSpacing: '0.02em',
          padding: '8px clamp(20px, 5vw, 64px)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span>{siteConfig.location} — Região Serrana do Rio de Janeiro</span>
        <span>
          {siteConfig.whatsappFormatted} · {siteConfig.email}
        </span>
      </div>

      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '18px clamp(20px, 5vw, 64px)',
          background: `rgba(247, 243, 234, 0.92)`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
          {siteConfig.name}
        </Link>

        {/* Desktop Menu */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            overflowX: 'auto',
            flex: '0 1 auto',
            minWidth: 0,
          }}
          className="nav-links-desktop"
        >
          <NavLink href="/eventos">Eventos Corporativos</NavLink>
          <NavLink href="/hospedagem">Hospedagem</NavLink>
          <NavLink href="/book">Book Corporativo</NavLink>
          <NavLink href="/fauna">Espécies Nativas</NavLink>
          <NavLink href="/localizacao">Localização</NavLink>
          <a
            href={siteConfig.airbnbUrl}
            target="_blank"
            rel="noopener"
            style={{ textDecoration: 'none', color: colors.text, padding: '6px 2px' }}
          >
            Ver no Airbnb
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            border: `1px solid ${colors.divider}`,
            background: 'transparent',
            color: colors.text,
            cursor: 'pointer',
            marginLeft: 'auto',
          }}
          className="nav-burger"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        <Link
          href="#contato"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            background: colors.accent,
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Fale Conosco
        </Link>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: colors.bg,
            borderBottom: `2px solid ${colors.divider}`,
            zIndex: 39,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <MobileNavLink href="/eventos" onClick={() => setMobileMenuOpen(false)}>
              Eventos Corporativos
            </MobileNavLink>
            <MobileNavLink href="/hospedagem" onClick={() => setMobileMenuOpen(false)}>
              Hospedagem
            </MobileNavLink>
            <MobileNavLink href="/book" onClick={() => setMobileMenuOpen(false)}>
              Book Corporativo
            </MobileNavLink>
            <MobileNavLink href="/fauna" onClick={() => setMobileMenuOpen(false)}>
              Espécies Nativas
            </MobileNavLink>
            <MobileNavLink href="/localizacao" onClick={() => setMobileMenuOpen(false)}>
              Localização
            </MobileNavLink>
            <MobileNavLink href={siteConfig.airbnbUrl} onClick={() => setMobileMenuOpen(false)}>
              Ver no Airbnb
            </MobileNavLink>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: 'none',
        color: colors.text,
        padding: '6px 2px',
        borderBottom: '2px solid transparent',
        transition: 'color 0.2s ease, border-color 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      style={{
        padding: '16px clamp(20px, 5vw, 64px)',
        borderBottom: `1px solid ${colors.divider}`,
        display: 'block',
        color: colors.text,
        textDecoration: 'none',
      }}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

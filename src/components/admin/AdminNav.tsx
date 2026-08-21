'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { colors } from '@/content/config';

export function AdminNav({ userEmail }: { userEmail: string }) {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '16px 24px',
        background: colors.accent,
        color: '#fff',
        flexWrap: 'wrap',
      }}
    >
      <Link href="/admin" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700 }}>
        Painel Admin
      </Link>
      <Link href="/admin" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', opacity: 0.9 }}>
        Páginas do Site
      </Link>
      <Link href="/admin/paginas-novas" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', opacity: 0.9 }}>
        Páginas Criadas
      </Link>
      <a
        href="/"
        target="_blank"
        rel="noopener"
        style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', opacity: 0.9 }}
      >
        Ver Site ↗
      </a>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '13px', opacity: 0.85 }}>{userEmail}</span>
        <button
          onClick={handleLogout}
          style={{
            padding: '6px 14px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.5)',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer',
          }}
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

import Link from 'next/link';
import { FIXED_PAGES } from '@/lib/pageContent';
import { colors } from '@/content/config';

export default function AdminDashboard() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '32px 24px' }}>
      <h1 style={{ fontSize: '24px', margin: '0 0 4px' }}>Páginas do Site</h1>
      <p style={{ fontSize: '14px', opacity: 0.7, margin: '0 0 24px' }}>
        Clique em uma página para editar textos e fotos.
      </p>

      <div style={{ display: 'grid', gap: '12px' }}>
        {FIXED_PAGES.map((page) => (
          <Link
            key={page.slug}
            href={`/admin/pagina/${page.slug}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '18px 20px',
              background: '#fff',
              border: `1px solid ${colors.divider}`,
              borderRadius: '8px',
              textDecoration: 'none',
              color: colors.text,
            }}
          >
            <span style={{ fontWeight: 500 }}>{page.label}</span>
            <span style={{ color: colors.accent, fontSize: '13px', fontWeight: 700 }}>Editar →</span>
          </Link>
        ))}
      </div>

      <div
        style={{
          marginTop: '32px',
          padding: '20px',
          background: colors.surface,
          borderRadius: '8px',
        }}
      >
        <h2 style={{ fontSize: '16px', margin: '0 0 8px' }}>Quer criar uma página nova?</h2>
        <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 12px' }}>
          Além dessas 6 páginas fixas, você pode criar páginas extras (ex: Promoções, Depoimentos) sem
          precisar de programação.
        </p>
        <Link
          href="/admin/paginas-novas"
          style={{
            display: 'inline-block',
            padding: '10px 18px',
            background: colors.accent,
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Gerenciar páginas criadas
        </Link>
      </div>
    </div>
  );
}

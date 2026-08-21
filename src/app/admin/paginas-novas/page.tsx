import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { colors } from '@/content/config';

export default async function CustomPagesList() {
  const supabase = await createClient();
  const { data: pages } = await supabase
    .from('custom_pages')
    .select('slug, title, published, show_in_menu')
    .order('created_at', { ascending: false });

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '32px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
        <h1 style={{ fontSize: '24px', margin: 0 }}>Páginas Criadas</h1>
        <Link
          href="/admin/paginas-novas/nova"
          style={{
            padding: '10px 18px',
            background: colors.accent,
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          + Nova página
        </Link>
      </div>
      <p style={{ fontSize: '14px', opacity: 0.7, margin: '0 0 24px' }}>
        Páginas extras além das 6 fixas do site (Home, Eventos, etc).
      </p>

      {(!pages || pages.length === 0) && (
        <div style={{ padding: '32px', background: '#fff', border: `1px solid ${colors.divider}`, borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ opacity: 0.7, margin: 0 }}>Nenhuma página criada ainda.</p>
        </div>
      )}

      <div style={{ display: 'grid', gap: '12px' }}>
        {pages?.map((page) => (
          <Link
            key={page.slug}
            href={`/admin/paginas-novas/${page.slug}`}
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
            <div>
              <span style={{ fontWeight: 500 }}>{page.title}</span>
              <span style={{ fontSize: '12px', opacity: 0.5, marginLeft: '10px' }}>/pagina/{page.slug}</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {!page.published && (
                <span style={{ fontSize: '11px', padding: '2px 8px', background: '#f0d9d9', color: '#c0392b', borderRadius: '3px' }}>
                  Rascunho
                </span>
              )}
              <span style={{ color: colors.accent, fontSize: '13px', fontWeight: 700 }}>Editar →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

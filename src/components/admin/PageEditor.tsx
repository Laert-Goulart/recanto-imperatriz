'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { GenericJsonEditor } from './GenericJsonEditor';
import { colors } from '@/content/config';

export function PageEditor({
  slug,
  label,
  initialContent,
}: {
  slug: string;
  label: string;
  initialContent: Record<string, unknown>;
}) {
  const [content, setContent] = useState<Record<string, unknown>>(initialContent);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    const supabase = createClient();
    const { error } = await supabase.from('page_content').upsert({
      slug,
      content,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      setMessage({ type: 'error', text: 'Erro ao salvar: ' + error.message });
    } else {
      setMessage({ type: 'success', text: 'Salvo com sucesso! O site já está atualizado.' });
    }
    setSaving(false);
  };

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '32px 24px' }}>
      <h1 style={{ fontSize: '24px', margin: '0 0 4px' }}>Editar: {label}</h1>
      <p style={{ fontSize: '14px', opacity: 0.7, margin: '0 0 24px' }}>
        Altere textos e imagens abaixo. As mudanças aparecem no site assim que salvar.
      </p>

      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#f5f5f5',
          padding: '12px 0',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            padding: '10px 24px',
            background: colors.accent,
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: saving ? 'default' : 'pointer',
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? 'Salvando...' : 'Salvar alterações'}
        </button>
        {message && (
          <span
            style={{
              fontSize: '13px',
              color: message.type === 'success' ? '#2d7a3e' : '#c0392b',
            }}
          >
            {message.text}
          </span>
        )}
      </div>

      <div
        style={{
          background: '#fff',
          border: `1px solid ${colors.divider}`,
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <GenericJsonEditor value={content as never} onChange={(v) => setContent(v as Record<string, unknown>)} />
      </div>
    </div>
  );
}

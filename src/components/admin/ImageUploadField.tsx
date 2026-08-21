'use client';

import { useRef, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { colors } from '@/content/config';

export function ImageUploadField({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    const supabase = createClient();
    const ext = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from('site-images')
      .upload(fileName, file, { cacheControl: '3600', upsert: false });

    if (uploadError) {
      setError('Erro ao enviar imagem: ' + uploadError.message);
      setUploading(false);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from('site-images').getPublicUrl(fileName);

    onChange(publicUrl);
    setUploading(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div style={{ marginBottom: '12px' }}>
      {label && (
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
          {label}
        </label>
      )}
      <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div
          style={{
            width: '140px',
            height: '100px',
            borderRadius: '4px',
            border: `1px solid ${colors.divider}`,
            background: colors.surface,
            overflow: 'hidden',
            flex: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {value ? (
            <img src={value} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span style={{ fontSize: '11px', opacity: 0.5 }}>Sem foto</span>
          )}
        </div>

        <div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            style={{ display: 'none' }}
          />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              style={{
                padding: '8px 16px',
                background: colors.accent,
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: uploading ? 'default' : 'pointer',
                opacity: uploading ? 0.7 : 1,
              }}
            >
              {uploading ? 'Enviando...' : value ? 'Trocar foto' : 'Enviar foto'}
            </button>
            {value && (
              <button
                type="button"
                onClick={() => onChange('')}
                disabled={uploading}
                style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  color: '#c0392b',
                  border: '1px solid #c0392b',
                  borderRadius: '4px',
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Remover foto
              </button>
            )}
          </div>
          {error && <p style={{ fontSize: '12px', color: '#c0392b', margin: '8px 0 0' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

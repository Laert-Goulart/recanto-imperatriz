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
    <div style={{ marginBottom: '8px' }}>
      {label && (
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
          {label}
        </label>
      )}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {value && (
          <img
            src={value}
            alt="Preview"
            style={{
              width: '120px',
              height: '90px',
              objectFit: 'cover',
              borderRadius: '4px',
              border: `1px solid ${colors.divider}`,
            }}
          />
        )}
        <div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            style={{ fontSize: '13px' }}
          />
          {uploading && <p style={{ fontSize: '12px', opacity: 0.7, margin: '4px 0 0' }}>Enviando...</p>}
          {error && <p style={{ fontSize: '12px', color: '#c0392b', margin: '4px 0 0' }}>{error}</p>}
          {value && (
            <p style={{ fontSize: '11px', opacity: 0.5, margin: '4px 0 0', wordBreak: 'break-all', maxWidth: '300px' }}>
              {value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

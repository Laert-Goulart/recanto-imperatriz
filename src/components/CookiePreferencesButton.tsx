'use client';

import { colors } from '@/content/config';

// Apaga a escolha de cookies e recarrega a página para o aviso aparecer de novo
export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => {
        try {
          localStorage.removeItem('cookie-consent');
        } catch {}
        window.location.reload();
      }}
      style={{
        padding: '10px 16px', background: 'transparent', border: `1px solid ${colors.accent}`, color: colors.accent,
        borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, margin: '4px 0 8px',
      }}
    >
      Alterar minhas preferências de cookies
    </button>
  );
}

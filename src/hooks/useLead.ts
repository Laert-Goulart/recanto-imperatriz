import { useState } from 'react';
import { Lead } from '@/lib/supabase';

export function useLead() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (
    lead: Omit<Lead, 'id' | 'created_at'>,
    onSuccess?: () => void
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao enviar lead');
      }

      onSuccess?.();
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(message);
      console.error('Lead submission error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submitLead, loading, error };
}

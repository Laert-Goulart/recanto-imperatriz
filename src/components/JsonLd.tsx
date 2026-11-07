// Dados estruturados (schema.org) para o Google entender o negócio
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export const SITE_URL = 'https://www.recantodaimperatriz.com.br';

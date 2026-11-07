import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== 'production';
const SUPABASE = 'https://ksnrsekjliakahnrsrsy.supabase.co';
const GOOGLE = 'https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.google.com https://*.google.com.br https://*.doubleclick.net https://*.googleadservices.com';
const META = 'https://connect.facebook.net https://www.facebook.com';

// Next.js injeta scripts inline na hidratação, por isso 'unsafe-inline' em script-src.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com ${GOOGLE} ${META}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${SUPABASE} ${GOOGLE} ${META}`,
  "font-src 'self' data:",
  `connect-src 'self' ${SUPABASE} ${GOOGLE} ${META}`,
  `frame-src 'self' ${GOOGLE} ${META}`,
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
        ],
      },
    ];
  },
  async rewrites() {
    // Serve a versão WebP (gerada por scripts/convert-images.mjs) no lugar do PNG/JPG,
    // inclusive para conteúdos já salvos pelo painel que apontam para o arquivo original.
    return {
      beforeFiles: [
        { source: '/images/:name.png', destination: '/images/webp/:name.webp' },
        { source: '/images/:name.jpg', destination: '/images/webp/:name.webp' },
        { source: '/images/:name.jpeg', destination: '/images/webp/:name.webp' },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    // A antiga página de hospedagem foi substituída pela página de temporada
    return [
      { source: '/hospedagem', destination: '/temporada', permanent: true },
      // Endereço único: sem "www" redireciona para "www" (evita conteúdo duplicado no Google)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'recantodaimperatriz.com.br' }],
        destination: 'https://www.recantodaimperatriz.com.br/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

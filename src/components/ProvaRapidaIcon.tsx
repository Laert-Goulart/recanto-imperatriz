const icons: Record<string, React.ReactNode> = {
  building: (
    <>
      <path d="M6 22V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
      <path d="M6 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2" />
      <path d="M18 9h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-2" />
      <path d="M10 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
      <path d="M10 13h.01" />
      <path d="M14 13h.01" />
      <path d="M10 17h.01" />
      <path d="M14 17h.01" />
    </>
  ),
  hotel: (
    <>
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </>
  ),
  car: (
    <>
      <path d="M19 17h2v-4.5a2.5 2.5 0 0 0-2.5-2.5h-1.34a1 1 0 0 1-.99-.858L15.6 6.5A2 2 0 0 0 13.62 5H6a2 2 0 0 0-2 1.5l-1 4" />
      <path d="M3 17h2" />
      <path d="M9 17h6" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  wifi: (
    <>
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </>
  ),
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  leaf: (
    <>
      <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.83V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </>
  ),
};

export function ProvaRapidaIcon({ name, color }: { name: string; color: string }) {
  const path = icons[name];
  if (!path) return null;

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginBottom: '10px' }}
    >
      {path}
    </svg>
  );
}

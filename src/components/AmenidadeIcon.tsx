const icons: Record<string, React.ReactNode> = {
  bed: (
    <>
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </>
  ),
  utensils: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="8" y1="8" x2="16" y2="16" />
      <line x1="16" y1="8" x2="8" y2="16" />
    </>
  ),
  tv: (
    <>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4" y1="12" x2="2" y2="12" />
      <line x1="22" y1="12" x2="20" y2="12" />
      <line x1="5" y1="5" x2="3.5" y2="3.5" />
      <line x1="19" y1="19" x2="20.5" y2="20.5" />
      <line x1="5" y1="19" x2="3.5" y2="20.5" />
      <line x1="19" y1="5" x2="20.5" y2="3.5" />
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
  thermometer: (
    <>
      <rect x="10" y="3" width="4" height="12" rx="2" />
      <circle cx="12" cy="18" r="3" />
    </>
  ),
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
};

export function AmenidadeIcon({ name, color }: { name: string; color: string }) {
  const path = icons[name];
  if (!path) return null;

  return (
    <svg
      width="24"
      height="24"
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

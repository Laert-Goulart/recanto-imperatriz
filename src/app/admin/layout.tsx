import { createClient } from '@/lib/supabase/server';
import { AdminNav } from '@/components/admin/AdminNav';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Login page itself has no session yet — let middleware handle its own gating
  const isLoggedIn = !!user;

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {isLoggedIn && <AdminNav userEmail={user!.email ?? ''} />}
      <main>{children}</main>
    </div>
  );
}

export const metadata = {
  robots: { index: false, follow: false },
};

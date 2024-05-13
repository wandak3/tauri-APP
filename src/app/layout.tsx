'use client';
import Header from '@/components/header';
import './globals.css';
import Loader from '@/components/loader';
import Sidebar from '@/components/sidebar';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <div className='flex h-screen overflow-hidden'>
          <Sidebar />
          <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

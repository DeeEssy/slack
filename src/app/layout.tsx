import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConvexAuthNextjsServerProvider } from '@convex-dev/auth/nextjs/server';

import { ConvexClientProvider } from '@/components/convex/ConvexClientProvider';
import { JotaiProvider } from '@/components/jotai/JotaiProvider';
import { Modals } from '@/components/Modals';
import { Toaster } from '@/components/ui/Sonner';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Slack',
  description: 'Slack description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConvexClientProvider>
            <JotaiProvider>
              <Toaster />
              <Modals/>
              {children}
            </JotaiProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}

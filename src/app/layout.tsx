import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';

export const metadata: Metadata = {
  title: 'Sai Ram Makkapati',
  description: 'Creative Technologist & Maker',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{
        margin: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.6,
      }}>
        <Navigation />
        
        <main style={{
          flex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem 2rem',
          width: '100%',
        }}>
          {children}
        </main>

        <footer style={{
          backgroundColor: '#f9f9f9',
          padding: '2rem 1rem',
          textAlign: 'center',
          marginTop: 'auto',
          fontSize: '0.9rem',
          color: '#666',
        }}>
          <p>© {new Date().getFullYear()} Sai Ram Makkapati. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1rem',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Page Not Found</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#1a1a1a',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        Go Home
      </Link>
    </div>
  );
}

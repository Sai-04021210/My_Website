'use client';

import Link from 'next/link';

interface ClientButtonProps {
  children: React.ReactNode;
  href: string;
  type: 'primary' | 'secondary';
}

export default function ClientButton({ children, href, type }: ClientButtonProps) {
  const baseStyles = {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    textAlign: 'center' as const,
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#0070f3',
      color: 'white',
      border: 'none',
      '&:hover': {
        backgroundColor: '#005bb5',
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#ff6b00',
      border: '2px solid #ff6b00',
      '&:hover': {
        backgroundColor: '#ff6b00',
        color: 'white',
      },
    },
  };

  const style = {
    ...baseStyles,
    ...variantStyles[type],
    '&:hover': {
      ...variantStyles[type]['&:hover'],
    },
  };

  return (
    <Link 
      href={href}
      style={{
        ...style,
      }}
      onMouseOver={(e) => {
        if (type === 'primary') {
          e.currentTarget.style.backgroundColor = '#005bb5';
        } else {
          e.currentTarget.style.backgroundColor = '#ff6b00';
          e.currentTarget.style.color = 'white';
        }
      }}
      onMouseOut={(e) => {
        if (type === 'primary') {
          e.currentTarget.style.backgroundColor = '#0070f3';
        } else {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#ff6b00';
        }
      }}
    >
      {children}
    </Link>
  );
}

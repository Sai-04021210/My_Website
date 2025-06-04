'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/videos', label: 'Videos' },
    { href: '/explorations', label: 'Explorations' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link 
          href="/" 
          style={{
            fontWeight: 'bold',
            fontSize: '1.25rem',
            color: '#333',
            textDecoration: 'none',
          }}
        >
          Sai Ram Makkapati
        </Link>
        <ul style={{
          display: 'flex',
          gap: '1.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                style={{
                  color: '#555',
                  textDecoration: 'none',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                  display: 'block',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#0070f3')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#555')}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import Link from 'next/link';
import ClientButton from './components/ClientButton';

export default function Home() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 1rem',
      lineHeight: '1.6',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '1rem',
        fontWeight: '700',
        color: '#1a1a1a',
      }}>
        Sai Ram Makkapati
      </h1>
      
      <p style={{
        fontSize: '1.25rem',
        color: '#666',
        marginBottom: '2rem',
        fontWeight: '400',
      }}>
        Creative Technologist & Maker
      </p>

      <p style={{
        marginBottom: '1.5rem',
        fontSize: '1.1rem',
        lineHeight: '1.8',
      }}>
        Building the future of Industry 4.0 with smart, connected systems and open-source solutions.
        Specializing in Asset Administration Shells, edge computing, and data-driven automation.
      </p>
      
      <div style={{
        marginTop: '2.5rem',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        <ClientButton 
          href="/portfolio"
          type="primary"
        >
          View My Work
        </ClientButton>
        
        <ClientButton 
          href="/contact"
          type="secondary"
        >
          Get In Touch
        </ClientButton>
      </div>
    </div>
  );
}

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const hideOnPaths = ['/login', '/dashboard'];
  
  if (hideOnPaths.includes(pathname)) return null;

  return (
    <footer style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '4rem 0',
      marginTop: '0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>PROTOLABS</h3>
          <p style={{ color: '#888', maxWidth: '300px' }}>
            The world's fastest digital manufacturing source for rapid prototyping and on-demand production.
          </p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Services</h4>
          <ul style={{ listStyle: 'none', color: '#888', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Injection Molding</li>
            <li>CNC Machining</li>
            <li>3D Printing</li>
            <li>Sheet Metal</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Resources</h4>
          <ul style={{ listStyle: 'none', color: '#888', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Design Cube</li>
            <li>Technical Guides</li>
            <li>Case Studies</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="container" style={{
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid #333',
        color: '#555',
        fontSize: '0.9rem',
        textAlign: 'center'
      }}>
        © 2026 Protolabs Clone. All rights reserved.
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { useState } from 'react';

const sidebarItems = [
  { icon: '🏠', label: 'Home', active: false },
  { icon: '📄', label: 'Quotes', active: true },
  { icon: '📂', label: 'Parts & Molds', active: false },
  { icon: '📦', label: 'Production Catalog', active: false },
  { icon: '🕒', label: 'Order History', active: false },
  { icon: '🎧', label: 'Support Center', active: false },
  { icon: '⚙️', label: 'Profile & Settings', active: false },
];

export default function Sidebar() {
  return (
    <aside style={{
        width: '260px',
        backgroundColor: '#F8F9FA',
        borderRight: '1px solid var(--border-color)',
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 0'
    }}>
      <div style={{ padding: '0 1.5rem 2rem', borderBottom: '1px solid #ddd', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: 800, letterSpacing: '1px' }}>PRODESK™</h2>
      </div>

      <nav style={{ flexGrow: 1 }}>
        <ul style={{ listStyle: 'none' }}>
          {sidebarItems.map(item => (
            <li key={item.label} style={{
              padding: '0.75rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
              backgroundColor: item.active ? '#e9ecef' : 'transparent',
              borderLeft: item.active ? '4px solid var(--primary-color)' : '4px solid transparent',
              transition: 'var(--transition)'
            }} className="sidebar-link">
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              <span style={{ fontWeight: item.active ? 600 : 400, fontSize: '0.95rem' }}>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ padding: '2rem 1.5rem', borderTop: '1px solid #ddd' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#ddd', borderRadius: '50%' }}></div>
            <span>Deepak D.</span>
         </div>
      </div>

      <style jsx>{`
        .sidebar-link:hover {
          backgroundColor: #F0F4F8;
        }
      `}</style>
    </aside>
  );
}

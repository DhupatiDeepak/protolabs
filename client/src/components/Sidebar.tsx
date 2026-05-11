import Link from 'next/link';

export default function Sidebar({ activeTab = 'Home', onTabChange, onNewQuote }: { activeTab?: string, onTabChange?: (tab: string) => void, onNewQuote?: () => void }) {
  const sidebarItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '📄', label: 'Quotes' },
    { icon: '📁', label: 'Parts & Molds' },
    { icon: '📖', label: 'Production Catalog' },
    { icon: '🕒', label: 'Order History' },
    { icon: '🎧', label: 'Support Center' },
    { icon: '⚙️', label: 'Profile & Settings' },
  ];
  return (
    <aside style={{
        width: '260px',
        backgroundColor: '#2b303b',
        color: '#a0aab2',
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 0 0 0',
        zIndex: 100
    }}>
      <div style={{ padding: '0 1.5rem 1.5rem', borderBottom: '1px solid #3c424d' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '1px', display: 'flex' }}>
            <span style={{ color: '#0078c8' }}>PRO</span>
            <span style={{ color: '#e0e4e8' }}>DESK™</span>
        </h2>
      </div>

      <nav style={{ flexGrow: 1, marginTop: '1rem', overflowY: 'auto' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {sidebarItems.map(item => (
            <li key={item.label} onClick={() => onTabChange && onTabChange(item.label)} style={{
              padding: '0.8rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
              backgroundColor: activeTab === item.label ? '#3c424d' : 'transparent',
              borderLeft: activeTab === item.label ? '4px solid #0078c8' : '4px solid transparent',
              transition: 'all 0.2s ease',
              color: activeTab === item.label ? '#ffffff' : '#a0aab2',
            }} className="sidebar-link">
              <span style={{ fontSize: '1.2rem', filter: activeTab === item.label ? 'none' : 'grayscale(100%) opacity(0.7)' }}>{item.icon}</span>
              <span style={{ fontWeight: activeTab === item.label ? 600 : 400, fontSize: '0.95rem' }}>{item.label}</span>
            </li>
          ))}
          <li style={{ padding: '1.5rem 1.5rem' }}>
            <button onClick={onNewQuote} className="btn btn-primary" style={{
              width: '100%',
              padding: '0.5rem',
              fontSize: '0.9rem',
              backgroundColor: '#0078c8',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <span>+</span> New Quote
            </button>
          </li>
        </ul>
      </nav>

      <div style={{ padding: '1.5rem', marginTop: 'auto', position: 'relative' }}>
        <div style={{
            position: 'absolute',
            bottom: '5rem',
            left: '1.5rem',
            width: '45px',
            height: '45px',
            backgroundColor: '#0078c8',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            color: 'white',
            fontSize: '1.5rem'
        }}>
            💬
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '1.2rem', fontWeight: 800 }}>
           <span style={{ display: 'inline-block', width: '24px', height: '24px', border: '2px solid #fff', borderRadius: '4px', textAlign: 'center', lineHeight: '20px', fontSize: '0.8rem' }}>P</span>
           PROTOLABS
        </div>
      </div>

      <style jsx>{`
        .sidebar-link:hover {
          background-color: #3c424d !important;
          color: #ffffff !important;
        }
      `}</style>
    </aside>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section animate-fade" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="container grid grid-2" style={{ alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#111' }}>
            Digital Manufacturing for <span style={{ color: 'var(--primary-color)' }}>Early Prototyping</span> to Final Production
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            lineHeight: '1.6'
          }}>
            Upload your CAD files and get instant pricing, lead time, and manufacturing insights. From CNC machining to 3D printing, we build your parts fast.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Get Instant Quote
            </Link>
            <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Explore Services
            </button>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Trusted by industry leaders:
            </div>
            {['PepsiCo', 'Michelin', 'Epson'].map(brand => (
              <span key={brand} style={{ 
                fontWeight: 700, 
                opacity: 0.5, 
                letterSpacing: '1px',
                fontSize: '1.1rem'
              }}>{brand}</span>
            ))}
          </div>
        </div>
        
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(0, 92, 185, 0.1) 0%, transparent 70%)',
            zIndex: 0
          }}></div>
          <Image 
            src="/hero-part.png" 
            alt="Mechanical Part" 
            width={600} 
            height={600} 
            priority
            style={{ 
              position: 'relative', 
              zIndex: 1,
              filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))'
            }}
          />
        </div>
      </div>
    </section>
  );
}

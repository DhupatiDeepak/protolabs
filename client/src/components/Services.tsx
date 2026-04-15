"use client";

import Image from 'next/image';

const services = [
  {
    title: 'Injection Molding',
    description: 'Rapid tooling and production for plastic, liquid silicone rubber, and metal parts.',
    image: '/injection.png'
  },
  {
    title: 'CNC Machining',
    description: 'High-speed 3-axis and 5-axis milling, turning, and more for prototyping and production.',
    image: '/cnc.png'
  },
  {
    title: '3D Printing',
    description: 'Six industrial-grade additive manufacturing technologies for metal and plastic parts.',
    image: '/3d-printing.png'
  },
  {
    title: 'Sheet Metal Fabrication',
    description: 'Rapid sheet metal prototyping and production for brackets, enclosures, and more.',
    image: '/sheet-metal.png'
  }
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Manufacturing Services</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Choose from a wide range of digital manufacturing services to accelerate your product development.
          </p>
        </div>
        
        <div className="grid grid-4">
          {services.map((service, index) => (
            <div key={index} style={{
              padding: '2rem',
              borderRadius: '8px',
              backgroundColor: 'var(--surface-color)',
              transition: 'var(--transition)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }} className="service-card">
              <div style={{ marginBottom: '1.5rem', width: '120px', height: '120px', position: 'relative' }}>
                <Image src={service.image} alt={service.title} width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', flexGrow: 1 }}>
                {service.description}
              </p>
              <button style={{ 
                marginTop: '1.5rem', 
                color: 'var(--primary-color)', 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                Learn more <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-color);
        }
      `}</style>
    </section>
  );
}

"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload CAD File',
      description: 'Upload your 3D CAD file (STL, STEP, or OBJ) to our secure dashboard.'
    },
    {
      number: '02',
      title: 'Get Instant Quote',
      description: 'Our automated system analyzes your geometry and provides a quote in seconds.'
    },
    {
      number: '03',
      title: 'Manufacturing Starts',
      description: 'Once approved, our industrial-grade machines begin building your parts.'
    },
    {
      number: '04',
      title: 'Fast Delivery',
      description: 'Your high-quality parts are shipped directly to your door in days.'
    }
  ];

  return (
    <section id="capabilities" className="section" style={{ backgroundColor: '#050505', color: '#fff', padding: '10rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-1.5px', background: 'linear-gradient(to bottom, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>How It Works</h2>
          <p style={{ color: '#fff', fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6' }}>Our streamlined process takes you from design to part in record time.</p>
        </div>
        
        <div className="grid grid-4" style={{ gap: '2.5rem' }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              position: 'relative',
              padding: '4rem 2.5rem',
              borderTop: '5px solid var(--primary-color)',
              backgroundColor: '#111',
              borderRadius: '16px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden'
            }} className="step-card">
              <div 
                className="step-glow"
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(0, 92, 185, 0.05) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              ></div>
              <div style={{
                fontSize: '5rem',
                fontWeight: 900,
                color: '#fff',
                opacity: 1,
                marginBottom: '1rem',
                lineHeight: 1,
                fontStyle: 'italic',
                letterSpacing: '-2px'
              }}>{step.number}</div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: 700, color: '#fff' }}>{step.title}</h3>
              <p style={{ color: '#fff', lineHeight: '1.8', fontSize: '1.05rem', opacity: 0.8 }}>{step.description}</p>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '7rem', textAlign: 'center' }}>
          <button className="btn btn-primary" style={{ padding: '1.4rem 4.5rem', fontSize: '1.2rem', borderRadius: '100px', fontWeight: 700, boxShadow: '0 10px 30px rgba(0, 92, 185, 0.3)' }}>
            Start Your Project
          </button>
        </div>
      </div>
      <style jsx>{`
        .step-card:hover {
          transform: translateY(-15px) scale(1.02);
          background-color: #181818 !important;
          box-shadow: 0 35px 60px -15px rgba(0, 92, 185, 0.2) !important;
        }
        .step-card:hover .step-glow {
          background: radial-gradient(circle, rgba(0, 92, 185, 0.15) 0%, transparent 70%) !important;
        }
      `}</style>
    </section>
  );
}

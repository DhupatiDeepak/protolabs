import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EngineeringSupport() {
  return (
    <section className="section" style={{ backgroundColor: '#fff', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.8rem', color: '#111', marginBottom: '2rem', fontWeight: 700 }}>Design and Engineering Support</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              We offer both automated and live manufacturing support. With every quote, you get free interactive manufacturability analysis to quickly improve part design.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              If you have additional questions, applications engineers are always available to talk through your project at 877-479-3680 or <Link href="mailto:customerservice@protolabs.com" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>customerservice@protolabs.com</Link>.
            </p>
            <button className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1rem', fontWeight: 700 }}>
              Contact Us
            </button>
          </div>
          
          <div style={{ position: 'relative', height: '450px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Image 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Engineering Support" 
              fill 
              style={{ objectFit: 'cover' }} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

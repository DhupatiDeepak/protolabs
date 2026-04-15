"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function IndustriesServed() {
  const industries = [
    {
      title: 'Aerospace',
      desc: 'High-quality components from early prototyping to hot-fire testing to launch',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Automotive',
      desc: 'Rapid prototyping and ramp-up production for traditional, electric, and autonomous vehicles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Consumer Electronics',
      desc: 'Functional prototyping and on-demand production of consumer and computer electronics parts',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Medical',
      desc: 'Accelerated development of medical devices and health care products',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>Major Industries Served</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>We work with more than 90% of Fortune 100 companies from our target industries.</p>
        </div>
        
        <div className="grid grid-4" style={{ gap: '1.5rem' }}>
          {industries.map((ind, i) => (
            <div key={i} style={{ 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease'
            }} className="industry-card">
              <div style={{ position: 'relative', height: '180px', width: '100%' }}>
                <Image 
                  src={ind.image} 
                  alt={ind.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#111' }}>{ind.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', minHeight: '4.5rem' }}>
                  {ind.desc}
                </p>
                <Link href="#" style={{ 
                   color: 'var(--primary-color)', 
                   fontWeight: 700, 
                   textDecoration: 'none',
                   fontSize: '0.95rem',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '0.5rem'
                }}>
                  Learn More <span style={{ fontSize: '1.2rem' }}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .industry-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Resources() {
  const resources = [
    {
      title: 'Selecting a Material',
      desc: 'Choose from hundreds of commercial-grade plastic, metal, elastomer, and liquid silicone rubber materials.',
      image: 'https://images.unsplash.com/photo-1550985543-f47f5cf7256e?auto=format&fit=crop&q=80&w=400',
      cta: 'Learn More →'
    },
    {
      title: 'Plastic Manufacturing: Common Processes and Materials',
      desc: 'Learn how to select the best manufacturing process and material for your custom plastic parts.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400',
      cta: 'Read Guide →'
    },
    {
      title: 'Design for Machining Toolkit',
      desc: 'Get in-depth design advice to optimize your plastic and metal parts for CNC machining.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400',
      cta: 'Learn More →'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#fff', padding: '10rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '3.1rem', marginBottom: '6rem', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-1.5px' }}>Manufacturing Resources</h2>
        
        <div className="grid grid-3" style={{ gap: '2.5rem' }}>
          {resources.map((res, i) => (
            <div key={i} className="resource-card" style={{ 
              backgroundColor: '#fff', 
              borderRadius: '20px', 
              overflow: 'hidden',
              boxShadow: '0 15px 45px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
              border: '1px solid #f2f2f2'
            }}>
              <div style={{ position: 'relative', height: '260px', width: '100%', overflow: 'hidden' }}>
                <Image 
                  src={res.image} 
                  alt={res.title} 
                  fill 
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  className="card-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem', color: '#111', fontWeight: 800, lineHeight: '1.4' }}>{res.title}</h3>
                <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                  {res.desc}
                </p>
                <Link href="#" style={{ 
                   marginTop: 'auto',
                   color: 'var(--primary-color)', 
                   fontWeight: 800, 
                   textDecoration: 'none',
                   fontSize: '1.1rem',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '0.6rem'
                }}>
                  {res.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '6rem' }}>
           <button className="nav-btn">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
           </button>
           <button className="nav-btn">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
           </button>
        </div>
      </div>
      <style jsx>{`
        .resource-card:hover {
          transform: translateY(-20px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.12) !important;
          border-color: var(--primary-color) !important;
        }
        .resource-card:hover .card-image {
          transform: scale(1.1);
        }
        .nav-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid #edeff1;
          background-color: #fff;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a1a1a;
        }
        .nav-btn:hover {
          background-color: var(--primary-color);
          color: #fff;
          border-color: var(--primary-color);
          box-shadow: 0 10px 25px rgba(0, 92, 185, 0.25);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductLifeCycle() {
  const steps = [
    {
      icon: '/sync_icon_blue.png',
      title: 'Full Product Life Cycle',
      desc: 'Whether you need prototype parts in one day or full-service production, you can partner with us across your entire product life cycle for speed, quality, and cost-efficiency in every project.'
    },
    {
      icon: '/gear_icon_purple.png',
      title: 'Rapid Prototyping',
      desc: 'Take advantage of DFM feedback in our instant quotes to make adjustments to part design before any actual manufacturing begins, then navigate quickly through prototyping with ease.'
    },
    {
      icon: '/factory_icon_industrial.png',
      title: 'On-Going Production',
      desc: 'You\'ll find complete program management at Protolabs with a team of manufacturing experts who will help optimize your project around cost, quantity, and quality.'
    },
    {
      icon: '/box_icon_delivery.png',
      title: 'Short-Term Production',
      desc: 'Tap into our production capabilities for short-term needs like jigs, fixtures, and industrial components, or managing inventory and financial costs towards the end of the product life cycle.'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#fff', padding: '10rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '3rem', color: '#1a1a1a', marginBottom: '6rem', fontWeight: 800, letterSpacing: '-1px' }}>
          Digital Manufacturing Across Your Product Life Cycle
        </h2>
        
        <div className="grid grid-4" style={{ gap: '2rem' }}>
          {steps.map((step, i) => (
            <div key={i} className="step-card" style={{ 
              backgroundColor: '#F7FBFF', 
              padding: '3rem 2.5rem', 
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              position: 'relative'
            }}>
              <div style={{ position: 'relative', width: '64px', height: '64px', marginBottom: '2rem' }}>
                <Image src={step.icon} alt={step.title} fill style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#111', marginBottom: '1.2rem', fontWeight: 700 }}>{step.title}</h3>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.7', opacity: 0.9 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '6rem', textAlign: 'center' }}>
          <button className="btn btn-outline" style={{ padding: '1.2rem 4.5rem', fontWeight: 700, borderRadius: '50px', fontSize: '1.1rem' }}>
            Learn More
          </button>
        </div>
      </div>
      <style jsx>{`
        .step-card:hover {
          transform: translateY(-12px);
          background-color: #fff !important;
          box-shadow: 0 30px 60px -12px rgba(0, 92, 185, 0.15) !important;
        }
      `}</style>
    </section>
  );
}

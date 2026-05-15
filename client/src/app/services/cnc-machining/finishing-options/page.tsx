"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FinishingOptions() {
  const finishes = [
    {
      title: 'As-Machined',
      desc: 'Standard finish with visible tool marks. Parts are deburred and edges broken.',
      img: '/turned_sharp.png',
      leadTime: 'Fastest',
      materials: 'All metals and plastics'
    },
    {
      title: 'Bead Blast',
      desc: 'A uniform matte or satin finish created by blasting glass beads at the part.',
      img: '/turned_beadblast.png',
      leadTime: '+1-2 Days',
      materials: 'Metals and some plastics'
    },
    {
      title: 'Anodizing (Type II)',
      desc: 'Creates a corrosion-resistant finish. Can be dyed in various colors.',
      img: '/cnc_materials_grid.png', // Using as a placeholder for variety
      leadTime: '+3-5 Days',
      materials: 'Aluminum'
    },
    {
      title: 'Hardcoat Anodizing (Type III)',
      desc: 'Thicker coating for extreme wear resistance and better corrosion protection.',
      img: '/cnc_turning_hero.png', // Placeholder
      leadTime: '+5-7 Days',
      materials: 'Aluminum'
    },
    {
      title: 'Powder Coating',
      desc: 'A durable, wear-resistant, and decorative finish available in many colors and textures.',
      img: '/turned_broken.png', // Placeholder
      leadTime: '+5-7 Days',
      materials: 'Most metals'
    },
    {
      title: 'Electroless Nickel Plating',
      desc: 'Provides a uniform coating of nickel-phosphorus for corrosion and wear resistance.',
      img: '/production_machining_hero.png', // Placeholder
      leadTime: '+7-10 Days',
      materials: 'Metals'
    }
  ];

  return (
    <div style={{ backgroundColor: '#fff', color: '#333', fontFamily: 'var(--font-primary)' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '0.6rem 0', fontSize: '0.85rem', textAlign: 'center', fontWeight: 500 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ border: '1px solid #444', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>✨</span>
          Professional post-processing for end-use CNC parts. | 
          <Link href="/login" style={{ textDecoration: 'underline', marginLeft: '0.3rem' }}>View Options →</Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #f5f5f5' }}>
        <div className="container" style={{ fontSize: '0.75rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / CNC Machining / Finishing Options
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#222', lineHeight: '1.1' }}>Finishing Options for CNC Machining</h1>
              <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#444' }}>
                From aesthetic color to extreme wear resistance, choose the right post-processing for your project.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                  Get Instant Quote
                </Link>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image src="/turned_beadblast.png" alt="CNC Finishing" width={600} height={400} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Finishes Grid */}
      <section className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 800, textAlign: 'center' }}>Standard and Advanced Finishes</h2>
        <div className="grid grid-3" style={{ gap: '2.5rem' }}>
          {finishes.map((f, i) => (
            <div key={i} style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', position: 'relative' }}>
                <Image src={f.img} alt={f.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem', flex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#222' }}>{f.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>{f.desc}</p>
                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', fontWeight: 700 }}>Lead Time</span>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{f.leadTime}</div>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', fontWeight: 700 }}>Materials</span>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{f.materials}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Finishing Table Section */}
      <section className="section container" style={{ backgroundColor: '#fafafa', borderRadius: '16px', margin: '4rem auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 800, textAlign: 'center' }}>Quick Comparison Guide</h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #eee', backgroundColor: '#fff' }}>
            <thead>
              <tr style={{ backgroundColor: '#2C3E50', color: '#fff' }}>
                <th style={{ padding: '1.2rem', textAlign: 'left' }}>Feature</th>
                <th style={{ padding: '1.2rem', textAlign: 'center' }}>As-Machined</th>
                <th style={{ padding: '1.2rem', textAlign: 'center' }}>Bead Blast</th>
                <th style={{ padding: '1.2rem', textAlign: 'center' }}>Anodizing</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Surface Texture', standard: 'Smooth w/ marks', bead: 'Uniform Matte', anodize: 'Satin' },
                { label: 'Corrosion Resistance', standard: 'Low', bead: 'Moderate', anodize: 'High' },
                { label: 'Dimensional Change', standard: 'None', bead: 'Minimal', anodize: '0.0002" - 0.001"' },
                { label: 'Color Options', standard: 'Material color', bead: 'Material color', anodize: 'Various' }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1.2rem', fontWeight: 700 }}>{row.label}</td>
                  <td style={{ padding: '1.2rem', textAlign: 'center' }}>{row.standard}</td>
                  <td style={{ padding: '1.2rem', textAlign: 'center' }}>{row.bead}</td>
                  <td style={{ padding: '1.2rem', textAlign: 'center' }}>{row.anodize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: '#232d3b', color: '#fff', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', fontWeight: 800 }}>Ready to Perfect Your CNC Parts?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3rem' }}>
            Get a quote today and select from our extensive range of post-processing and finishing options.
          </p>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', backgroundColor: '#fff', color: '#232d3b' }}>
            Get My Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

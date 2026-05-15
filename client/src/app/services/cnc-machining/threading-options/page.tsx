"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ThreadingOptions() {
  const [activeTab, setActiveTab] = useState('standard');

  const threadTables = {
    standard: [
      { size: '4-40', reach: '0.40 in.', hole: '0.089 in.' },
      { size: '6-32', reach: '0.50 in.', hole: '0.107 in.' },
      { size: '8-32', reach: '0.60 in.', hole: '0.136 in.' },
      { size: '10-32', reach: '0.70 in.', hole: '0.159 in.' },
      { size: '1/4-20', reach: '1.00 in.', hole: '0.201 in.' },
      { size: 'M3 x 0.5', reach: '10 mm', hole: '2.5 mm' },
      { size: 'M4 x 0.7', reach: '15 mm', hole: '3.3 mm' },
      { size: 'M5 x 0.8', reach: '20 mm', hole: '4.2 mm' },
      { size: 'M6 x 1.0', reach: '25 mm', hole: '5.0 mm' },
      { size: 'M8 x 1.25', reach: '30 mm', hole: '6.8 mm' }
    ],
    coil: [
      { size: '8-32', reach: '0.45 in.', hole: '0.177 in.' },
      { size: '10-32', reach: '0.55 in.', hole: '0.201 in.' },
      { size: '1/4-20', reach: '0.75 in.', hole: '0.266 in.' },
      { size: 'M5 x 0.8', reach: '12 mm', hole: '5.2 mm' },
      { size: 'M6 x 1.0', reach: '18 mm', hole: '6.3 mm' }
    ]
  };

  return (
    <div style={{ backgroundColor: '#fff', color: '#333', fontFamily: 'var(--font-primary)' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '0.6rem 0', fontSize: '0.85rem', textAlign: 'center', fontWeight: 500 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ border: '1px solid #444', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🔔</span>
          Add threaded features to your CNC parts in minutes. | 
          <Link href="/login" style={{ textDecoration: 'underline', marginLeft: '0.3rem' }}>Get Started →</Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #f5f5f5' }}>
        <div className="container" style={{ fontSize: '0.75rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / CNC Machining / Threading Options
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#222', lineHeight: '1.1' }}>Threaded Holes Guidelines</h1>
              <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#444' }}>
                Technical requirements and design guidelines for adding threaded features to your milled and turned parts.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                  Get Instant Quote
                </Link>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image src="/threading_hero.png" alt="Threaded CNC Parts" width={600} height={400} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* General Considerations */}
      <section className="section container">
        <h2 style={{ fontSize: '2.2rem', marginBottom: '3rem', fontWeight: 800 }}>General Threading Considerations</h2>
        <div className="grid grid-3" style={{ gap: '2rem' }}>
          {[
            { title: 'Right-Handed Only', desc: 'All threads are right-handed. Left-handed threads are currently not available.' },
            { title: 'Obstructions', desc: 'Features obstructed by other part elements or fixturing cannot be threaded.' },
            { title: 'Through Holes', desc: 'Can be threaded from either side. For deep holes, threads may not be continuous.' },
            { title: 'Turning Threads', desc: 'Both internal and external threads are available on axial diameters for turned parts.' },
            { title: 'Milling Threads', desc: 'Internal threads are automated; external threads can be approximated for M12+ sizes.' },
            { title: 'File Formats', desc: 'Threaded features are not available for parts uploaded in .STL format.' }
          ].map((item, i) => (
            <div key={i} style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-color)' }}>{item.title}</h4>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Diagrams Section */}
      <section className="section container" style={{ backgroundColor: '#fafafa', borderRadius: '16px', margin: '4rem auto' }}>
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800 }}>Threaded Hole Design</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444', marginBottom: '2rem' }}>
              Understanding how tools reach into your part is critical for successful threading. We provide various options for through holes and blind holes.
            </p>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', borderLeft: '4px solid var(--primary-color)', backgroundColor: '#fff' }}>
                <strong>Blind Holes:</strong> Threading typically stops 0.010" from the bottom of the hole.
              </div>
              <div style={{ padding: '1rem', borderLeft: '4px solid var(--primary-color)', backgroundColor: '#fff' }}>
                <strong>Through Holes:</strong> If deeper than tool reach, we can thread both ends, but threads will not meet in the center.
              </div>
            </div>
          </div>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image src="/threading_diagrams.png" alt="Threading Diagrams" width={600} height={400} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Specification Tables */}
      <section className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3.5rem', fontWeight: 800, textAlign: 'center' }}>Threading Specifications</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <button 
            onClick={() => setActiveTab('standard')}
            style={{ 
              padding: '0.8rem 2rem', 
              borderRadius: '4px', 
              border: '1px solid #eee',
              backgroundColor: activeTab === 'standard' ? 'var(--primary-color)' : '#fff',
              color: activeTab === 'standard' ? '#fff' : '#333',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >Standard Holes</button>
          <button 
            onClick={() => setActiveTab('coil')}
            style={{ 
              padding: '0.8rem 2rem', 
              borderRadius: '4px', 
              border: '1px solid #eee',
              backgroundColor: activeTab === 'coil' ? 'var(--primary-color)' : '#fff',
              color: activeTab === 'coil' ? '#fff' : '#333',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >Coil Inserts (Helicoil)</button>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #eee' }}>
            <thead>
              <tr style={{ backgroundColor: '#2C3E50', color: '#fff' }}>
                <th style={{ padding: '1.2rem', textAlign: 'left', border: '1px solid #eee' }}>Thread Size</th>
                <th style={{ padding: '1.2rem', textAlign: 'left', border: '1px solid #eee' }}>Max Reach / Depth</th>
                <th style={{ padding: '1.2rem', textAlign: 'left', border: '1px solid #eee' }}>Minimum Hole Diameter</th>
              </tr>
            </thead>
            <tbody>
              {threadTables[activeTab as keyof typeof threadTables].map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                  <td style={{ padding: '1.2rem', border: '1px solid #eee', fontWeight: 600 }}>{row.size}</td>
                  <td style={{ padding: '1.2rem', border: '1px solid #eee' }}>{row.reach}</td>
                  <td style={{ padding: '1.2rem', border: '1px solid #eee' }}>{row.hole}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#666', textAlign: 'center' }}>
            * Note: Max reach is subject to part geometry and tool availability. All dimensions are nominal.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: '#232d3b', color: '#fff', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', fontWeight: 800 }}>Ready to Add Threads to Your Design?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3rem' }}>
            Upload your CAD file today and specify your threading requirements directly within our interactive quote.
          </p>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', backgroundColor: '#fff', color: '#232d3b' }}>
            Get My Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

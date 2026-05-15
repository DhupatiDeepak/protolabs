"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SurfaceFinishTable from '@/components/SurfaceFinishTable';

export default function CNCTurning() {
  const materials = {
    metals: [
      'Aluminum (6061, 7075)', 'Stainless Steel (303, 304, 316)', 
      'Steel (1018, 12L14, 4140)', 'Titanium', 'Brass', 'Copper'
    ],
    plastics: [
      'ABS', 'Polycarbonate', 'Nylon', 'PEEK', 'Acetal (Delrin)', 'Ultem'
    ]
  };

  const finishes = [
    { f: 'As-turned', d: 'Visible tool marks and sharp edges. Standard finish.' },
    { f: 'Bead Blast', d: 'Uniform matte or satin surface finish. Removes tool marks.' },
    { f: 'Anodizing (Type II)', d: 'Corrosion resistant finish in various colors.' },
    { f: 'Hardcoat Anodizing (Type III)', d: 'Thicker, wear-resistant coating for industrial applications.' },
    { f: 'Powder Coating', d: 'Durable, protective finish available in many colors.' },
    { f: 'Electroless Nickel Plating', d: 'Uniform coating for corrosion and wear resistance.' }
  ];

  return (
    <div style={{ backgroundColor: '#fff', color: '#333', fontFamily: 'var(--font-primary)' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '0.6rem 0', fontSize: '0.85rem', textAlign: 'center', fontWeight: 500 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ border: '1px solid #444', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🔔</span>
          Precision turned parts in as fast as 1 day! | 
          <Link href="/login" style={{ textDecoration: 'underline', marginLeft: '0.3rem' }}>Get Started →</Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #f5f5f5' }}>
        <div className="container" style={{ fontSize: '0.75rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / CNC Machining / CNC Turning
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#222', lineHeight: '1.1' }}>CNC Turning Service</h1>
              <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#444' }}>
                High-speed lathes and live tooling for complex cylindrical parts and rapid prototypes.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                  Get Instant Quote
                </Link>
              </div>

              <div style={{ fontSize: '0.9rem', color: '#333' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>Certifications</strong> ISO 9001:2015 | AS9100D | ITAR</p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image src="/cnc_turning_hero.png" alt="CNC Turned Part" width={600} height={400} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Jump to Section */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: '70px', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', padding: '1rem 0', flexWrap: 'wrap', fontWeight: 600, fontSize: '0.9rem' }}>
          <span style={{ color: '#999' }}>Jump to Section:</span>
          <Link href="#capabilities" style={{ color: 'var(--primary-color)' }}>Capabilities</Link>
          <Link href="#materials" style={{ color: 'var(--primary-color)' }}>Materials</Link>
          <Link href="#finishes" style={{ color: 'var(--primary-color)' }}>Surface Finishes</Link>
          <Link href="#about" style={{ color: 'var(--primary-color)' }}>About CNC Turning</Link>
        </div>
      </div>

      {/* Intro Section */}
      <section id="capabilities" className="section container">
        <div style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800 }}>Precision CNC Turning Capabilities</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#333', marginBottom: '3rem' }}>
            Our CNC turning process produces custom prototypes and end-use production parts in as fast as 1 day. We use CNC lathes with live tooling to manufacture parts with complex axial and radial features, including threads and flats.
          </p>
          
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {[
              { title: 'Live Tooling', desc: 'Allows for secondary operations like milling, drilling, and tapping on the same machine.' },
              { title: 'High-Volume Lathes', desc: 'Optimized for cylindrical parts, ensuring high accuracy and fast cycle times.' },
              { title: 'Sub-Spindle Work', desc: 'Automated transfer between spindles for complete part machining in one setup.' }
            ].map((cap, i) => (
              <div key={i} style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-color)' }}>{cap.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 800, textAlign: 'center' }}>CNC Turning Materials</h2>
        
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image src="/turned_parts_tray.png" alt="CNC Turned Parts" width={600} height={400} style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', fontWeight: 700, color: 'var(--primary-color)' }}>Metals</h3>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555', lineHeight: '2' }}>
                {materials.metals.map((m, i) => <li key={i}>• {m}</li>)}
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', fontWeight: 700, color: 'var(--primary-color)' }}>Plastics</h3>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555', lineHeight: '2' }}>
                {materials.plastics.map((p, i) => <li key={i}>• {p}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Edge and Finish Specifications Section (NEW) */}
      <section className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 800, textAlign: 'center' }}>Turning Surface Finish & Edge Specifications</h2>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '4rem', fontSize: '0.9rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1.5rem', fontWeight: 700, backgroundColor: '#f9f9f9', width: '25%' }}>Aluminum</td>
                <td style={{ padding: '1.5rem' }}>Edges broken with visible toolmarks, edges broken with light bead blast, or sharp edges with visible toolmarks</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1.5rem', fontWeight: 700, backgroundColor: '#f9f9f9' }}>All other metals</td>
                <td style={{ padding: '1.5rem' }}>Edges broken with visible toolmarks or edges broken with light bead blast</td>
              </tr>
            </tbody>
          </table>

          {/* Part Finish Comparison */}
          <div className="grid grid-3" style={{ gap: '2rem', marginBottom: '5rem' }}>
            {[
              { img: '/turned_broken.png', label: 'Broken Edge', material: 'Aluminum' },
              { img: '/turned_beadblast.png', label: 'Bead Blast', material: 'Aluminum' },
              { img: '/turned_sharp.png', label: 'Sharp Edge', material: 'Aluminum' }
            ].map((p, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee', marginBottom: '1rem' }}>
                  <Image src={p.img} alt={p.label} width={400} height={300} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>Material: {p.material}</div>
                <div style={{ fontWeight: 700 }}>Surface Finish: {p.label}</div>
              </div>
            ))}
          </div>

          {/* Anodizing Table */}
          <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 800, textAlign: 'center' }}>Anodizing and Chromate Plating Specifications</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', border: '1px solid #eee' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <th style={{ padding: '1rem', border: '1px solid #eee' }}>Anodize</th>
                <th style={{ padding: '1rem', border: '1px solid #eee' }}>Hard Anodize</th>
                <th style={{ padding: '1rem', border: '1px solid #eee' }}>Chromate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '2rem', border: '1px solid #eee', verticalAlign: 'top' }}>
                  <strong>MIL-A-8625 Type II, Class 2 (Blk)</strong>
                </td>
                <td style={{ padding: '2rem', border: '1px solid #eee', verticalAlign: 'top' }}>
                  <strong>MIL-A-8625 Type III</strong>
                </td>
                <td style={{ padding: '2rem', border: '1px solid #eee', verticalAlign: 'top' }}>
                  <strong>MIL-DTL-5541 Type II, Class 1A</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Surface Finishes Component */}
      <SurfaceFinishTable finishes={finishes} />

      {/* About Section */}
      <section id="about" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800 }}>How CNC Turning Works</h2>
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
            CNC turning is a manufacturing process in which bars of material are held in a chuck and rotated while a tool is fed to the piece to remove material to create the desired shape. A lathe or turning center with live tooling can perform both turning and milling operations, allowing for complex geometries to be completed in a single setup.
          </p>
          <div style={{ backgroundColor: '#f0f9ff', padding: '2rem', borderRadius: '12px', border: '1px solid #e0f2fe' }}>
            <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Advantages of Turning</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#334155' }}>
              <li style={{ marginBottom: '0.8rem' }}>✓ Superior concentricity for cylindrical parts</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ High-speed production for round profiles</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ Integrated milling with live tooling</li>
              <li>✓ Exceptional surface finishes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: '#232d3b', color: '#fff', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', fontWeight: 800 }}>Ready to Start Your CNC Turning Project?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3rem' }}>
            Upload your CAD file today and receive an interactive quote with free design analysis.
          </p>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', backgroundColor: '#fff', color: '#232d3b' }}>
            Get My Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

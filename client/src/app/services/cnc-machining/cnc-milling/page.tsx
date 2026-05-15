"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SurfaceFinishTable from '@/components/SurfaceFinishTable';

export default function CNCMilling() {
  const materials = {
    metals: [
      'Aluminum (6061, 7075)', 'Stainless Steel (304, 316, 17-4)', 
      'Steel (1018, 4140)', 'Titanium', 'Brass', 'Copper'
    ],
    plastics: [
      'ABS', 'Polycarbonate', 'Nylon', 'PEEK', 'Acetal (Delrin)', 'Ultem'
    ]
  };

  const finishes = [
    { f: 'As-milled', d: 'Visible tool marks and sharp edges. Standard finish.' },
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
          CNC machined parts in as fast as 1 day! | 
          <Link href="/login" style={{ textDecoration: 'underline', marginLeft: '0.3rem' }}>Get Started →</Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #f5f5f5' }}>
        <div className="container" style={{ fontSize: '0.75rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / CNC Machining / CNC Milling
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#222', lineHeight: '1.1' }}>CNC Milling Service</h1>
              <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#444' }}>
                Get custom milled parts for rapid prototyping and production with precision machining.
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
              <Image src="/cnc_milling_hero.png" alt="CNC Milled Part" width={600} height={400} style={{ objectFit: 'cover' }} />
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
          <Link href="#about" style={{ color: 'var(--primary-color)' }}>About CNC Milling</Link>
        </div>
      </div>

      {/* Intro Section */}
      <section id="capabilities" className="section container">
        <div style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800 }}>Precision CNC Milling Capabilities</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#333', marginBottom: '3rem' }}>
            Our CNC milling process produces custom prototypes and end-use production parts in as fast as 1 day. We use 3-axis milling and 5-axis indexed milling processes to manufacture parts from more than 30 engineering-grade plastics and metals.
          </p>
          
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {[
              { title: '3-Axis Milling', desc: 'Ideal for parts with simple geometry that don\'t require complex undercuts.' },
              { title: '5-Axis Indexed', desc: 'Allows for machining on multiple sides in a single setup, reducing cost and improving accuracy.' },
              { title: 'Fast Lead Times', desc: 'Get parts shipped in as fast as 1 business day for rapid product development.' }
            ].map((cap, i) => (
              <div key={i} style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-color)' }}>{cap.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Guidelines (Accordions) */}
      <section className="section container" style={{ backgroundColor: '#fafafa', borderRadius: '16px', margin: '4rem auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 800, textAlign: 'center' }}>CNC Milling Design Guidelines</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {[
            { q: 'Tolerances', a: 'Typical precision of +/- 0.005 in. (0.13mm) is standard across all materials.' },
            { q: 'Maximum Part Size', a: 'Milling: 22 in. by 14 in. by 2 in. (558mm by 355mm by 50mm)' },
            { q: 'Minimum Dimensions', a: 'Minimum wall thickness: 0.020 in. (0.5mm) for most materials.' },
            { q: 'Threading', a: 'Internal and external threads available. Standard UTS and metric sizes supported.' }
          ].map((item, i) => (
            <details key={i} style={{ marginBottom: '1rem', backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #eee' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', outline: 'none', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                {item.q} <span>+</span>
              </summary>
              <p style={{ marginTop: '1rem', color: '#666', lineHeight: '1.6' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 800, textAlign: 'center' }}>CNC Milling Materials</h2>
        
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image src="/cnc_materials_grid.png" alt="CNC Machining Materials" width={600} height={400} style={{ objectFit: 'cover' }} />
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

      {/* Surface Finishes Component */}
      <SurfaceFinishTable finishes={finishes} />

      {/* About Section */}
      <section id="about" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800 }}>How CNC Milling Works</h2>
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
            CNC milling is a subtractive manufacturing process that uses a rotating cutting tool to remove material from a solid block. The process is controlled by a computer program (G-code) which directs the tool's movement across 3 or more axes. It is highly versatile and capable of producing parts with complex geometries and excellent surface finishes in a wide range of materials.
          </p>
          <div style={{ backgroundColor: '#f0f9ff', padding: '2rem', borderRadius: '12px', border: '1px solid #e0f2fe' }}>
            <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Why Choose Protolabs for Milling?</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#334155' }}>
              <li style={{ marginBottom: '0.8rem' }}>✓ Online quotes with DFM feedback</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ 1-day turnaround available</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ No minimum order quantity</li>
              <li>✓ Large material selection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: '#232d3b', color: '#fff', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', fontWeight: 800 }}>Ready to Start Your CNC Milling Project?</h2>
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

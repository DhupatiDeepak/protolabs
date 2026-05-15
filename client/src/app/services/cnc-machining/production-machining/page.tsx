"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SurfaceFinishTable from '@/components/SurfaceFinishTable';

export default function ProductionMachining() {
  const materials = {
    metals: [
      'Aluminum (6061, 7075)', 'Stainless Steel (303, 304, 316)', 
      'Steel (1018, 4140, 4340)', 'Titanium', 'Brass', 'Copper'
    ],
    plastics: [
      'ABS', 'Polycarbonate', 'Nylon', 'PEEK', 'Acetal (Delrin)', 'Ultem'
    ]
  };

  const finishes = [
    { f: 'As-machined', d: 'Visible tool marks and sharp edges. Standard for production.' },
    { f: 'Bead Blast', d: 'Uniform matte or satin surface finish. Ideal for aesthetic parts.' },
    { f: 'Anodizing (Type II)', d: 'Corrosion resistant finish in various colors.' },
    { f: 'Hardcoat Anodizing (Type III)', d: 'Thicker, wear-resistant coating for industrial use.' },
    { f: 'Powder Coating', d: 'Durable, protective finish available in many colors.' },
    { f: 'Electroless Nickel Plating', d: 'Uniform coating for corrosion and wear resistance.' }
  ];

  return (
    <div style={{ backgroundColor: '#fff', color: '#333', fontFamily: 'var(--font-primary)' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '0.6rem 0', fontSize: '0.85rem', textAlign: 'center', fontWeight: 500 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ border: '1px solid #444', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🔔</span>
          Scalable CNC machining solutions for high-volume production. | 
          <Link href="/login" style={{ textDecoration: 'underline', marginLeft: '0.3rem' }}>Learn More →</Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #f5f5f5' }}>
        <div className="container" style={{ fontSize: '0.75rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / CNC Machining / Production Machining
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#222', lineHeight: '1.1' }}>Full-Service Production Machining</h1>
              <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#444' }}>
                Move seamlessly from prototyping to high-volume production with digital manufacturing.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                  Explore Production Options
                </Link>
              </div>

              <div style={{ fontSize: '0.9rem', color: '#333' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>Certifications</strong> ISO 9001:2015 | AS9100D | ITAR</p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image src="/production_machining_hero.png" alt="Production Machining" width={600} height={400} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section container">
        <div style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800 }}>Scale with Confidence</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#333', marginBottom: '3rem' }}>
            Our production machining service offers a total supply chain solution. We provide interactive DFM feedback, high-capacity machining, and rigorous quality control to ensure your parts meet exact specifications at any volume.
          </p>
          
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {[
              { title: 'Unlimited Capacity', desc: 'Access hundreds of CNC machines across our factories and partner network.' },
              { title: 'Quality Assurance', desc: 'Standard FAI, CMM inspection, and material certifications for every order.' },
              { title: 'Program Management', desc: 'Dedicated team to manage your production lifecycle from launch to end-of-life.' }
            ].map((cap, i) => (
              <div key={i} style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-color)' }}>{cap.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="section container" style={{ backgroundColor: '#fafafa', borderRadius: '16px', margin: '4rem auto' }}>
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image src="/cmm_inspection.png" alt="CMM Inspection" width={600} height={400} style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Rigorous Quality Control</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444', marginBottom: '2rem' }}>
              We offer advanced inspection services to ensure your production parts are within tolerance. Every production order includes:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', color: '#333', lineHeight: '2' }}>
              <li>• First Article Inspection (FAI) Report</li>
              <li>• Coordinate Measuring Machine (CMM) Inspection</li>
              <li>• Material and Finishing Certifications</li>
              <li>• Digital Inspection Data for every part</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Factory Capacity Section */}
      <section id="capacity" className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 800, textAlign: 'center' }}>Unlimited Manufacturing Capacity</h2>
        
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image src="/production_factory.png" alt="Production Factory Floor" width={600} height={400} style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 700, color: 'var(--primary-color)' }}>Scalable Solutions</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444', marginBottom: '2rem' }}>
              Our digital factories and network of manufacturing partners provide nearly unlimited capacity for your production needs. We specialize in high-precision, low-volume production parts with consistent quality.
            </p>
            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Metals</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555' }}>
                  {materials.metals.slice(0, 4).map((m, i) => <li key={i}>• {m}</li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Plastics</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#555' }}>
                  {materials.plastics.slice(0, 4).map((p, i) => <li key={i}>• {p}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surface Finishes Component */}
      <SurfaceFinishTable finishes={finishes} />

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: '#232d3b', color: '#fff', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', fontWeight: 800 }}>Ready to Scale Your Machining Project?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3rem' }}>
            Get a custom production quote and discover how our digital manufacturing platform can streamline your supply chain.
          </p>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', backgroundColor: '#fff', color: '#232d3b' }}>
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}

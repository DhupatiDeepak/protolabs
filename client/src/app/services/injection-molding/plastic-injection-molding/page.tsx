"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PlasticInjectionMolding() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#333' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ fontSize: '0.85rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / <Link href="/services/injection-molding" style={{ color: 'var(--primary-color)' }}>Injection Molding</Link> / Plastic Injection Molding
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '1rem', color: '#222' }}>Plastic Injection Molding</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#444' }}>
                We stock hundreds of plastic materials for custom prototypes and low-volume production parts in as fast as 1 day.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Get a Quote
                </Link>
                <Link href="/login" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Upload a Part
                </Link>
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <p style={{ fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>Certifications</p>
                <p>ISO 9001:2015 | ITAR Registered | CTQ Inspections</p>
                <p style={{ marginTop: '0.5rem' }}>ISO 13485 certification available through our global network</p>
              </div>
            </div>
            <div style={{ position: 'relative', height: '350px' }}>
              <Image src="/plastic-parts-display.png" alt="Plastic Injection Molded Parts" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Jump to Section */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: '70px', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', padding: '1rem 0', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 700, color: '#333' }}>Jump to Section</span>
          <Link href="#design-guidelines" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Design Guidelines</Link>
          <Link href="#materials" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Materials</Link>
          <Link href="#finishes" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Surface Finishes</Link>
          <Link href="#about" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ About Plastic Molding</Link>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section container">
        <div className="grid grid-2" style={{ gap: '4rem' }}>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Our plastic injection molding process produces custom prototypes and on-demand production parts in as fast as 1 day. We use aluminum molds that offer cost-efficient tooling and accelerated manufacturing cycles, and stock more than 100 different thermoplastic resins.
            </p>
            <p style={{ fontWeight: 700, marginBottom: '1rem' }}>Plastic molding is ideal for:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Low-volume production parts', 'Bridge tooling', 'Pilot runs', 'Functional prototyping and testing'].map(item => (
                <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px', border: '1px solid #eee' }}>
             <h3 style={{ marginBottom: '1rem' }}>Definitive Guide to Injection Molding</h3>
             <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>
               This complete reference guide walks you through everything from quoting, design analysis, and shipment to best practices.
             </p>
             <input type="email" placeholder="Enter Email (required)" style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
             <button className="btn btn-primary" style={{ width: '100%' }}>Download Guide</button>
          </div>
        </div>
      </section>

      {/* Design Guidelines Table */}
      <section id="design-guidelines" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Plastic Injection Molding Design Guidelines</h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem' }}></th>
              <th style={{ padding: '1rem' }}>US</th>
              <th style={{ padding: '1rem' }}>Metric</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Maximum Part Size', us: '18.9 in. x 29.6 in. x 8 in.', metric: '480mm x 751.8mm x 203.2mm' },
              { label: 'Volume', us: '59 cu. in.', metric: '966,837 cu. mm' },
              { label: 'Depth', us: '4 in. from parting line', metric: '101mm from parting line' },
              { label: 'Projected Mold Area', us: '175 sq in.', metric: '112,903 sq. mm' }
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem', fontWeight: 700 }}>{row.label}</td>
                <td style={{ padding: '1rem' }}>{row.us}</td>
                <td style={{ padding: '1rem' }}>{row.metric}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: '0.9rem', color: '#555' }}><strong>Tolerances:</strong> Typically, we can maintain a machining tolerance of +/- 0.003 in. (0.08mm) with an included resin tolerance that can be greater but no less than +/- 0.002 in./in. (0.002mm/mm).</p>
      </section>

      {/* Materials Section */}
      <section id="materials" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Materials</h2>
        <div className="grid grid-4" style={{ gap: '1rem' }}>
          {['ABS', 'Acetal (POM)', 'Nylon (PA)', 'Polycarbonate (PC)', 'PEEK', 'Polyethylene (PE)', 'Polypropylene (PP)', 'Polystyrene (PS)', 'Polyester (PBT)', 'PPSU'].map((m, i) => (
            <div key={i} style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '4px', textAlign: 'center', fontWeight: 600, color: 'var(--primary-color)' }}>
              {m}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>See All 100+ Materials →</Link>
        </div>
      </section>

      {/* Surface Finishes */}
      <section id="finishes" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Surface Finish Options</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>FINISH</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {[
              { f: 'PM-F0', d: "non-cosmetic, finish to manufacturing discretion" },
              { f: 'PM-F1', d: 'low-cosmetic, most toolmarks removed' },
              { f: 'SPI-C1', d: '600 grit stone' },
              { f: 'SPI-B1', d: '600 grit paper' },
              { f: 'SPI-A2', d: 'grade #2 diamond buff' },
              { f: 'PM-T1', d: 'light bead blast' },
              { f: 'PM-T2', d: 'medium bead blast' }
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem', fontWeight: 700 }}>{row.f}</td>
                <td style={{ padding: '1rem' }}>{row.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* About Section */}
      <section id="about" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>How Plastic Injection Molding Works</h2>
        <p style={{ lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
          Plastic injection molding is a manufacturing process that consists of filling a metal mold cavity with liquid plastic resin, which then cools and forms a plastic part. It is the most common way to manufacture plastic parts at scale.
        </p>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          Our process uses aluminum molds that offer cost-efficient tooling and accelerated manufacturing cycles. This speed-to-market advantage allows you to get parts in as fast as 1 day, reducing your overall development time.
        </p>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Start Your Project?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Get an Online Quote
            </Link>
            <Link href="/login" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem', borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>
              Upload a Part
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

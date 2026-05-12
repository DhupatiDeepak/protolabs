"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LSRMolding() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#333' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ fontSize: '0.85rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / <Link href="/services/injection-molding" style={{ color: 'var(--primary-color)' }}>Injection Molding</Link> / Liquid Silicone Rubber Molding
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '1rem', color: '#222' }}>Liquid Silicone Rubber Injection Molding</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#444' }}>
                Get custom silicone rubber parts within days.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Get an Online Quote
                </Link>
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <p style={{ fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>Certifications</p>
                <p>ISO 9001:2015 | ITAR Registered | CTQ</p>
              </div>
            </div>
            <div style={{ position: 'relative', height: '350px' }}>
              <Image src="/lsr-sample-new.png" alt="Liquid Silicone Rubber Part" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Jump to Section */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: '70px', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', padding: '1rem 0', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 700, color: '#333' }}>Jump to Section</span>
          <Link href="#capabilities" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Capabilities</Link>
          <Link href="#materials" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Materials</Link>
          <Link href="#finishes" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Surface Finishes</Link>
          <Link href="#quality" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Quality Inspections</Link>
          <Link href="#about" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ About Silicone Rubber Molding</Link>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section container">
        <div className="grid grid-2" style={{ gap: '4rem' }}>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Our liquid silicone rubber (LSR) molding process produces custom prototypes and end-use production parts in 15 days or less. We use aluminum molds that offer cost-efficient tooling and accelerated manufacturing cycles, and stock various grades and durometers of LSR materials.
            </p>
            <p style={{ fontWeight: 700, marginBottom: '1rem' }}>Common applications for silicone rubber molding:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['low-volume production', 'bridge tooling', 'pilot runs', 'functional prototyping'].map(item => (
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
               This complete reference guide walks you through everything from quoting, design analysis, and shipment to best practices that ensure your model is optimized for molding.
             </p>
             <input type="email" placeholder="Enter Email (required)" style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
             <button className="btn btn-primary" style={{ width: '100%' }}>Download Guide</button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Liquid Silicone Rubber Molding Capabilities</h2>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          Our basic guidelines for silicone rubber molding include important design considerations to help improve part moldability, enhance cosmetic appearance, and reduce overall production time.
        </p>

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
              { label: 'Size', us: '12 in. x 8 in. x 4 in.', metric: '304.88mm x 203.2mm x 101.6mm' },
              { label: 'Volume', us: '13.3 cu. in.', metric: '217,948 cu. mm' },
              { label: 'Depth', us: 'No greater than 2 in. from any parting line; deeper parts are limited to a smaller outline', metric: 'No greater than 50.88mm from any parting line; deeper parts are limited to a smaller outline' },
              { label: 'Projected Mold Area', us: '48 sq. in.', metric: '30968 sq. mm' }
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem', fontWeight: 700 }}>{row.label}</td>
                <td style={{ padding: '1rem' }}>{row.us}</td>
                <td style={{ padding: '1rem' }}>{row.metric}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: '0.9rem', color: '#555' }}><strong>Tolerances:</strong> We can maintain a machining tolerance of +/- 0.003 in. (0.08mm) with a linear tolerance of +/- 0.025 in./in. (0.025mm/mm).</p>
      </section>

      {/* Materials Section */}
      <section id="materials" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Liquid Silicone Rubber Materials</h2>
        <div className="grid grid-4" style={{ gap: '2rem' }}>
          {[
            { name: 'Standard Silicone', desc: '30, 40, 50, 60, and 70 durometers' },
            { name: 'Medical-Grade', desc: 'Biocompatible silicone' },
            { name: 'Optical-Grade', desc: 'Highly transparent' },
            { name: 'Fluorosilicone', desc: 'Fuel and oil resistant' }
          ].map((m, i) => (
            <div key={i} style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{m.name}</h3>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>{m.desc}</p>
            </div>
          ))}
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
              { f: 'PM-F2', d: 'non-cosmetic, EDM permissible' },
              { f: 'SPI-C1', d: '600 grit stone, 10-12 Ra' },
              { f: 'PM-T1', d: 'SPI-C1 + light bead blast' },
              { f: 'PM-T2', d: 'SPI-C1 + medium bead blast' },
              { f: 'SPI-B1', d: '600 grit paper, 2-3 Ra' },
              { f: 'SPI-A2', d: 'grade #2 diamond buff, 1-2 Ra' }
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem', fontWeight: 700 }}>{row.f}</td>
                <td style={{ padding: '1rem' }}>{row.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Quality Section */}
      <section id="quality" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Quality Inspections and Finishing Options</h2>
        <p style={{ marginBottom: '2rem' }}>Depending on your application's requirements, you can choose from the following when requesting a quote for your silicone rubber parts.</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            'Designing for Manufacturability (DFM) Feedback',
            'Scientific Molding Process Development Report',
            'In-process CMM inspection and machine monitoring',
            'First article inspection (FAI) and process capability report with GD&T'
          ].map(item => (
            <li key={item} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Process Section */}
      <section id="about" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>How Does Liquid Silicone Rubber Molding Work?</h2>
        <p style={{ lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
          Due to the flexible nature of LSR, parts are manually removed from the mold, and thus, ejector pins are not built into the mold design. Like a standard aluminum tool, an LSR molding tool is fabricated using CNC machining to create a high-temperature tool built to withstand the LSR molding process. After milling, the tool is polished by hand to customer specifications, which allows six standard surface finish options.
        </p>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          The finished tool is loaded into an advanced LSR-specific injection molding press that is precision geared for accurate control of shot size to produce the most consistent LSR parts. Since LSR is a thermosetting polymer, its molded state is permanent—once it is set, it can’t be melted again like a thermoplastic.
        </p>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Start Your Project?</h2>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Get an Online Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Overmolding() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#333' }}>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#f8f9fa',
        padding: '4rem 0',
        borderBottom: '1px solid #eee'
      }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', marginBottom: '1.5rem', color: '#666' }}>
            <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / <Link href="/services/injection-molding" style={{ color: 'var(--primary-color)' }}>Injection Molding</Link> / Overmolding
          </div>
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: '#222' }}>Overmolding Service</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#444' }}>
                Get custom plastic parts molded with two materials or metal inserts.
              </p>
              <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Get a Quote
              </Link>
              
              <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>
                <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>Certifications</p>
                <p>ISO 9001:2015 | CTQ Inspections | ITAR</p>
                <p style={{ marginTop: '0.5rem' }}>ISO 13485 certification available through our global network</p>
              </div>
            </div>
            <div style={{ position: 'relative', height: '400px' }}>
              <Image src="/overmolding-hero-new.png" alt="Overmolded part with metal components" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: '70px', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', padding: '1rem 0' }}>
          <span style={{ fontWeight: 700, color: '#333' }}>Jump to Section</span>
          <Link href="#design-guidelines" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Design Guidelines</Link>
          <Link href="#material-bonding" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Overmolding Material Bonding</Link>
          <Link href="#about" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ About Overmolding</Link>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="section container">
        <div className="grid grid-2" style={{ gap: '4rem' }}>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Our overmolding process produces custom prototypes and on-demand production parts in as fast as 15 days. We use aluminum molds that offer cost-efficient tooling, producing parts from a range of thermoplastic and liquid silicone rubber materials.
            </p>
            <p style={{ fontWeight: 700, marginBottom: '1rem' }}>Overmolding is frequently used for:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['low-volume production parts', 'bridge tooling', 'pilot runs', 'functional prototyping and testing'].map(item => (
                <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '8px', border: '1px solid #eee', textAlign: 'center' }}>
             <h3 style={{ marginBottom: '1rem' }}>Definitive Guide to Injection Molding</h3>
             <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>
               This complete reference guide walks you through everything from quoting, design analysis, and shipment to best practices that ensure your model is optimized for molding.
             </p>
             <input type="email" placeholder="Enter Email (required)" style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
             <button className="btn btn-primary" style={{ width: '100%' }}>Download Guide</button>
          </div>
        </div>
      </section>

      {/* Design Guidelines Table */}
      <section id="design-guidelines" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Overmolding Design Guidelines</h2>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          Our basic guidelines for overmolding includes important design consideration to help improve part manufacturability, enhance cosmetic appearance, and reduce overall production time.
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
              { label: 'Maximum Part Size', us: '18.9 in. x 29.6 in. x 8 in.', metric: '480mm x 751.8mm x 203.2mm' },
              { label: 'Volume', us: '59 cu. in.', metric: '966,837 cu. mm' },
              { label: 'Depth', us: '4 in. from parting line', metric: '101mm from parting line' },
              { label: '', us: 'up to 8 in. if the parting line can pass through middle of part', metric: 'Up to 203.2mm if the parting line can pass through middle of part' },
              { label: 'Projected Mold Area', us: '175 sq in. (plastic)', metric: '112,903 sq. mm (plastic)' },
              { label: '', us: '48 sq. in. (silicone rubber)', metric: '30,958 sq. mm (silicone rubber)' }
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem', fontWeight: 700 }}>{row.label}</td>
                <td style={{ padding: '1rem' }}>{row.us}</td>
                <td style={{ padding: '1rem' }}>{row.metric}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ backgroundColor: '#fdfdfd', padding: '2rem', borderRadius: '4px', fontSize: '0.9rem', color: '#555', border: '1px solid #eee' }}>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: '#333' }}>Additional Notes</p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Height may be limited if using a silicone as the overmold material, and deeper parts are limited to a smaller outline.</li>
            <li style={{ marginBottom: '0.5rem' }}>Minimum part volume is 0.025 cu. in. (40.98 cu. mm).</li>
            <li style={{ marginBottom: '0.5rem' }}>With substrate molds, we can maintain a machining tolerance of ±0.003 in. (0.08mm) with an included resin tolerance that can be greater but no less than 0.002 in./in. (0.002mm/mm).</li>
            <li>With thermoplastic overmolds, tolerances remain the same as substrate molds, however, if the overmold is LSR, then tolerances shift to 0.025 in./in. (0.025mm).</li>
          </ul>
        </div>
      </section>

      {/* Material Bonding Table */}
      <section id="material-bonding" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Overmolding Material Bonding</h2>
        <p style={{ marginBottom: '2.5rem', color: '#555', maxWidth: '800px' }}>
          Chemical bonding between overmolded materials is possible, but material compatibility should be considered in order to achieve desired bond strength. Incorporation of an adequate mechanical bond is strongly recommended if bonding is critical to your application. An undercut is a good example of a mechanical bond.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Substrate Material<br/>Overmold Material</th>
                {['ABS', 'ABS/PC CYCOLOY', 'PC Lexan', 'PBT Valox', 'PP Profax'].map(h => <th key={h} style={{ padding: '1rem', border: '1px solid #ddd' }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'TPU - Texin 983', values: ['C', 'C', 'C', 'C', 'M'] },
                { name: 'TPV - Santoprene 101-87', values: ['M', 'M', 'M', 'M', 'C'] },
                { name: 'TPE - Santoprene 101-64', values: ['M', 'M', 'M', 'M', 'C'] },
                { name: 'LSR - Elastosil 3003/30', values: ['-', '-', 'M', 'M', '-'] },
                { name: 'TPC - Hytrel 3078', values: ['C', 'C', 'C', 'C', 'M'] },
                { name: 'TPE-Versaflex OM 1060X-1', values: ['C', 'C', 'C', 'M', 'M'] }
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ padding: '1rem', border: '1px solid #ddd', fontWeight: 600 }}>{row.name}</td>
                  {row.values.map((v, j) => (
                    <td key={j} style={{ padding: '1rem', border: '1px solid #ddd', textAlign: 'center', backgroundColor: v === 'C' ? '#f0f9ff' : v === 'M' ? '#fffbeb' : '#fff' }}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#666' }}>
          <p>M = mechanical bond (recommended)</p>
          <p>C = chemical bond</p>
        </div>
      </section>

      {/* Process Description */}
      <section id="about" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What is Overmolding?</h2>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          With overmolding, the production of the substrate parts is a standard injection molding process involving an aluminum mold with no heating or cooling lines running through it. Cycle times are a bit longer, which allows our molders to monitor fill pressure, cosmetic concerns, and the basic quality of the parts. When the total run of substrate parts are molded, overmold tooling is then assembled to the press. The substrate parts are placed by hand into mold where each part is overmolded with either a thermoplastic or liquid silicone rubber material.
        </p>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Start Your Project?</h2>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

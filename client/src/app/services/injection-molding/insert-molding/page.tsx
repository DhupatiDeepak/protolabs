"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function InsertMolding() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#333' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ fontSize: '0.85rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / <Link href="/services/injection-molding" style={{ color: 'var(--primary-color)' }}>Injection Molding</Link> / Insert Molding
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: '#222' }}>Insert Molding Service</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#444' }}>
                Get custom plastic parts molded with metal inserts. Upload a part to get an online quote.
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
                <p>ISO 9001:2015 | CTQ Inspections | ITAR</p>
                <p style={{ marginTop: '0.5rem' }}>ISO 13485 certification available through our global network</p>
              </div>
            </div>
            <div style={{ position: 'relative', height: '400px' }}>
              <Image src="/insert-hero-final.png" alt="Insert Molding Service Part" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Jump to Section */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: '70px', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', padding: '1rem 0', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 700, color: '#333' }}>Jump to Section</span>
          <Link href="#design-guidelines" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Capabilities and Guidelines</Link>
          <Link href="#inserts" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Stocked Inserts</Link>
          <Link href="#about" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ About Insert Molding</Link>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section container">
        <div className="grid grid-2" style={{ gap: '4rem' }}>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Our insert molding processes produce custom prototypes and on-demand production parts in as fast as 15 days. We use aluminum molds that offer cost-efficient tooling, producing parts from a range of thermoplastic and liquid silicone rubber materials.
            </p>
            <p style={{ fontWeight: 700, marginBottom: '1rem' }}>Insert molding is frequently used for:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['low-volume production parts', 'bridge tooling', 'pilot runs', 'functional prototyping and testing'].map(item => (
                <li key={item} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '8px', border: '1px solid #eee' }}>
             <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Definitive Guide to Injection Molding</h3>
             <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.5' }}>
               This complete reference guide walks you through everything from quoting, design analysis, and shipment to best practices that ensure your model is optimized for molding.
             </p>
             <div style={{ marginBottom: '1rem' }}>
               <input type="email" placeholder="Enter Email (required)" style={{ width: '100%', padding: '0.9rem', border: '1px solid #ddd', borderRadius: '4px' }} />
             </div>
             <button className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>Download Guide</button>
          </div>
        </div>
      </section>

      {/* Design Guidelines Section */}
      <section id="design-guidelines" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight: 700 }}>Insert Molding Design Guidelines</h2>
        <p style={{ marginBottom: '2.5rem', color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Our basic guidelines for overmolding and insert molding include important design considerations to help improve part manufacturability, enhance cosmetic appearance, and reduce overall production time. View our design guidelines page for more in-depth details.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #333' }}>
                <th style={{ padding: '1.2rem' }}></th>
                <th style={{ padding: '1.2rem', fontWeight: 700 }}>US</th>
                <th style={{ padding: '1.2rem', fontWeight: 700 }}>Metric</th>
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
                  <td style={{ padding: '1.2rem', fontWeight: 700, color: '#222' }}>{row.label}</td>
                  <td style={{ padding: '1.2rem' }}>{row.us}</td>
                  <td style={{ padding: '1.2rem' }}>{row.metric}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: '#fdfdfd', padding: '2.5rem', borderRadius: '8px', border: '1px solid #eee' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: '#222' }}>Additional Notes</h4>
          <ul style={{ paddingLeft: '1.5rem', color: '#555', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: '0.8rem' }}>Minimum part volume is 0.025 cu. in. (40.98 cu. mm).</li>
            <li style={{ marginBottom: '0.8rem' }}>With substrate molds, we can maintain a machining tolerance of ±0.003 in. (0.08mm) with an included resin tolerance that can be greater but no less than 0.002 in./in. (0.002mm/mm).</li>
            <li>With thermoplastic overmolds, tolerances remain the same as substrate molds, however, if the overmold is LSR, then tolerances shift to 0.025 in./in. (0.025mm).</li>
          </ul>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="inserts" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', height: '350px' }}>
            <Image src="/insert-green-final.png" alt="Green overmolded component" fill style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight: 700 }}>Insert Molding Capabilities</h2>
            <p style={{ lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
              Instead of a mold that produces a final part using two separate shots like overmolding, insert molding generally consists of a preformed part—often metal—that is loaded into a mold, where it is then overmolded with plastic to create a part with improved functional or mechanical properties.
            </p>
            <p style={{ lineHeight: '1.8', color: '#444' }}>
              One way insert molding is used is with threaded inserts, which reinforce the mechanical properties of plastic parts’ ability to be fastened together. Bushings and sleeves are another great way to increase part durability for mating components that need more abrasion resistance due to moving parts.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight: 700 }}>What is Insert Molding?</h2>
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <p style={{ lineHeight: '1.8', color: '#444' }}>
            Insert molding is a similar process but instead uses a preformed part—often metal—that is loaded into a mold where it is then overmolded with a thermoplastic resin to create a final component. When the run is complete, parts are boxed and shipped shortly thereafter.
          </p>
          <div style={{ position: 'relative', height: '350px' }}>
            <Image src="/insert-machine-final.png" alt="Injection molding machine" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 700 }}>Ready to Start Your Project?</h2>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.2rem' }}>
            Get an Online Quote
          </Link>
          <div style={{ marginTop: '2rem', color: '#666' }}>
            Stay Connected!
          </div>
        </div>
      </section>
    </div>
  );
}

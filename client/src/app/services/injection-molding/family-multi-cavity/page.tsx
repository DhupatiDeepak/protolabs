"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FamilyMultiCavityMolding() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#333' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ fontSize: '0.85rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / <Link href="/services/injection-molding" style={{ color: 'var(--primary-color)' }}>Injection Molding</Link> / Family and Multi-Cavity Molding
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '1rem', color: '#222' }}>Multi-Cavity and Family Injection Molding</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#444' }}>
                Maximize each shot with multiples of the same or different parts from a single mold.
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
                <p style={{ fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>Core Advantages</p>
                <p>2, 4, or 8 Cavities per Mold | Optimized Fill Balance | Rapid Lead Times</p>
              </div>
            </div>
            <div style={{ position: 'relative', height: '350px' }}>
              <Image src="/plastic-parts-display.png" alt="Multi-cavity molded parts" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Jump to Section */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: '70px', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', padding: '1rem 0', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 700, color: '#333' }}>Jump to Section</span>
          <Link href="#capabilities" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Capabilities</Link>
          <Link href="#processes" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Multi-Cavity vs. Family</Link>
          <Link href="#guidelines" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>→ Design Guidelines</Link>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section container">
        <div className="grid grid-2" style={{ gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>Efficient, Scalable Tooling</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Multi-cavity and family molds allow for higher part volumes and reduced piece-part costs by producing multiple parts in a single machine cycle. This is ideal for projects moving from prototyping into bridge production or low-volume manufacturing.
            </p>
            <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #bae6fd' }}>
              <p style={{ fontWeight: 700, color: '#0369a1', marginBottom: '0.5rem' }}>Lead Times:</p>
              <ul style={{ fontSize: '0.9rem', color: '#444' }}>
                <li><strong>1–10 days:</strong> Under 20 sq. in.</li>
                <li><strong>10–15 days:</strong> 20 to 50 sq. in.</li>
                <li><strong>15+ days:</strong> Over 50 sq. in.</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '8px', border: '1px solid #eee' }}>
             <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Optimize Your Multi-Cavity Tool</h3>
             <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.5' }}>
               Learn how to balance cavities and optimize sprue designs for multi-cavity injection molding with our technical design guidelines.
             </p>
             <div style={{ marginBottom: '1rem' }}>
               <input type="email" placeholder="Enter Email (required)" style={{ width: '100%', padding: '0.9rem', border: '1px solid #ddd', borderRadius: '4px' }} />
             </div>
             <button className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>Download Guide</button>
          </div>
        </div>
      </section>

      {/* Processes Section */}
      <section id="processes" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '3rem', fontWeight: 700, textAlign: 'center' }}>Multi-Cavity vs. Family Molding</h2>
        <div className="grid grid-2" style={{ gap: '4rem' }}>
          <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Multi-Cavity Molding</h3>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              A tool with the **same cavity design** used to produce multiple identical parts in a single shot. This is the most efficient way to scale production for a single component.
            </p>
          </div>
          <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Family Molding</h3>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              A tool with **different cavity designs** used to produce various parts (such as mating left and right components) in a single shot. Perfect for assemblies or kits.
            </p>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', fontWeight: 700 }}>Technical Specifications</h2>
        <div className="grid grid-2" style={{ gap: '4rem' }}>
          <div>
             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {[
                    { label: 'Max Tool Pressure', val: '12,000 psi (82.74 MPa)' },
                    { label: 'Max Clamp Tonnage', val: '500 tons' },
                    { label: 'Cavity Fill Balance', val: 'Within 2,000 psi' },
                    { label: 'Max Part Size', val: '18.9" x 29.6" x 8"' },
                    { label: 'Max Surface Area', val: '175 sq. in.' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '1rem', fontWeight: 700 }}>{row.label}</td>
                      <td style={{ padding: '1rem' }}>{row.val}</td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </div>
          <div style={{ position: 'relative', height: '300px' }}>
            <Image src="/green-overmolded.png" alt="Multi-cavity sprue example" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ marginTop: '3rem', backgroundColor: '#fdfdfd', padding: '2.5rem', borderRadius: '8px', border: '1px solid #eee' }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Allowable Volume Difference (Family Molds)</h4>
          <div className="grid grid-4" style={{ gap: '1rem' }}>
            {[
              { label: '< 2 in.', val: '20%' },
              { label: '2" to < 5"', val: '15%' },
              { label: '5" to < 10"', val: '10%' },
              { label: '10" to 59"', val: '5%' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Part Volume</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{item.label}</div>
                <div style={{ marginTop: '0.5rem', color: 'var(--accent-color)', fontWeight: 800, fontSize: '1.5rem' }}>{item.val}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666', textAlign: 'center' }}>
            Strict fill balancing ensures consistent quality across all cavities in a single shot.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 700 }}>Ready to Maximize Your Production?</h2>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.2rem' }}>
            Get an Online Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

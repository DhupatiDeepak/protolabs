"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function QualityPage() {
  const certifications = [
    'ISO 9001:2015', 'AS9100D', 'ISO 13485', 'ITAR Registered', 'GD&T Compliance'
  ];

  const inspectionComparison = [
    { feature: 'Digital DFM Feedback', standard: '✓', enhanced: '✓' },
    { feature: 'In-process Inspection', standard: '✓', enhanced: '✓' },
    { feature: 'Final Audit', standard: '✓', enhanced: '✓' },
    { feature: 'Material Certifications', standard: '✓', enhanced: '✓' },
    { feature: 'First Article Inspection (FAI)', standard: '-', enhanced: '✓' },
    { feature: 'CMM Inspection Report', standard: '-', enhanced: '✓' },
    { feature: 'Coordinate Data (.csv)', standard: '-', enhanced: '✓' },
    { feature: 'Certificate of Conformance', standard: 'Optional', enhanced: '✓' }
  ];

  return (
    <div style={{ backgroundColor: '#fff', color: '#333', fontFamily: 'var(--font-primary)' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '0.6rem 0', fontSize: '0.85rem', textAlign: 'center', fontWeight: 500 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ border: '1px solid #444', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🛡️</span>
          Certified quality systems for your most critical parts. | 
          <Link href="/login" style={{ textDecoration: 'underline', marginLeft: '0.3rem' }}>Learn More →</Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #f5f5f5' }}>
        <div className="container" style={{ fontSize: '0.75rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / CNC Machining / Quality
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#222', lineHeight: '1.1' }}>CNC Machining Quality Assurance</h1>
              <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#444' }}>
                Trust our certified quality systems and digital inspection processes to deliver precision parts every time.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                  Download Certifications
                </Link>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image src="/quality_hero.png" alt="CNC Quality Inspection" width={600} height={400} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - Professional Badge List */}
      <section className="section container" style={{ borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
          {certifications.map((cert, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary-color)', borderRadius: '50%' }}></div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.5px' }}>{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quality and Inspection Comparison */}
      <section className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800, textAlign: 'center' }}>Quality and Inspection Comparison</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          We offer two levels of inspection to meet your project's specific requirements, from rapid prototyping to complex production.
        </p>

        <div style={{ maxWidth: '1000px', margin: '0 auto', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #eee' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <th style={{ padding: '1.5rem', textAlign: 'left', border: '1px solid #eee' }}>Inspection Feature</th>
                <th style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid #eee', width: '25%' }}>Standard Quality</th>
                <th style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid #eee', width: '25%' }}>Enhanced Inspection</th>
              </tr>
            </thead>
            <tbody>
              {inspectionComparison.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1.2rem', fontWeight: 500 }}>{row.feature}</td>
                  <td style={{ padding: '1.2rem', textAlign: 'center', color: row.standard === '✓' ? 'var(--primary-color)' : '#999' }}>
                    {row.standard}
                  </td>
                  <td style={{ padding: '1.2rem', textAlign: 'center', color: row.enhanced === '✓' ? 'var(--primary-color)' : '#999', fontWeight: row.enhanced === '✓' ? 700 : 400 }}>
                    {row.enhanced}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Traceability Section */}
      <section className="section container" style={{ backgroundColor: '#fafafa', borderRadius: '16px', margin: '4rem auto' }}>
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image src="/drawing_review.png" alt="Engineering Drawing Review" width={600} height={400} style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Traceability and Compliance</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444', marginBottom: '2rem' }}>
              Our quality systems ensure full traceability throughout the manufacturing process. From raw material sourcing to final inspection, every step is documented and available for review.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Material Certification</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>MTRs available for all metals and certificates of analysis for plastics.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Process Control</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Standardized setups and verified tool paths for repeatable quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Support Section */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Support from Manufacturing Experts</h2>
        <p style={{ color: '#444', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
          Our application engineers are available to help you navigate complex quality requirements, including GD&T interpretation and custom inspection protocols.
        </p>
        <Link href="/login" className="btn btn-secondary" style={{ padding: '1rem 3rem' }}>
          Schedule a Quality Consultation
        </Link>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: '#232d3b', color: '#fff', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', fontWeight: 800 }}>Ready to Start Your High-Precision Project?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3rem' }}>
            Upload your CAD file and select your required inspection level to receive an interactive quote.
          </p>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', backgroundColor: '#fff', color: '#232d3b' }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

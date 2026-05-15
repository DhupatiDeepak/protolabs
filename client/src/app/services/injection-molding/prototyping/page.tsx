"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SurfaceFinishTable from '@/components/SurfaceFinishTable';

export default function Prototyping() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#333', fontFamily: 'var(--font-primary)' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '0.6rem 0', fontSize: '0.85rem', textAlign: 'center', fontWeight: 500 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ border: '1px solid #444', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🔔</span>
          Get small, simple molded parts in as fast as 1 day! | 
          <Link href="/login" style={{ textDecoration: 'underline', marginLeft: '0.3rem' }}>Get Started →</Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ padding: '1rem 0', borderBottom: '1px solid #f5f5f5' }}>
        <div className="container" style={{ fontSize: '0.75rem', color: '#666' }}>
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / <Link href="/services/injection-molding" style={{ color: 'var(--primary-color)' }}>Injection Molding</Link> / Prototyping
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#222', lineHeight: '1.1' }}>Prototype Tooling for Injection Molding</h1>
            <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#444' }}>
              Reduce mold costs and validate part designs with a low-cost prototype tool.
            </p>
            
            <div style={{ fontSize: '0.9rem', color: '#333' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Certifications</strong> ISO 9001:2015 | CTQ Inspections | ITAR</p>
              <p>ISO 13485 certification available through our global network</p>
            </div>
          </div>
        </div>
      </section>



      {/* Intro Text Section */}
      <section className="section container">
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#333', maxWidth: '1000px' }}>
          We have two <Link href="/services/injection-molding" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>injection molding service</Link> options—prototyping and on-demand manufacturing—and each offers its own benefits depending on your project needs. If part quantities are lower, an affordable entry point for tooling is important, and rapid development over a short period of time is critical, our prototyping option works great.
        </p>
      </section>

      {/* CNC & Table Section - Replaced Screenshot with High-Quality Render */}
      <section className="section container">
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <Image src="/prototype-cnc.png" alt="CNC Milling" width={600} height={450} style={{ objectFit: 'cover' }} />
          </div>
          <div>
             <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <tbody>
                  {[
                    { l: 'Mold Cavities', v: 'Single' },
                    { l: 'Guaranteed Mold Life', v: 'Limited (guaranteed for at least 2,000 shots)' },
                    { l: 'Mold Storage', v: 'Stored for 18 months of inactivity' },
                    { l: 'Quality Documentation', v: 'Basic and digital inspection reports available upon request' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '1.2rem 0', fontWeight: 700, color: '#333' }}>{row.l}</td>
                      <td style={{ padding: '1.2rem 0', color: '#555' }}>{row.v}</td>
                    </tr>
                  ))}
                </tbody>
             </table>
             <div style={{ padding: '1.2rem 0', display: 'flex', gap: '2rem' }}>
                <div style={{ fontWeight: 700, color: '#333' }}>Additional Features</div>
                <ul style={{ listStyle: 'none', padding: 0, color: '#555' }}>
                  <li style={{ marginBottom: '0.8rem' }}>• Aluminum molds</li>
                  <li style={{ marginBottom: '0.8rem' }}>• Standard lead times as fast as 7 days</li>
                  <li style={{ marginBottom: '0.8rem' }}>• Tolerances of +/-0.003 in. plus resin tolerance (in./in.)</li>
                  <li>• Set-up fees apply to each run</li>
                </ul>
             </div>
             <Link href="/services/injection-molding" style={{ color: 'var(--primary-color)', fontWeight: 700, display: 'inline-block', marginTop: '1rem' }}>Compare to production →</Link>
          </div>
        </div>
      </section>

      {/* Why Use a Prototyping Tool Section */}
      <section className="section container" style={{ borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '3rem', fontWeight: 800 }}>Why Use a Prototyping Tool?</h2>
        
        <div className="grid grid-2" style={{ gap: '4rem', marginBottom: '5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', fontWeight: 700 }}>Design Feedback</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#555' }}>
              <li style={{ marginBottom: '1rem' }}>• Receive interactive design for manufacturability feedback with every quote to make early adjustments before prototyping begins.</li>
              <li>• Talk with our applications engineers to resolve any technical manufacturing questions that arise.</li>
            </ul>
          </div>
          <div>
             <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', fontWeight: 700 }}>Iterative Development</h3>
             <div style={{ marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden' }}>
                <Image src="/design-cube.png" alt="Iterative Design" width={600} height={300} style={{ objectFit: 'cover' }} />
             </div>
             <ul style={{ listStyle: 'none', padding: 0, color: '#555' }}>
               <li style={{ marginBottom: '1rem' }}>• Have physical prototypes in hand within days to quickly modify designs during early product development.</li>
               <li>• Reduce overall time to market with an iterative product development cycle.</li>
             </ul>
          </div>
        </div>

        {/* Validation Section - Replaced Screenshot with High-Quality Technician Render */}
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
             <Image src="/quality-inspection.png" alt="Design Validation" width={600} height={400} style={{ objectFit: 'cover' }} />
          </div>
          <div>
             <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: 700 }}>Design Validation</h3>
             <p style={{ marginBottom: '1.5rem', color: '#555', lineHeight: '1.6' }}>
               Test the form and fit of components with small quantities of molded parts. Perform functional tests with prototypes manufactured in production-grade materials.
             </p>
             
             <h3 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1.2rem', fontWeight: 700 }}>Market Testing</h3>
             <ul style={{ listStyle: 'none', padding: 0, color: '#555' }}>
                <li style={{ marginBottom: '1rem' }}>• Produce a pilot run injection-molded parts to validate market interest before launch.</li>
                <li>• Reduce financial risk at market launch by implementing affordable aluminum tooling.</li>
             </ul>
          </div>
        </div>
      </section>

      <SurfaceFinishTable />

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '2.5rem', fontWeight: 800 }}>Ready to Start Your Project?</h2>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1.5rem 5rem', fontSize: '1.2rem' }}>
            Get an Online Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

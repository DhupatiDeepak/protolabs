"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Production() {
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
          <Link href="/services" style={{ color: 'var(--primary-color)' }}>Services</Link> / <Link href="/services/injection-molding" style={{ color: 'var(--primary-color)' }}>Injection Molding</Link> / Production
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#222', lineHeight: '1.1' }}>Tooling for Production Injection Molding</h1>
              <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#444' }}>
                Reduce part costs and create supply chain flexibility with automated injection molding.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                  Get Instant Quote
                </Link>
                <Link href="/login" className="btn btn-outline" style={{ padding: '1rem 2.5rem', borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>
                  Start Production Quote
                </Link>
              </div>

              <div style={{ fontSize: '0.9rem', color: '#333' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>Certifications</strong> ISO 9001:2015 | CTQ Inspections | ITAR | ISO 13485</p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <Image src="/transparent-parts.png" alt="Production Molded Parts" width={600} height={400} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section container">
        <div style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800 }}>Injection Molding for End-Use Production</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#333', marginBottom: '2rem' }}>
            Our production injection molding service helps you reduce financial risk by leveraging affordable aluminum tooling to bridge the gap from prototyping to high-volume production. Whether you need thousands of parts for market testing or steady-state supply, we offer a scalable solution with no minimum order quantities.
          </p>
        </div>
      </section>

      {/* Capabilities Table Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '4rem', fontWeight: 800 }}>Production-Grade Tooling Capabilities</h2>
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
               <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                  <tbody>
                    {[
                      { l: 'Mold Price', v: 'Higher than prototyping tool' },
                      { l: 'Part Price', v: 'Lower than prototyping tool' },
                      { l: 'Mold Cavities', v: 'Single and multi-cavity' },
                      { l: 'Guaranteed Mold Life', v: 'Unlimited' },
                      { l: 'Mold Storage', v: 'Stored for 3 years of inactivity' },
                      { l: 'Quality Documentation', v: 'Molding process development report included' }
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '1.2rem 1.5rem', fontWeight: 700, color: '#333', backgroundColor: '#fafafa', width: '40%' }}>{row.l}</td>
                        <td style={{ padding: '1.2rem 1.5rem', color: '#555' }}>{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
            <div>
               <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
                 <Image src="/production-factory.png" alt="Production Mold Machining" width={600} height={400} style={{ objectFit: 'cover' }} />
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                 <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                   <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Lead Times</h4>
                   <p style={{ fontSize: '0.9rem', color: '#666' }}>Standard lead time of 15 days or less</p>
                 </div>
                 <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                   <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Tolerances</h4>
                   <p style={{ fontSize: '0.9rem', color: '#666' }}>+/-0.003 in. plus resin tolerance</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Services Grid */}
      <section className="section container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 800, textAlign: 'center' }}>Why Choose Our Production Service?</h2>
        <div className="grid grid-2" style={{ gap: '3rem' }}>
          {[
            { 
              title: 'Low-Volume Runs', 
              desc: 'Get to market faster by producing parts in production-grade materials without the high cost of steel tooling. Perfect for quantities from 25 to 10,000+ parts.',
              icon: '🚀'
            },
            { 
              title: 'Bridge Tooling', 
              desc: 'Use aluminum tooling as a cost-effective bridge while waiting for high-volume steel tools. This ensures your supply chain remains uninterrupted.',
              icon: '🌉'
            },
            { 
              title: 'Supply Chain Flexibility', 
              desc: 'Mitigate risk and minimize downtime with on-demand production. Our digital manufacturing process allows for quick pivots and scale-up.',
              icon: '🔗'
            },
            { 
              title: 'Reduced Financial Risk', 
              desc: 'Unlock new market opportunities with no minimum order quantities and lower inventory costs. Pay for only what you need.',
              icon: '📉'
            }
          ].map((service, i) => (
            <div key={i} style={{ padding: '2.5rem', border: '1px solid #eee', borderRadius: '12px', transition: 'transform 0.3s' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>{service.title}</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: '#232d3b', color: '#fff', textAlign: 'center', padding: '8rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 800 }}>Start Your Production Project</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3.5rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            Upload your CAD files today and our team of applications engineers will work with you to optimize your design for production.
          </p>
          <Link href="/login" className="btn btn-primary" style={{ padding: '1.5rem 5rem', fontSize: '1.2rem', backgroundColor: '#fff', color: '#232d3b' }}>
            Start Production Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

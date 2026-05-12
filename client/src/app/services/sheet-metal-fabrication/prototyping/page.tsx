'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function PrototypingPage() {
  const [activeTab, setActiveTab] = useState('Expedited Days');

  return (
    <main>
      {/* Breadcrumbs & Title */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <Link href="/">Home</Link> &gt; <Link href="/services">Services</Link> &gt; <Link href="/services/sheet-metal-fabrication">Sheet Metal Fabrication</Link> &gt; <span style={{ color: 'var(--text-color)' }}>Prototyping</span>
      </div>

      <section className="container grid grid-2" style={{ paddingBottom: '3rem', alignItems: 'center', gap: '4rem' }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1A1A1A', lineHeight: '1.2' }}>Sheet Metal Prototype Service for Components and Assemblies</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            Upload your CAD file today for your designs in minutes and get precision fabricated prototypes delivered to you in just days. With every quote, we offer 3D visualized design for manufacturability feedback, plus, we source fabricators to approve manual parts and custom colors with confidence.
          </p>
          <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', marginBottom: '2rem' }}>Start a Project</button>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Certifications: ISO 9001:2015 | ITAR
          </div>
        </div>
        <div style={{ position: 'relative', height: '350px', width: '100%' }}>
          <Image src="/sheet_metal_hero_1778548780614.png" alt="Sheet Metal Prototype" fill style={{ objectFit: 'contain' }} />
        </div>
      </section>

      <div style={{ height: '1px', backgroundColor: 'var(--border-color)', width: '100%' }}></div>

      {/* Intro Section / Why Protolabs */}
      <section className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container grid grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
          <div>
             <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#555' }}>Learn More About our Sheet Metal Prototyping Service</h4>
             <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><a href="#why-protolabs" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Why Protolabs?</a></li>
                <li><a href="#lead-times" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>How Our Lead Times Work</a></li>
                <li><a href="#advantages" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Advantages of Sheet Metal Prototyping</a></li>
                <li><a href="#applications" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Product Applications for Prototyping</a></li>
             </ul>
          </div>
          <div id="why-protolabs">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Protolabs?</h2>
            
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>Quotes delivered in minutes, parts in days</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              We quote and manufacture both simple and complex sheet metal designs in a fraction of the time of traditional methods. Upload, configure, and review your parts in minutes prior to finalizing your final delivery.
            </p>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>Dependable process quality</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Our fabricators have decades of experience in producing high quality sheet metal components and assemblies, ensuring that you and your stakeholders are confident in your prototypes to accelerate your design. <Link href="#" style={{ color: 'var(--primary-color)' }}>Learn more about how we quote and make parts.</Link>
            </p>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>Manufacturability analysis on every design</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Every quote includes a detailed design for manufacturability (DFM) analysis via our 3D viewer online, which helps indicate where manufacturing issues are likely to happen, helping to optimize your design for rapid production.
            </p>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>Capacity to produce thousands of unique designs every month</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              We manufacture thousands of unique sheet metal components and assemblies each month. Our automated process provides on-time delivery reliability, to ensure demand on delivery time.
            </p>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>Advanced design support for assemblies and complex projects</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Our team of applications engineers and manufacturing engineers are available to consult with you on a broad range of process steps. Whether you're looking for advice on feature placement, tooling selection, or assembly construction options, we answer your questions in a fast 24 hour standard process. <Link href="#" style={{ color: 'var(--primary-color)' }}>Schedule a technical review.</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Dark Banner */}
      <section style={{ backgroundColor: '#1E293B', color: 'white' }}>
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '0' }}>
           <div style={{ padding: '4rem 2rem 4rem 0' }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Sheet Metal Capabilities</h2>
             <p style={{ color: '#CBD5E1', marginBottom: '2rem', lineHeight: '1.6' }}>
               We have a broad selection of sheet metal fabrication capabilities for your prototype components and assembly projects. Our collection of manufacturing processes gets you complex flat geometries, intricate formed parts, and jointly assembled assemblies in unparalleled speeds.
             </p>
             <p style={{ color: 'white', fontWeight: 600, marginBottom: '1rem' }}>Explore our capabilities:</p>
             <ul style={{ listStylePosition: 'inside', color: '#CBD5E1', lineHeight: '2' }}>
               <li><span style={{ color: '#22C55E' }}>—</span> Laser cutting</li>
               <li><span style={{ color: '#22C55E' }}>—</span> Punching</li>
               <li><span style={{ color: '#22C55E' }}>—</span> Forming & Bending</li>
               <li><span style={{ color: '#22C55E' }}>—</span> Hardware insertion</li>
               <li><span style={{ color: '#22C55E' }}>—</span> Welding</li>
               <li><span style={{ color: '#22C55E' }}>—</span> Assembly</li>
               <li><span style={{ color: '#22C55E' }}>—</span> Finishing</li>
             </ul>
           </div>
           <div style={{ position: 'relative', height: '100%', minHeight: '500px', width: '100%' }}>
             <Image src="/punched_metal_edge_1778549729954.png" alt="Capabilities" fill style={{ objectFit: 'cover' }} />
           </div>
        </div>
      </section>

      {/* Lead Times */}
      <section id="lead-times" className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How Our Lead Times Work</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.6' }}>
            Our digital sheet metal fabrication can deliver components and assemblies to you in just days. Review the test below to see how your precision quality parts would qualify.
          </p>
          
          <h4 style={{ marginBottom: '1rem' }}>Sheet Metal Lead Time Map</h4>
          
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '2rem', gap: '2rem' }}>
            <button 
              onClick={() => setActiveTab('Expedited Days')} 
              style={{ 
                background: 'none', border: 'none', padding: '1rem 0', cursor: 'pointer', fontSize: '1rem', fontWeight: 600,
                color: activeTab === 'Expedited Days' ? 'var(--primary-color)' : 'var(--text-secondary)',
                borderBottom: activeTab === 'Expedited Days' ? '3px solid var(--primary-color)' : '3px solid transparent'
              }}>
              Expedited Days
            </button>
            <button 
              onClick={() => setActiveTab('Standard Days')} 
              style={{ 
                background: 'none', border: 'none', padding: '1rem 0', cursor: 'pointer', fontSize: '1rem', fontWeight: 600,
                color: activeTab === 'Standard Days' ? 'var(--primary-color)' : 'var(--text-secondary)',
                borderBottom: activeTab === 'Standard Days' ? '3px solid var(--primary-color)' : '3px solid transparent'
              }}>
              Standard Days
            </button>
            <button 
              onClick={() => setActiveTab('Additional Considerations')} 
              style={{ 
                background: 'none', border: 'none', padding: '1rem 0', cursor: 'pointer', fontSize: '1rem', fontWeight: 600,
                color: activeTab === 'Additional Considerations' ? 'var(--primary-color)' : 'var(--text-secondary)',
                borderBottom: activeTab === 'Additional Considerations' ? '3px solid var(--primary-color)' : '3px solid transparent'
              }}>
              Additional Considerations
            </button>
          </div>

          {activeTab === 'Expedited Days' && (
            <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#2C3E50', color: 'white' }}>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Fabrication Capabilities</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Eligibility</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Applications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '2rem', borderRight: '1px solid var(--border-color)', verticalAlign: 'top' }}>
                      <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2.5' }}>
                        <li>Cutting (laser or punch)</li>
                        <li>Deburring</li>
                        <li>Forming/Bending (one setup)</li>
                        <li>Hardware insertion (up to 5 PEM items)</li>
                        <li>Tapping/countersinks</li>
                      </ul>
                    </td>
                    <td style={{ padding: '2rem', borderRight: '1px solid var(--border-color)', verticalAlign: 'middle', textAlign: 'center' }}>
                      <p style={{ color: '#555' }}>Material Thickness up to</p>
                      <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>0.250 in (6.35mm)</p>
                    </td>
                    <td style={{ padding: '2rem', verticalAlign: 'top' }}>
                      <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2.5' }}>
                        <li>Brackets</li>
                        <li>Covers</li>
                        <li>Panels</li>
                        <li>Flat components</li>
                        <li>Mounts</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {activeTab !== 'Expedited Days' && (
             <div style={{ padding: '4rem', textAlign: 'center', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-secondary)' }}>
                Detailed guidelines and tables for {activeTab} are available upon quoting.
             </div>
          )}
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Advantages of Prototyping with Sheet Metal Fabrication</h2>
          
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>Validate your design cost-effectively</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            When transitioning your design to higher-volume production, developing a physical test utilizing <Link href="#" style={{ color: 'var(--primary-color)' }}>sheet metal fabrication</Link> provides a cost-effective route to validate functionality and the physical or mechanical properties of your design before you freeze it for end-use production.
          </p>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>Highly customizable process produces many types of geometries</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            Complex nested applications often require sheet metal parts of various shapes, sizes, and thicknesses. Sheet metal fabrication excels in creating complex parts through laser cutting, press brake forming, and welding to achieve a variety of custom designs.
          </p>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>Simulate your design with real-world testing</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            Depending on which certification might be needed to bring a product to market, sheet metal fabrication empowers you to design for final requirements. Using the same material and method of manufacturing final testing parts, these models rapidly and accurately emulate real-world environments.
          </p>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1A1A1A' }}>A vast array of design flexibility and avenue for cost optimization</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            Like many manufacturing technologies, sheet metal fabrication is not completely limitless, but sheet metal offers a high degree of design flexibility. Design simplification can yield significant cost savings. For example, moving a hole or cutout a fraction of an inch away from a bend line could amount to dramatic saving by eliminating costly CNC machining or hand drilling operations.
          </p>
        </div>
      </section>

      {/* Product Applications */}
      <section id="applications" className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Product Applications for Prototyping</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.6' }}>
            Sheet metal fabrication is an ideal manufacturing process for low-volume production of end-use parts and is heavily used in the initial prototyping phase.
          </p>

          <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#2C3E50', color: 'white' }}>
                  <th style={{ padding: '1.5rem', fontWeight: 600, width: '50%' }}>Common Products</th>
                  <th style={{ padding: '1.5rem', fontWeight: 600, width: '50%' }}>Specialized Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '2rem', borderRight: '1px solid var(--border-color)', verticalAlign: 'top' }}>
                    <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2.5' }}>
                      <li>Brackets</li>
                      <li>Frames</li>
                      <li>Covers</li>
                      <li>Custom sheet enclosures</li>
                      <li>Housings</li>
                      <li>Mechanical chassis</li>
                      <li>Mounts</li>
                      <li>Panels</li>
                      <li>Weldments</li>
                    </ul>
                  </td>
                  <td style={{ padding: '2rem', verticalAlign: 'top' }}>
                    <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2.5' }}>
                      <li>Audio/visual technology housings</li>
                      <li>Cleanroom framing components</li>
                      <li>Computing product and server racks data storage</li>
                      <li>Energy storage devices</li>
                      <li>Industrial enclosures</li>
                      <li>Ruggedized data products</li>
                      <li>Scientific or medical instruments</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '4rem 0', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Stay Connected!</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
             <input type="email" placeholder="Email Address" style={{ padding: '0.8rem 1rem', width: '300px', borderRadius: '4px', border: 'none' }} />
             <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>Get Updates</button>
          </div>
        </div>
      </section>
    </main>
  );
}

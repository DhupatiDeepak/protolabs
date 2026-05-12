import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sheet Metal Assemblies | Protolabs',
  description: 'Custom sheet metal assemblies fabricated and shipped in as fast as 3 days.',
};

export default function FabricatedAssembliesPage() {
  return (
    <main>
      {/* Breadcrumbs & Title */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <Link href="/">Home</Link> &gt; <Link href="/services">Services</Link> &gt; <Link href="/services/sheet-metal-fabrication">Sheet Metal Fabrication</Link> &gt; <span style={{ color: 'var(--text-color)' }}>Assemblies</span>
      </div>

      <section className="container grid grid-2" style={{ paddingBottom: '3rem', alignItems: 'center', gap: '4rem' }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1A1A1A' }}>Sheet Metal Assemblies</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Custom sheet metal assemblies fabricated and shipped in as fast as 3 days.
          </p>
          <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', marginBottom: '2rem' }}>Upload a Part</button>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Certifications: ISO 9001:2015 | ITAR
          </div>
        </div>
        <div style={{ position: 'relative', height: '350px', width: '100%' }}>
          <Image src="/exploded_enclosure_1778549742922.png" alt="Sheet Metal Assembly" fill style={{ objectFit: 'contain' }} />
        </div>
      </section>

      {/* Dark Banner */}
      <section style={{ backgroundColor: '#2C3E50', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>How Long Will it Take for Sheet Metal Assemblies?</h2>
          <p style={{ marginBottom: '2rem', color: '#CBD5E1', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Our digital process starts with a 3D CAD model. Upload yours to see pricing, get design feedback, and order your custom parts. It's that simple!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ color: '#22C55E', fontSize: '1.5rem' }}>✓</span>
               <span>Upload 3D CAD online</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ color: '#22C55E', fontSize: '1.5rem' }}>✓</span>
               <span>Instant online quotes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ color: '#22C55E', fontSize: '1.5rem' }}>✓</span>
               <span>Parts ship in as fast as 3 days</span>
            </div>
          </div>
          <button className="btn btn-primary" style={{ padding: '0.8rem 3rem', fontSize: '1.1rem' }}>Upload a Part</button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container grid grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
          <div>
             <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Jump to Section</h4>
             <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><a href="#what-is-assembly" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>What is a Sheet Metal Assembly?</a></li>
                <li><a href="#materials" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Materials</a></li>
                <li><a href="#capabilities" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Assembly Capabilities</a></li>
                <li><a href="#hardware" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Hardware Installation</a></li>
                <li><a href="#welding" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Welding Guidelines</a></li>
                <li><a href="#finishing" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Finishing Options</a></li>
             </ul>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Our sheet metal fabrication processes include laser cutting, punching, and forming. These discrete parts can be joined together using hardware or welding to create complex sheet metal assemblies.
            </p>
            <h4 style={{ marginBottom: '0.5rem' }}>Assemblies commonly include:</h4>
            <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2' }}>
              <li>Enclosures</li>
              <li>Housings</li>
              <li>Panels</li>
              <li>Frames</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Info Needed */}
      <section id="what-is-assembly" className="section">
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Information Needed for Quoting</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '900px' }}>
            For a final assembly quote, please provide a 3D CAD model of the full assembly as well as individual 3D CAD models of each component. Also include a 2D PDF drawing calling out hardware specifications and welding requirements.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '900px', marginTop: '1rem' }}>
            Learn more about how to correctly export files for assemblies in our <Link href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>File Export Guide.</Link>
          </p>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Materials</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              We fabricate assemblies using a variety of metals commonly used in sheet metal part production:
            </p>
            <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2', marginBottom: '1.5rem' }}>
              <li>Aluminum (5052, 6061)</li>
              <li>Steel (Cold Rolled, Galvanized, Galvanneal)</li>
              <li>Stainless Steel (304, 316)</li>
              <li>Copper (C110, C101)</li>
              <li>Brass (C260)</li>
            </ul>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Maximum material thickness for assemblies varies by part geometry, but generally ranges from 0.024 in. to 0.250 in. Please see our <Link href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>capabilities page</Link> for full material limits.
            </p>
          </div>
          <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/punched_metal_edge_1778549729954.png" alt="Metal edge" fill style={{ objectFit: 'cover' }} />
             <div style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: '0.5rem', textAlign: 'center', fontSize: '0.85rem' }}>Edge view of a thick cut sheet metal part.</div>
          </div>
        </div>
      </section>

      {/* Assembly Capabilities */}
      <section id="capabilities" className="section">
        <div className="container grid grid-2" style={{ gap: '4rem' }}>
           <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Assembly Capabilities Guidelines</h2>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
               Depending on part geometry and your requirements, we offer several assembly methods. Follow these general guidelines to ensure your assembly is manufacturable.
             </p>
             <h4 style={{ marginBottom: '0.5rem' }}>Available assembly methods:</h4>
             <ul style={{ listStylePosition: 'inside', color: '#333', marginBottom: '2rem', lineHeight: '2' }}>
               <li>Welding (TIG, MIG, Spot Welding)</li>
               <li>Riveting</li>
               <li>Hardware installation</li>
             </ul>
             
             <div className="grid grid-2" style={{ gap: '2rem' }}>
               <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Hole placement</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Leave enough distance between holes and bends to prevent hole distortion during forming.</p>
               </div>
               <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Hardware clearance</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Ensure there is sufficient clearance for hardware insertion tooling (e.g. arbor press).</p>
               </div>
               <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Edge offsets</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Keep hardware a minimum distance from part edges based on hardware manufacturer specs.</p>
               </div>
               <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Minimum flange length</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Ensure flanges are long enough to properly support hardware without causing deformation.</p>
               </div>
             </div>
           </div>
           <div>
             <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#F8F9FA' }}>
               <Image src="/guide_resource_1778549772887.png" alt="CAD Render" fill style={{ objectFit: 'contain' }} />
             </div>
             <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.5rem' }}>3D rendering of hardware insertion points on a custom enclosure.</p>
           </div>
        </div>
      </section>

      {/* Hardware Installation */}
      <section id="hardware" className="section" style={{ backgroundColor: '#F8F9FA' }}>
         <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
           <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Hardware Installation Guidelines</h2>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
               We can supply and install standard hardware into your custom sheet metal assemblies. Please call out required hardware in your 2D PDF drawing.
             </p>
             <h4 style={{ marginBottom: '0.5rem' }}>Hardware Types:</h4>
             <ul style={{ listStylePosition: 'inside', color: '#333', marginBottom: '2rem', lineHeight: '2' }}>
               <li>Self-clinching nuts (PEM nuts)</li>
               <li>Self-clinching studs</li>
               <li>Self-clinching standoffs</li>
               <li>Flush nuts</li>
               <li>Blind standoffs</li>
               <li>Panel fasteners</li>
             </ul>
             
             <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Standard Stocked Sizes:</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>Protolabs stocks these standard hardware threads:</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontWeight: 600, color: '#333' }}>
                  <span>M2.5</span> <span>M3</span> <span>M4</span> <span>M5</span> <span>M6</span>
                  <span>2-56</span> <span>4-40</span> <span>6-32</span> <span>8-32</span> <span>10-32</span>
                </div>
             </div>
           </div>
           <div>
             <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'white', border: '1px solid var(--border-color)' }}>
               <Image src="/metal_laser_hero_1778549322502.png" alt="Hardware" fill style={{ objectFit: 'contain', padding: '2rem' }} />
             </div>
             
             <div style={{ marginTop: '2rem' }}>
               <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Custom Hardware</h4>
               <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                 We can source custom hardware based on your specifications. Please be aware that non-standard hardware may add cost and lead time to your order.
               </p>
             </div>
           </div>
         </div>
      </section>

      {/* Welding Guidelines */}
      <section id="welding" className="section">
         <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
           <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Welding Guidelines</h2>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
               Welding is available for assemblies that require structural strength or environmental sealing. We offer TIG, MIG, and Spot welding services.
             </p>
             <h4 style={{ marginBottom: '1rem' }}>Welding Design Guidelines:</h4>
             <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2' }}>
               <li>Design parts to be self-fixturing if possible (e.g. tab and slot).</li>
               <li>Ensure weld seams are accessible by standard welding torches.</li>
               <li>Keep material thicknesses similar across welded joints.</li>
               <li>Clearly call out weld symbols and locations on your 2D PDF drawing.</li>
             </ul>
             <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
                Learn more about our specific welding capabilities on our <Link href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Welding Services page</Link>.
             </p>
           </div>
           <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/welding_worker_1778548869358.png" alt="Welding" fill style={{ objectFit: 'cover' }} />
             <div style={{ position: 'absolute', bottom: 0, width: '100%', padding: '1rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
               TIG welding a custom sheet metal frame.
             </div>
           </div>
         </div>
      </section>

      {/* Finishing Options */}
      <section id="finishing" className="section" style={{ backgroundColor: '#F8F9FA' }}>
         <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
           <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Finishing Options for Assemblies</h2>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
               Custom sheet metal assemblies can be finished in a variety of ways to improve aesthetics or performance. Please call out finishing requirements clearly.
             </p>
             <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2', marginBottom: '1.5rem' }}>
               <li>Plating</li>
               <li>Powder coating</li>
               <li>Silk screening</li>
               <li>Anodizing</li>
               <li>Passivation</li>
               <li>Chromate plating</li>
             </ul>
             <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>See our full list of sheet metal finishes →</Link>
           </div>
           <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/metal_finishes_1778549756266.png" alt="Finishing Options" fill style={{ objectFit: 'contain' }} />
             <div style={{ position: 'absolute', bottom: 0, width: '100%', padding: '1rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
               Finished parts with hardware installed.
             </div>
           </div>
         </div>
      </section>

      {/* Additional Resources */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Additional Resources</h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#90C34B', margin: '0 auto 3rem auto' }}></div>

          <div className="grid grid-3">
             <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image src="/welding_worker_1778548869358.png" alt="Welding" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Welding, Forming, and Assembly for Sheet Metal Parts</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>
                    Learn how we use specialized equipment to form, bend, and weld sheet metal parts into complex assemblies.
                  </p>
                  <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Read Post →</Link>
                </div>
             </div>

             <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
                <div style={{ position: 'relative', height: '200px', backgroundColor: '#F8F9FA' }}>
                  <Image src="/guide_resource_1778549772887.png" alt="Design Guide" fill style={{ objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>A Designer's Guide to Sheet Metal Fabrication</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>
                    Everything you need to know about designing parts for punching, laser cutting, and forming.
                  </p>
                  <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Get Guide →</Link>
                </div>
             </div>

             <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
                <div style={{ position: 'relative', height: '200px', backgroundColor: '#F8F9FA' }}>
                  <Image src="/resource_guide_1778549373198.png" alt="Guidelines" fill style={{ objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Design Guidelines for Sheet Metal Fabrication</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>
                    Quick reference for tolerances, material thicknesses, and standard hardware options.
                  </p>
                  <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>View Guidelines →</Link>
                </div>
             </div>
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

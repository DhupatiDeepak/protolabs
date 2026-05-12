import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sheet Metal Punching Service | Protolabs',
  description: 'Cut custom sheet metal parts with complex geometries in as fast as 1 day.',
};

export default function PunchingPage() {
  return (
    <main>
      {/* Breadcrumbs & Title */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <Link href="/">Home</Link> &gt; <Link href="/services">Services</Link> &gt; <Link href="/services/sheet-metal-fabrication">Sheet Metal Fabrication</Link> &gt; <span style={{ color: 'var(--text-color)' }}>Punching</span>
      </div>

      <section className="container grid grid-2" style={{ paddingBottom: '3rem', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1A1A1A' }}>Sheet Metal Punching Service</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Cut custom sheet metal parts with complex geometries in as fast as 1 day.
          </p>
          <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', marginBottom: '2rem' }}>Get Quote</button>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Certifications: ISO 9001:2015, ITAR
          </div>
        </div>
        <div style={{ position: 'relative', height: '300px', width: '100%' }}>
          <Image src="/punching_hero_1778549697264.png" alt="Punching Enclosure" fill style={{ objectFit: 'contain' }} />
        </div>
      </section>

      {/* Dark Banner */}
      <section style={{ backgroundColor: '#2C3E50', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>How Long Will it Take for Punching Projects?</h2>
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
               <span>Parts ship in as fast as 1 day</span>
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
                <li><a href="#what-is-punching" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>What is Punching?</a></li>
                <li><a href="#advantages" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Advantages of Punching</a></li>
                <li><a href="#materials" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Materials</a></li>
                <li><a href="#design-guidelines" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Design Guidelines</a></li>
                <li><a href="#punching-vs-laser" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Punching vs. Laser Cutting</a></li>
                <li><a href="#assembly" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Assembly</a></li>
                <li><a href="#finishing" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Finishing Options</a></li>
             </ul>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Our sheet metal punching process utilizes a turret punch to accurately and efficiently cut shapes out of a flat sheet of material. This process allows for:
            </p>
            <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2' }}>
              <li>Forming flanges</li>
              <li>Louvers and dimples</li>
              <li>Embossing details</li>
              <li>High-volume production</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What is Punching */}
      <section id="what-is-punching" className="section">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>What is Punching?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Turret punch presses use a punch and die set to stamp shapes out of sheet metal. The standard force for punching is 30 tons, allowing for high-speed cutting.
            </p>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Punching is commonly used for:</h4>
            <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2' }}>
              <li>Faceplates</li>
              <li>Brackets</li>
              <li>Enclosures</li>
              <li>Complex geometric features</li>
            </ul>
          </div>
          <div>
             <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden', marginBottom: '0.5rem' }}>
               <Image src="/turret_punch_machine_1778549714924.png" alt="Turret Punch" fill style={{ objectFit: 'cover' }} />
             </div>
             <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Turret punch press machine stamping sheet metal parts.</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Advantages of Punching with Protolabs</h2>
          <ul style={{ listStyle: 'none', maxWidth: '800px', margin: '0 auto', color: '#333', lineHeight: '2' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: '#22C55E' }}>✓</span> High-speed manufacturing for production runs</li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: '#22C55E' }}>✓</span> Consistent dimensions with tight tolerances (+/- 0.005 in.)</li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: '#22C55E' }}>✓</span> Versatile tooling options for custom features (louvers, dimples, countersinks)</li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><span style={{ color: '#22C55E' }}>✓</span> Lower costs for high-volume orders compared to laser cutting</li>
          </ul>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="section">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Materials for Punching</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              We stock a range of materials commonly used for punched sheet metal parts. The maximum material thickness for punching is typically 0.125 in. (3.175mm).
            </p>
            <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2', columns: 2 }}>
              <li>Aluminum 5052 / 6061</li>
              <li>Stainless Steel 304 / 316</li>
              <li>Copper C110 / C101</li>
              <li>Brass C260</li>
              <li>Steel Cold Rolled</li>
              <li>Galvanized / Galvanneal</li>
            </ul>
          </div>
          <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/punched_metal_edge_1778549729954.png" alt="Punched edge" fill style={{ objectFit: 'cover' }} />
             <div style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: '0.5rem', textAlign: 'center', fontSize: '0.85rem' }}>Macro close-up of a punched sheet metal edge.</div>
          </div>
        </div>
      </section>

      {/* Design Guidelines */}
      <section id="design-guidelines" className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container grid grid-2" style={{ gap: '4rem' }}>
           <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Design Guidelines</h2>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
               Follow these design rules to ensure your custom sheet metal parts are manufacturable and cost-effective.
             </p>
             <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2', fontWeight: 500 }}>
                <li>Keep hole diameters greater than material thickness</li>
                <li>Maintain adequate distance between holes (1.5x thickness)</li>
                <li>Distance from hole to edge should be at least 1.5x thickness</li>
                <li>Add bend relief to prevent tearing</li>
                <li>Use corner fillets when possible</li>
                <li>Provide specific callouts for countersinks</li>
             </ul>
           </div>
           <div>
             <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border-color)', backgroundColor: 'white' }}>
               <thead>
                 <tr style={{ backgroundColor: '#E9ECEF' }}>
                   <th style={{ padding: '1rem', textAlign: 'left' }}>Hole Diameters</th>
                   <th style={{ padding: '1rem', textAlign: 'left' }}>Minimum Distance to Edge</th>
                 </tr>
               </thead>
               <tbody>
                 <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                   <td style={{ padding: '1rem' }}>0.050 - 0.100 in.</td>
                   <td style={{ padding: '1rem' }}>0.100 - 0.150 in.</td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                   <td style={{ padding: '1rem' }}>0.100 - 0.250 in.</td>
                   <td style={{ padding: '1rem' }}>0.150 - 0.300 in.</td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                   <td style={{ padding: '1rem' }}>0.250 - 0.500 in.</td>
                   <td style={{ padding: '1rem' }}>0.300 - 0.600 in.</td>
                 </tr>
                 <tr>
                   <td style={{ padding: '1rem' }}>&gt; 0.500 in.</td>
                   <td style={{ padding: '1rem' }}>&gt; 0.600 in.</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>

      {/* Punching vs Laser */}
      <section id="punching-vs-laser" className="section">
         <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Punching vs. Laser Cutting</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.6', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
              Our digital factory houses both turret punch presses and fiber lasers. Which process is best for your part?
            </p>

            <div className="grid grid-2" style={{ gap: '2rem' }}>
               <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem' }}>
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Laser Cutting</h3>
                 <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Ideal for complex contours and thick materials.</p>
                 <h4 style={{ marginBottom: '0.5rem' }}>Advantages:</h4>
                 <ul style={{ listStylePosition: 'inside', color: '#333', marginBottom: '1rem' }}>
                   <li>No custom tooling required</li>
                   <li>Can cut thicker materials (up to 0.250 in.)</li>
                   <li>Excellent edge quality</li>
                 </ul>
                 <h4 style={{ marginBottom: '0.5rem' }}>Best for:</h4>
                 <p style={{ color: '#333' }}>Low-volume runs, complex shapes, thick steel.</p>
               </div>
               <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem' }}>
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Punching</h3>
                 <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Ideal for high-volume runs and custom formed features.</p>
                 <h4 style={{ marginBottom: '0.5rem' }}>Advantages:</h4>
                 <ul style={{ listStylePosition: 'inside', color: '#333', marginBottom: '1rem' }}>
                   <li>Faster for parts with many holes</li>
                   <li>Can create 3D features (louvers, dimples)</li>
                   <li>Lower unit cost at high volumes</li>
                 </ul>
                 <h4 style={{ marginBottom: '0.5rem' }}>Best for:</h4>
                 <p style={{ color: '#333' }}>High-volume runs, enclosures with ventilation holes, brackets with dimples.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Assembly */}
      <section id="assembly" className="section" style={{ backgroundColor: '#F8F9FA' }}>
         <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
           <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Assembly</h2>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
               Take advantage of our full suite of sheet metal fabrication services. We offer assembly options to deliver a complete, ready-to-use part.
             </p>
             <h4 style={{ marginBottom: '0.5rem' }}>Welding Options:</h4>
             <ul style={{ listStylePosition: 'inside', color: '#333', marginBottom: '1.5rem' }}>
               <li>TIG Welding</li>
               <li>MIG Welding</li>
               <li>Spot Welding</li>
             </ul>
             <h4 style={{ marginBottom: '0.5rem' }}>Hardware Installation:</h4>
             <p style={{ color: '#333' }}>We stock and install a wide variety of PEM nuts, standoffs, and studs.</p>
           </div>
           <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/exploded_enclosure_1778549742922.png" alt="Assembly" fill style={{ objectFit: 'contain' }} />
             <div style={{ position: 'absolute', bottom: 0, width: '100%', padding: '1rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
               Exploded view of a sheet metal enclosure assembly.
             </div>
           </div>
         </div>
      </section>

      {/* Finishing Options */}
      <section id="finishing" className="section">
         <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
           <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Finishing Options for Punched Parts</h2>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
               Protect your parts, improve conductivity, or enhance cosmetics with our standard finishing options:
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
               Sheet metal parts with various surface finishes.
             </div>
           </div>
         </div>
      </section>

      {/* Additional Resources */}
      <section className="section" style={{ backgroundColor: '#F8F9FA' }}>
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Get an online quote today.</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
             <input type="email" placeholder="Enter your email" style={{ padding: '0.8rem 1rem', width: '300px', borderRadius: '4px', border: 'none' }} />
             <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>Get Quote</button>
          </div>
        </div>
      </section>
    </main>
  );
}

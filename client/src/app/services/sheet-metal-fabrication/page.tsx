import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sheet Metal Fabrication Service | Protolabs',
  description: 'Online custom sheet metal fabrication service.',
};

export default function SheetMetalFabricationPage() {
  return (
    <main>
      {/* Add Breadcrumbs here */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <Link href="/">Home</Link> &gt; <Link href="/services">Services</Link> &gt; <span style={{ color: 'var(--text-color)' }}>Sheet Metal Fabrication</span>
      </div>

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#1A1A1A' }}>Online Custom Sheet Metal Fabrication Service</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Accelerate product development, reduce risk, and cut costs with our fast, flexible sheet metal prototyping and production.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
              <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>Get Quote</button>
              <button className="btn btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>See Capabilities</button>
            </div>
            <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <span style={{ color: 'var(--primary-color)' }}>✓</span> ISO 9001
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <span style={{ color: 'var(--primary-color)' }}>✓</span> ITAR
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <span style={{ color: 'var(--primary-color)' }}>✓</span> AS9100D
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <span style={{ color: 'var(--primary-color)' }}>✓</span> On-Demand Manufacturing
               </div>
            </div>
          </div>
          <div style={{ position: 'relative', height: '400px', width: '100%' }}>
            <Image 
              src="/sheet_metal_hero_1778548780614.png" 
              alt="Sheet Metal Enclosure" 
              fill 
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* What is Sheet Metal Fabrication */}
      <section className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>What is Sheet Metal Fabrication?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '800px', lineHeight: '1.6' }}>
            Our custom sheet metal fabrication services offer a cost-effective and on-demand solution for your manufacturing needs. We have high-speed, state-of-the-art equipment to quickly bend, punch, and cut your design into a fully functioning part or assembly.
          </p>

          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {/* Card 1 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
               <div style={{ position: 'relative', height: '250px' }}>
                 <Image src="/laser_cutting_1778548803787.png" alt="Laser Cutting" fill style={{ objectFit: 'cover' }} />
               </div>
               <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Laser Cutting</h3>
                 <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1 }}>
                   We use state-of-the-art laser cutting systems that provide precision cutting for your custom sheet metal parts.
                 </p>
                 <button className="btn btn-outline" style={{ width: '100%' }}>Learn more</button>
               </div>
            </div>

            {/* Card 2 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
               <div style={{ position: 'relative', height: '250px' }}>
                 <Image src="/sheet_metal_factory_1778548823272.png" alt="Forming and Bending" fill style={{ objectFit: 'cover' }} />
               </div>
               <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Forming and Bending</h3>
                 <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1 }}>
                   Using automated press brakes and standard tooling, we can form custom parts from a variety of sheet metal materials.
                 </p>
                 <button className="btn btn-outline" style={{ width: '100%' }}>Learn more</button>
               </div>
            </div>
            
          </div>
          
          <div style={{ marginTop: '3rem', backgroundColor: '#E6F0FA', padding: '2rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', position: 'relative' }}>
                <Image src="/sheet-metal.png" alt="icon" fill style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Looking for full-service production?</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Get complete program management with a team who can tailor our capabilities to your needs.</p>
              </div>
            </div>
            <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore production <span style={{ fontSize: '1.2rem' }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sheet Metal Capabilities */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Sheet Metal Capabilities at Protolabs</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Our factory leverages a wide range of capabilities to support your sheet metal fabrication needs from prototype to production parts.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border-color)', marginBottom: '2rem', minWidth: '700px' }}>
              <thead>
                <tr style={{ backgroundColor: '#2C3E50', color: 'white' }}>
                  <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 600, fontSize: '1.1rem' }}>Available Services</th>
                  <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 600, fontSize: '1.1rem' }}>Profile</th>
                  <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 600, fontSize: '1.1rem' }}>Tolerance</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem' }}>
                    <ul style={{ listStylePosition: 'inside', color: '#333' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Laser cutting</li>
                      <li style={{ marginBottom: '0.5rem' }}>Punching</li>
                      <li style={{ marginBottom: '0.5rem' }}>Forming/Bending</li>
                      <li style={{ marginBottom: '0.5rem' }}>Hardware installation</li>
                      <li>Assembly/Welding</li>
                    </ul>
                  </td>
                  <td style={{ padding: '1.5rem', verticalAlign: 'top', color: '#333' }}>
                    <ul style={{ listStylePosition: 'inside' }}>
                      <li style={{ marginBottom: '0.5rem' }}>3D CAD format</li>
                      <li style={{ marginBottom: '0.5rem' }}>STEP (.stp)</li>
                      <li style={{ marginBottom: '0.5rem' }}>IGES (.igs)</li>
                      <li>SolidWorks (.sldprt)</li>
                    </ul>
                  </td>
                  <td style={{ padding: '1.5rem', verticalAlign: 'top', color: '#333' }}>
                    <ul style={{ listStylePosition: 'inside' }}>
                      <li style={{ marginBottom: '0.5rem' }}>+/- 0.005 in. (standard)</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Download the Design Guide for Sheet Metal Fabrication <span style={{ fontSize: '1.2rem' }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Full-Service */}
      <section className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Full-Service Sheet Metal Fabrication at Scale</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Quick-turn prototyping and low-volume production parts are just the beginning. 
              Our expansive facility and extensive equipment list mean we can scale with your 
              production needs, providing a seamless transition from initial design validation 
              to full market launch.
            </p>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Advantages of Sheet Metal Fabrication</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                 <span style={{ color: '#28A745', fontWeight: 'bold' }}>✓</span>
                 <span>Rapid prototyping</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                 <span style={{ color: '#28A745', fontWeight: 'bold' }}>✓</span>
                 <span>Custom parts for functional applications</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                 <span style={{ color: '#28A745', fontWeight: 'bold' }}>✓</span>
                 <span>Scalable to full-service production capacity</span>
              </li>
            </ul>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/welding_worker_1778548869358.png" alt="Full Service Scale" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* DFM Feedback */}
      <section className="section" style={{ backgroundColor: '#1E293B', color: 'white' }}>
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Design And Manufacturing (DFM) Feedback For Every Sheet Metal Quote</h2>
            <p style={{ color: '#94A3B8', marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
              We review all 3D CAD files for manufacturability and provide actionable feedback 
              within hours. Our automated quoting system highlights potential design risks 
              before manufacturing begins, saving you time and money.
            </p>
            <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>Get Quote</button>
          </div>
          <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
             <Image src="/dfm_software_1778548838036.png" alt="DFM Software" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Sheet Metal Applications */}
      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Sheet Metal Applications</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Custom sheet metal parts are used across a diverse set of industries. 
              Our fast, precise processes allow us to produce parts for a wide range of applications:
            </p>
            <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2' }}>
              <li>Enclosures</li>
              <li>Brackets</li>
              <li>Chassis</li>
              <li>Assemblies</li>
              <li>Panels</li>
              <li>Cabinets</li>
            </ul>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/sheet_metal_part_1778548851875.png" alt="Sheet Metal Applications" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Banner */}
      <section style={{ backgroundColor: '#0F172A', padding: '4rem 0', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>Download the Design Guide for Sheet Metal Fabrication</h2>
          <p style={{ color: '#94A3B8', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Learn how to optimize your part designs for sheet metal fabrication.
          </p>
          <button className="btn" style={{ backgroundColor: '#22C55E', color: 'white', padding: '0.8rem 2rem', fontSize: '1.1rem', border: 'none' }}>
            Get the Design Guide →
          </button>
        </div>
      </section>

    </main>
  );
}

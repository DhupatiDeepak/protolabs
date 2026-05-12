import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Metal Laser Cutting Service | Protolabs',
  description: 'Custom flat sheet metal parts in as fast as 1 day.',
};

export default function LaserCuttingPage() {
  return (
    <main>
      {/* Breadcrumbs & Title */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <Link href="/">Home</Link> &gt; <Link href="/services">Services</Link> &gt; <Link href="/services/sheet-metal-fabrication">Sheet Metal Fabrication</Link> &gt; <span style={{ color: 'var(--text-color)' }}>Laser Cutting</span>
      </div>

      <section className="container" style={{ paddingBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1A1A1A' }}>Metal Laser Cutting Service</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px' }}>
          Custom flat sheet metal parts in as fast as 1 day. Standard 3-day lead time is also available.
        </p>
        <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', marginBottom: '2rem' }}>Upload a Part</button>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Certifications: ISO 9001:2015, ITAR
        </div>
      </section>

      <div style={{ height: '1px', backgroundColor: 'var(--border-color)', width: '100%' }}></div>

      {/* Intro Section */}
      <section className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container grid grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
          <div>
             <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Jump to Section</h4>
             <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><a href="#our-process" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Our Process</a></li>
                <li style={{ marginBottom: '0.5rem' }}><a href="#design-guidelines" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Design Guidelines</a></li>
                <li style={{ marginBottom: '0.5rem' }}><a href="#materials" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Materials & Thicknesses</a></li>
             </ul>
             
             <div style={{ position: 'relative', height: '250px', width: '100%' }}>
               <Image src="/metal_laser_hero_1778549322502.png" alt="Metal Part" fill style={{ objectFit: 'contain' }} />
             </div>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
              Laser cutting is a manufacturing process where a laser beam is programmed to cut a flat piece of material. It is typically used for low-volume production and prototyping of sheet metal parts.
            </p>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Laser cutting is commonly used for:</h4>
            <ul style={{ listStylePosition: 'inside', color: '#333', marginBottom: '3rem', lineHeight: '2' }}>
              <li>parts requiring flat blanks or simple geometric cuts</li>
              <li>enclosures and instrument panels</li>
              <li>parts and frames for brackets and assemblies</li>
            </ul>

            {/* Design Guide Box */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Sheet Metal Design Guide</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Download this guide to learn how to optimize your sheet metal parts to save money and reduce turnaround time.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <select style={{ flexGrow: 1, padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
                   <option>United States</option>
                   <option>Canada</option>
                   <option>United Kingdom</option>
                </select>
                <select style={{ flexGrow: 1, padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
                   <option>Select State/Province</option>
                   <option>California</option>
                   <option>New York</option>
                </select>
                <button className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>Download</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="our-process" className="section">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Laser Cutting Process</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.6' }}>
              Protolabs offers extensive capabilities and expert resources to guide you through part production.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               {[
                 'Online quoting',
                 'Consistent lead times',
                 'Extensive material selection',
                 'One-stop shop for sheet metal components',
                 'High-precision cutting capability',
                 'Manufacturing capabilities'
               ].map((item, i) => (
                 <div key={i} style={{ padding: '1.2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
                   <span style={{ fontWeight: 500 }}>{item}</span>
                   <span style={{ color: 'var(--primary-color)' }}>▼</span>
                 </div>
               ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/laser_green_process_1778549338889.png" alt="Laser Cutting Process" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Design Guidelines */}
      <section id="design-guidelines" className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Laser Cutting Design Guidelines</h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#90C34B', margin: '0 auto 1.5rem auto' }}></div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            View line restrictions in this table to determine min. sizes and material availability.
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', gap: '1rem', fontWeight: 600 }}>
             <span style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--primary-color)' }}>IN</span>
             <span style={{ color: 'var(--text-secondary)' }}>MM</span>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '2rem', width: '30%', fontWeight: 600, color: '#333' }}>Minimum Part Size</td>
                  <td style={{ padding: '2rem', color: '#555' }}>
                    <ul style={{ listStylePosition: 'inside' }}>
                      <li>0.5 in. x 0.5 in. (12.7mm x 12.7mm)</li>
                      <li>0.5 in. x 1.0 in. (12.7mm x 25.4mm) for Stainless</li>
                    </ul>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '2rem', fontWeight: 600, color: '#333' }}>Maximum Part Size</td>
                  <td style={{ padding: '2rem', color: '#555' }}>39 in. x 39in. (1m x 1m)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '2rem', fontWeight: 600, color: '#333' }}>Standard Tolerances</td>
                  <td style={{ padding: '2rem', color: '#555' }}>+/- 0.005 in. (0.127mm)</td>
                </tr>
                <tr>
                  <td style={{ padding: '2rem', fontWeight: 600, color: '#333' }}>File Formats</td>
                  <td style={{ padding: '2rem', color: '#555' }}>
                    <ul style={{ listStylePosition: 'inside' }}>
                      <li>3D CAD format (required for quoting and manufacturing)</li>
                      <li>IGES (.igs), STEP (.stp), SolidWorks (.sldprt), AutoCAD (.dwg)</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Materials and Thicknesses for Laser Cut Parts</h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#90C34B', margin: '0 auto 1.5rem auto' }}></div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            We stock the following raw materials for custom sheet metal parts. Non-standard material thicknesses are available upon request.
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border-color)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 600 }}>Material</th>
                <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 600 }}>Grade</th>
                <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 600 }}>Thicknesses Available</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1.5rem', fontWeight: 600 }}>Aluminum</td>
                <td style={{ padding: '1.5rem', color: '#555' }}>
                  <ul style={{ listStylePosition: 'inside' }}>
                    <li>5052-H32</li>
                    <li>6061-T6</li>
                  </ul>
                </td>
                <td style={{ padding: '1.5rem', color: '#555' }}>0.032 in. - 0.250 in. (0.812mm - 6.35mm)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1.5rem', fontWeight: 600 }}>Steel</td>
                <td style={{ padding: '1.5rem', color: '#555' }}>
                  <ul style={{ listStylePosition: 'inside' }}>
                    <li>Cold Rolled</li>
                    <li>Galvanized</li>
                    <li>Galvanneal</li>
                  </ul>
                </td>
                <td style={{ padding: '1.5rem', color: '#555' }}>0.023 in. - 0.250 in. (0.584mm - 6.35mm)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1.5rem', fontWeight: 600 }}>Stainless Steel</td>
                <td style={{ padding: '1.5rem', color: '#555' }}>
                  <ul style={{ listStylePosition: 'inside' }}>
                    <li>304 (2B)</li>
                    <li>304 (#4)</li>
                    <li>316 (2B)</li>
                  </ul>
                </td>
                <td style={{ padding: '1.5rem', color: '#555' }}>0.024 in. - 0.250 in. (0.609mm - 6.35mm)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1.5rem', fontWeight: 600 }}>Copper</td>
                <td style={{ padding: '1.5rem', color: '#555' }}>
                  <ul style={{ listStylePosition: 'inside' }}>
                    <li>C110</li>
                    <li>C101</li>
                  </ul>
                </td>
                <td style={{ padding: '1.5rem', color: '#555' }}>0.032 in. - 0.125 in. (0.812mm - 3.175mm)</td>
              </tr>
              <tr>
                <td style={{ padding: '1.5rem', fontWeight: 600 }}>Brass</td>
                <td style={{ padding: '1.5rem', color: '#555' }}>
                  <ul style={{ listStylePosition: 'inside' }}>
                    <li>C260</li>
                  </ul>
                </td>
                <td style={{ padding: '1.5rem', color: '#555' }}>0.032 in. - 0.125 in. (0.812mm - 3.175mm)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/laser_sparks_application_1778549356517.png" alt="Laser Cutting Sparks" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Applications for Laser Cut Parts</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Laser cutting is frequently used in manufacturing where smooth, precision finishes are required in structural frames and other components. Common applications include:
            </p>
            <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2', fontWeight: 500 }}>
              <li>Flat blanks</li>
              <li>Faceplates</li>
              <li>Brackets</li>
              <li>Structural parts</li>
              <li>Panels</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Additional Resources</h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#90C34B', margin: '0 auto 3rem auto' }}></div>

          <div className="grid grid-3">
             <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '200px', backgroundColor: '#F8F9FA' }}>
                  <Image src="/dfm_software_1778548838036.png" alt="Toolkit" fill style={{ objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Design for Sheet Metal Fabrication Toolkit</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>
                    Learn how design choices optimize your custom sheet metal parts by grouping all of our manufacturing insight on standard procedures for one convenient resource.
                  </p>
                  <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Get the Toolkit →</Link>
                </div>
             </div>

             <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '200px', backgroundColor: '#F8F9FA' }}>
                  <Image src="/resource_guide_1778549373198.png" alt="11 Ways to cut costs" fill style={{ objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>11 Ways to Cut Sheet Metal Fabrication Costs</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>
                    Optimize your sheet metal parts and reduce turnaround time and total costs.
                  </p>
                  <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Read the Design Tip →</Link>
                </div>
             </div>

             <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '200px', backgroundColor: '#F8F9FA', padding: '1rem' }}>
                  <div style={{ width: '100%', height: '100%', border: '2px dashed #CCC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <span style={{ color: '#999', fontSize: '0.9rem' }}>Interactive Graphic</span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Interactive Hardware into Sheet Metal</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>
                    See our standard options of hardware and their specifications in an interactive visual format.
                  </p>
                  <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Explore Hardware →</Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '4rem 0', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Get an online quote today.</h2>
          <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>Get Quote</button>
        </div>
      </section>
    </main>
  );
}

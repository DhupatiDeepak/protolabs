import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sheet Metal Forming Service | Protolabs',
  description: 'Get custom formed sheet metal parts for rapid prototyping and production in as fast as 3 days.',
};

export default function FormingBendingPage() {
  return (
    <main>
      {/* Breadcrumbs & Title */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <Link href="/">Home</Link> &gt; <Link href="/services">Services</Link> &gt; <Link href="/services/sheet-metal-fabrication">Sheet Metal Fabrication</Link> &gt; <span style={{ color: 'var(--text-color)' }}>Forming</span>
      </div>

      <section className="container grid grid-2" style={{ paddingBottom: '3rem', alignItems: 'center', gap: '4rem' }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1A1A1A' }}>Sheet Metal Forming Service</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Get custom formed sheet metal parts for rapid prototyping and production in as fast as 3 days.
          </p>
          <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', marginBottom: '2rem' }}>Upload a Part</button>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Certifications: ISO 9001:2015 | ITAR
          </div>
        </div>
        <div style={{ position: 'relative', height: '300px', width: '100%' }}>
          <Image src="/forming_hero_1778550107212.png" alt="Formed Bracket" fill style={{ objectFit: 'contain' }} />
        </div>
      </section>

      <div style={{ height: '1px', backgroundColor: 'var(--border-color)', width: '100%' }}></div>

      {/* What is Press Brake Forming */}
      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>What is Press Brake Forming?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Press brake forming is a metal fabrication process that bends flat sheet metal into its final shape. A press brake machine has a upper tool called a punch, and a lower tool called a die. Sheet metal can be manufactured safely and accurately into custom bent parts. A force is applied that forms the sheet metal to a specified angle. Protolabs' repeatable press brake forming services create parts that include V-bends, U-bends, and custom bent designs. Email our sales team to review lead times faster than 3 days!
            </p>
          </div>
          <div>
             <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
               <Image src="/sheet_metal_factory_1778548823272.png" alt="Press Brake Forming" fill style={{ objectFit: 'cover' }} />
             </div>
          </div>
        </div>
      </section>

      {/* Guidelines and Capabilities */}
      <section className="section" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Sheet Metal Forming Design Guidelines and Capabilities</h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#90C34B', margin: '0 auto 1.5rem auto' }}></div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            Follow these guidelines and capabilities when designing your sheet metal parts for press brake forming.
          </p>

          <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--border-color)', overflow: 'hidden', maxWidth: '1000px', margin: '0 auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', width: '30%', fontWeight: 600, color: '#333' }}>Maximum Bend Length</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>39 in.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#333' }}>Minimum Qualifying Part Size</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>0.05 in (0.32 in | 0.81mm for formed parts)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#333' }}>Maximum Bending Force</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>60 tons</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#333' }}>Bend Angles</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>Varying surface to 130 degrees</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#333' }}>Bending Output</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>Linear bends—seams and internal hinges</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#333' }}>Maximum Thickness / Radii</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>(varies on design)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#333' }}>Manual Radius Tooling Options</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>
                     0.030 in. to 1 in. (custom tooling is extra cost)<br/><br/>
                     All standard bend radii list is provided.
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#333' }}>Offsets</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>Standard offset tooling sizes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#333' }}>Hems</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>Closed/flat, open, or tear drop up to 39 in.</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#333' }}>Forming Best Practices</td>
                  <td style={{ padding: '1.5rem', color: '#555' }}>
                    <ul style={{ listStylePosition: 'inside', lineHeight: '1.8' }}>
                      <li><span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>uniform bend radii</span> (0.125 in. or greater)</li>
                      <li>For lead times cut sheet metal, we recommend a minimum bend radius equal to...</li>
                      <li>For corner reliefs, flares, and custom forms... (link)</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Sheet Metal Materials and Thicknesses for Formed Parts</h2>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#90C34B', margin: '0 auto 1.5rem auto' }}></div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            We offer the following metal materials for custom formed sheet metal parts. Note that based on material thickness, minimum bending radii list will vary.
          </p>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
             <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid var(--text-color)' }}>
               <thead>
                 <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                   <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 600, fontSize: '1.1rem' }}>Material</th>
                   <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 600, fontSize: '1.1rem' }}>Grade</th>
                   <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 600, fontSize: '1.1rem' }}>Thicknesses Available</th>
                 </tr>
               </thead>
               <tbody>
                 <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                   <td style={{ padding: '1.5rem', fontWeight: 600 }}>Aluminum</td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     <ul style={{ listStylePosition: 'inside' }}>
                       <li>5052-H32</li>
                       <li>6061-T6 (requires review*)</li>
                     </ul>
                   </td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     <ul style={{ listStylePosition: 'inside', lineHeight: '2' }}>
                       <li>5052: 0.032 in. - 0.250 in. (0.812mm - 6.35mm)</li>
                       <li>6061: 0.032 in. - 0.125 in. (0.812mm - 3.175mm)*</li>
                     </ul>
                   </td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                   <td style={{ padding: '1.5rem', fontWeight: 600 }}>Steel</td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     <ul style={{ listStylePosition: 'inside' }}>
                       <li>CRCA / HRS</li>
                       <li>Galvanized (pre-plated)</li>
                       <li>Galvanneal (pre-plated)</li>
                     </ul>
                   </td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     <ul style={{ listStylePosition: 'inside', lineHeight: '2' }}>
                       <li>CRCA / HRS: 0.024 in. - 0.250 in. (0.609mm - 6.35mm)</li>
                       <li>Pre-plated: 0.023 in. - 0.134 in. (0.584mm - 3.40mm)</li>
                     </ul>
                   </td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                   <td style={{ padding: '1.5rem', fontWeight: 600 }}>Stainless Steel</td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     <ul style={{ listStylePosition: 'inside' }}>
                       <li>304-2B</li>
                       <li>304-#4</li>
                       <li>316-2B</li>
                     </ul>
                   </td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     <ul style={{ listStylePosition: 'inside', lineHeight: '2' }}>
                       <li>304-2B: 0.024 in. - 0.250 in. (0.609mm - 6.35mm)</li>
                       <li>304-#4: 0.035 in. - 0.120 in. (0.889mm - 3.048mm)</li>
                       <li>316-2B: 0.035 in. - 0.120 in. (0.889mm - 3.048mm)</li>
                     </ul>
                   </td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                   <td style={{ padding: '1.5rem', fontWeight: 600 }}>Copper</td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     <ul style={{ listStylePosition: 'inside' }}>
                       <li>C110</li>
                       <li>C101</li>
                     </ul>
                   </td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     0.032 in. - 0.125 in. (0.812mm - 3.175mm)
                   </td>
                 </tr>
                 <tr style={{ borderBottom: '2px solid var(--text-color)' }}>
                   <td style={{ padding: '1.5rem', fontWeight: 600 }}>Brass</td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     <ul style={{ listStylePosition: 'inside' }}>
                       <li>C260</li>
                     </ul>
                   </td>
                   <td style={{ padding: '1.5rem', color: '#555' }}>
                     0.032 in. - 0.125 in. (0.812mm - 3.175mm)
                   </td>
                 </tr>
               </tbody>
             </table>
             <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
               *Some parts made out of Aluminum 6061-T6 require manual review and are manually visible during the quoting process.
             </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section" style={{ backgroundColor: '#F8F9FA' }}>
         <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
           <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Applications for Press Brake Formed Parts</h2>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
               Press brake forming is commonly used in manufacturing custom sheet metal parts for a wide range of industries: aerospace, robotics, medical, and aerospace. Common sheet metal parts fabricated with forming include:
             </p>
             <ul style={{ listStylePosition: 'inside', color: '#333', marginBottom: '1.5rem', lineHeight: '2' }}>
               <li>Brackets</li>
               <li>Chassis</li>
               <li>Covers</li>
               <li>Panels</li>
               <li>Enclosures</li>
               <li>Housings and frames</li>
             </ul>
           </div>
           <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
             <Image src="/sheet_metal_part_1778548851875.png" alt="Formed Parts Application" fill style={{ objectFit: 'cover' }} />
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

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sheet Metal Low Volume Production | Protolabs',
  description: 'Speed to market and scaleable digital manufacturing. Protolabs is your one-stop digital manufacturer.',
};

export default function ProductionPage() {
  return (
    <main>
      {/* Breadcrumbs & Title */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <Link href="/">Home</Link> &gt; <Link href="/services">Services</Link> &gt; <Link href="/services/sheet-metal-fabrication">Sheet Metal Fabrication</Link> &gt; <span style={{ color: 'var(--text-color)' }}>Production</span>
      </div>

      <section className="container grid grid-2" style={{ paddingBottom: '3rem', alignItems: 'center', gap: '4rem' }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1A1A1A', lineHeight: '1.2' }}>Sheet Metal Low Volume Production Service</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            Speed to market and scaleable digital manufacturing. Protolabs is your one-stop digital manufacturer, offering flexible low-volume and hot-run production. Our connected supply chain enables access to our global manufacturing network.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
             <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>Get Instant Quote</button>
             <button className="btn btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', backgroundColor: '#F1F5F9', border: 'none', color: '#333' }}>Talk to Production Expert</button>
          </div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Certifications: ISO 9001:2015 | ITAR
          </div>
        </div>
        <div style={{ position: 'relative', height: '350px', width: '100%' }}>
          <Image src="/metal_finishes_1778549756266.png" alt="Sheet Metal Finishes" fill style={{ objectFit: 'contain' }} />
        </div>
      </section>

      <div style={{ height: '1px', backgroundColor: 'var(--border-color)', width: '100%' }}></div>

      {/* Production Capabilities */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
           <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Production Capabilities for Sheet Metal Parts and Assemblies</h2>
           <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
              <div style={{ position: 'relative', height: '400px', width: '100%' }}>
                <Image src="/exploded_enclosure_1778549742922.png" alt="Capabilities" fill style={{ objectFit: 'contain' }} />
              </div>
              <div>
                 <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Manufacturing Capabilities</h4>
                 <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                   <Link href="#" style={{ color: 'var(--primary-color)' }}>Protolabs Network</Link> connects you to a network of local manufacturing partners. We provide the capabilities needed to scale your parts from prototyping to production.
                 </p>
                 <ul style={{ listStylePosition: 'outside', marginLeft: '1.5rem', color: '#333', lineHeight: '1.8' }}>
                   <li style={{ marginBottom: '1rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>Precision</span> laser cutting and forming options to meet tight tolerances, custom part features, and precision hardware insertion. Quality parts across every order.
                   </li>
                   <li style={{ marginBottom: '1rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>Hardware insertion</span> capabilities to ensure standard components are securely fastened to your parts.
                   </li>
                   <li style={{ marginBottom: '1rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>Assembly</span> of jointly fabricated components up to complex assemblies including structural weldments and joined structures customized to your manufacturing process and requirements.
                   </li>
                   <li>
                      <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>Finishing options</span> get your parts end-use ready or prepped for final assembly out. Finishing options include manual or automated powder coating, plating, anodizing, chromate plating, silk screening, chem film, passivation, zinc plating, and more.
                   </li>
                 </ul>
              </div>
           </div>
           
           <div style={{ backgroundColor: '#E0F2FE', padding: '1.5rem', borderRadius: '8px', marginTop: '3rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>💡</span>
              <div>
                 <h5 style={{ fontSize: '1rem', color: '#0369A1', marginBottom: '0.25rem' }}>Protolabs Pro Tip:</h5>
                 <p style={{ color: '#0C4A6E', fontSize: '0.95rem' }}>Add to this finish selection and match brand guidelines with custom RAL and Pantone colors from our standard list <Link href="#" style={{ textDecoration: 'underline', fontWeight: 600 }}>here.</Link></p>
              </div>
           </div>
        </div>
      </section>

      {/* Alternating Sections */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
         
         {/* Technical Support */}
         <div style={{ backgroundColor: '#F8F9FA', padding: '5rem 0' }}>
           <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
             <div>
               <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Technical Support</h2>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                 Get dedicated support for your order. A sales representative and technical manager are assigned to each account.
               </p>
               <ul style={{ listStylePosition: 'outside', marginLeft: '1.5rem', color: '#555', marginBottom: '2rem', lineHeight: '1.8' }}>
                 <li>Our dedicated sales and program managers will help guide and align your custom manufacturing goals, expectations, and timeline while optimizing assembly workflows with your engineers. <Link href="#" style={{ color: 'var(--primary-color)' }}>Learn more about our connected capabilities.</Link></li>
                 <li>Design for manufacturability (DFM) provides rapid part evaluations and design advice to reduce cost and optimize part quality. Our quoting engine empowers manufacturing to start rapidly. Custom quoting and dedicated engineers ensure your exact quality standards are met for every production run.</li>
               </ul>
               <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '1.1rem' }}>Get started today with our sales team →</Link>
             </div>
             <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
               <Image src="/dfm_software_1778548838036.png" alt="Technical Support" fill style={{ objectFit: 'cover' }} />
             </div>
           </div>
         </div>

         {/* Delivery and Logistics */}
         <div style={{ padding: '5rem 0' }}>
           <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
             <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#F1F5F9' }}>
               <Image src="/sheet_metal_part_1778548851875.png" alt="Logistics" fill style={{ objectFit: 'contain' }} />
             </div>
             <div>
               <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Delivery and Logistics</h2>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                 Count on our supply chain to get finished orders seamlessly. Upon final processing, your parts are securely packaged in boxes filled with impact-resistant foam and packing material as needed.
               </p>
               <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                 We actively track and ship to meet your dynamic inventory and stocking needs to ensure continuous run capabilities.
               </p>
             </div>
           </div>
         </div>

         {/* Production Materials */}
         <div style={{ backgroundColor: '#F8F9FA', padding: '5rem 0' }}>
           <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
             <div>
               <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Production Materials</h2>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                 Choose from over 30 sheet materials and tempers based on part applications. Through our global network we offer an extensive array of materials to meet your project. We have tempers in aluminum 5052, 6061, carbon steel, and stainless steel, as well as multiple copper alloys.
               </p>
               <ul style={{ listStylePosition: 'inside', color: '#333', lineHeight: '2' }}>
                 <li>Aluminum 5052, 6061</li>
                 <li>Steel CRCA</li>
                 <li>Galvanized / Galvanneal (pre-plated steel)</li>
                 <li>Low Carbon Steel 1018, 1020</li>
                 <li>Stainless Steel 304, 316</li>
               </ul>
             </div>
             <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
               <Image src="/punched_metal_edge_1778549729954.png" alt="Materials" fill style={{ objectFit: 'cover' }} />
             </div>
           </div>
         </div>

         {/* Production Finishes */}
         <div style={{ padding: '5rem 0' }}>
           <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
             <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
               <Image src="/welding_worker_1778548869358.png" alt="Finishes" fill style={{ objectFit: 'cover' }} />
             </div>
             <div>
               <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Production Finishes</h2>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                 Customize parts for aesthetics, performance, and corrosion resistance. <Link href="#" style={{ color: 'var(--primary-color)' }}>Learn more</Link> about our custom surface finishes for our complete offering of solutions to seamlessly bring your parts to market. Some finishes include:
               </p>
               <ul style={{ listStylePosition: 'inside', color: '#333', marginBottom: '2rem', lineHeight: '2' }}>
                 <li>Powder Coating</li>
                 <li>Plating / Coating</li>
                 <li>Passivate</li>
                 <li>Silk Screening</li>
                 <li>Masking</li>
                 <li>Part Marking</li>
               </ul>
               <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '1.1rem' }}>Check out our custom finish options →</Link>
             </div>
           </div>
         </div>

         {/* Quality Processes */}
         <div style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '5rem 0' }}>
           <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
             <div>
               <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Quality Processes and Documentation</h2>
               <p style={{ color: '#CBD5E1', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                 Industry-grade documentation from our ISO 9001:2015 certified facilities. Ensure your precision parts meet your functional requirements. With thorough and full performance verifications and compliance processes, you mitigate risks and expectations for final assembly and dimensional accuracy.
               </p>
               <p style={{ color: '#CBD5E1', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                 Choose from a full line of production documents and our conformance or standard measurements.
               </p>
               <ul style={{ listStylePosition: 'inside', color: 'white', marginBottom: '2rem', lineHeight: '2' }}>
                 <li>Dimensional Inspection Report</li>
                 <li>First Article Inspection</li>
                 <li>CoC / Material Certifications</li>
                 <li>Hardware Verification</li>
                 <li>First Article Review</li>
               </ul>
               <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Note: ITAR part processing is available.</p>
             </div>
             <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
               <Image src="/guide_resource_1778549772887.png" alt="Quality" fill style={{ objectFit: 'contain' }} />
             </div>
           </div>
         </div>

         {/* Batch Production */}
         <div style={{ padding: '5rem 0' }}>
           <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
             <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
               <Image src="/metal_laser_hero_1778549322502.png" alt="Batch Production" fill style={{ objectFit: 'cover' }} />
             </div>
             <div>
               <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Batch Production</h2>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                 Scaling your operations usually just means finding new efficiencies and managing our part in an assembly format that scales along with your growth. From initial prototyping to continuous batch-run orders, our low-volume flexibility minimizes risk and helps optimize scaling.
               </p>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                 Our automated processes manually and automatically scan files. To ensure we are maximizing efficiencies to fulfill your order, you can submit standard or multi-file uploads securely through our site or work directly with an account contact if your project demands that level of service to ensure your complete assembly comes together right every time.
               </p>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                 To meet batch and multi-part order requirements <Link href="#" style={{ color: 'var(--primary-color)' }}>contact a manufacturing expert</Link> and provide the following information:
               </p>
               <ul style={{ listStylePosition: 'outside', marginLeft: '1.5rem', color: '#555', lineHeight: '1.8' }}>
                 <li>3D models for the production parts of the exact batch shipment</li>
                 <li>2D pdf drawings for any parts in your batch that require custom colors, finishes, or custom hardware</li>
               </ul>
             </div>
           </div>
         </div>

      </section>

      {/* Start Project CTA */}
      <section style={{ backgroundColor: '#F8F9FA', padding: '6rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
         <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Start Your Project Today</h2>
         <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Start Production Quote</button>
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

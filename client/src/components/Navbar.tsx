"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState({ code: 'IN', name: 'India' });
  const pathname = usePathname();

  const hideOnPaths = ['/login', '/dashboard'];
  if (hideOnPaths.includes(pathname)) return null;

  const menus: Record<string, any> = {
    services: {
      columns: {
        'Injection Molding Service': [
          { title: 'Plastic Injection Molding', desc: 'Molded plastic prototypes and production parts' },
          { title: 'Liquid Silicone Rubber Molding', desc: 'LSR prototypes and production parts' },
          { title: 'Overmolding', desc: 'Custom overmolded prototypes and production parts' },
          { title: 'Insert Molding', desc: 'Custom insert molded prototypes and production parts' },
          { title: 'Family and Multi-Cavity Molding', desc: 'Cost-effective tooling' },
          { title: 'Prototyping', desc: 'Rapid prototyping' },
          { title: 'Production', desc: 'Full-service production' }
        ],
        'CNC Machining Service': [
          { title: 'CNC Milling', desc: 'Machined prototypes and production parts' },
          { title: 'CNC Turning', desc: 'Machined prototypes and production parts' },
          { title: 'Production Machining', desc: 'Full-service production' },
          { title: 'Threading Options', desc: 'Custom threading' },
          { title: 'Quality', desc: 'Digital manufacturing' },
          { title: 'Finishing Options', desc: 'Various finishes' }
        ],
        '3D Printing Service': [
          { title: 'Metal 3D Printing', desc: 'DMLS for functional metal parts' },
          { title: 'Stereolithography', desc: 'High-resolution plastic parts' },
          { title: 'Multi Jet Fusion', desc: 'Functional nylon parts' },
          { title: 'Selective Laser Sintering', desc: 'Durable nylon parts' },
          { title: 'PolyJet', desc: 'Multi-material parts' },
          { title: 'Advanced Photopolymers', desc: 'High-performance plastics' }
        ],
        'Sheet Metal Fabrication': [
          { title: 'Laser Cutting', desc: 'Custom cut flat parts' },
          { title: 'Punching', desc: 'Custom punched flat parts' },
          { title: 'Forming and Bending', desc: 'Custom bent parts' },
          { title: 'Fabricated Assemblies', desc: 'Custom assembled parts' },
          { title: 'Prototyping', desc: 'Rapid prototyping' },
          { title: 'Production', desc: 'Full-service production' }
        ]
      },
      promo: {
        title: 'Ready for Full-Service Production?',
        text: 'We are your manufacturing partner to scale projects to production. Get complete program management with a team who can tailor our capabilities.',
        button: 'Explore Production',
        image: '/cnc.png'
      }
    },
    materials: {
      columns: {
        'Material by Service': [
          { title: 'Injection Molding', desc: 'Molded plastic prototypes and production parts' },
          { title: 'CNC Machining', desc: 'Machined prototypes and production parts in as fast as 1 day' },
          { title: '3D Printing', desc: 'Additive manufacturing for quality plastic and metal parts' },
          { title: 'Sheet Metal', desc: 'Flat and formed sheet metal for custom parts' }
        ],
        'Material by Type': [
          { title: 'Plastics', desc: 'Various grades of plastics across technologies' },
          { title: 'Metals', desc: 'Extensive library of metal materials' },
          { title: 'Elastomers', desc: 'Flexible materials for molding and 3D printing' },
          { title: 'Colors', desc: 'View color options for each service' },
          { title: 'Customer Supplied Resin', desc: 'Guidelines on how to supply resin' }
        ]
      },
      promo: {
        title: 'New 3D Printing Materials!',
        text: 'Tough Black (Loctite Henkel 3843) and Ceramic-Filled (BASF 3280) are available now.',
        button: 'Learn More',
        image: '/3d-printing.png'
      }
    },
    industries: {
      columns: {
        'Industries We Serve': [
          { title: 'Medical', desc: 'Accelerated development of devices' },
          { title: 'Aerospace', desc: 'High-quality components' },
          { title: 'Automotive', desc: 'Rapid prototyping and ramp-up' },
          { title: 'Robotics', desc: 'Complex end-use parts' },
          { title: 'Consumer Electronics', desc: 'Functional prototyping' },
          { title: 'Industrial Equipment', desc: 'Durable jigs and fixtures' }
        ],
        'Industry Resources': [
          { title: 'Medical Injection Molding', desc: 'Design for medical' },
          { title: 'Medical Materials', desc: 'Material selection' },
          { title: 'Aerospace Machining', desc: 'AS9100 certified' },
          { title: 'EV/AV Guide', desc: 'Automotive innovation' }
        ]
      },
      promo: {
        title: 'Protolabs x NASA',
        text: 'We partnered with NASA to machine a crowdsourced, generatively designed part in 36 hours.',
        button: 'Read Story',
        image: '/hero-part.png'
      }
    },
    resources: {
      columns: {
        'Design Tips': [
          { title: 'Advice on common issues', desc: 'Material selection' },
          { title: 'Toolkits', desc: 'Prototyping to production' },
          { title: 'Guides and Trend Reports', desc: 'In-depth topics' }
        ],
        'Support': [
          { title: 'Design Aids', desc: 'Physical tools' },
          { title: 'Events & Trade Shows', desc: 'Live webinars' },
          { title: 'Blog', desc: 'Design resources' },
          { title: 'Videos', desc: 'Technologies and more' }
        ]
      },
      promo: {
        title: 'Design Cube',
        text: 'Our helpful design aid demonstrates part features like ribs, bosses, and more.',
        button: 'Request Design Cube',
        image: '/injection.png'
      }
    },
    about: {
      columns: {
        'Protolabs Network': [
          { title: 'Factories x Network', desc: '' },
          { title: 'What is Protolabs Network?', desc: '' },
          { title: 'Quality Assurance at Network', desc: '' }
        ],
        'Our Company': [
          { title: 'ProDesk', desc: '' },
          { title: 'Careers', desc: '' },
          { title: 'ISO Certifications', desc: '' },
          { title: 'Locations', desc: '' },
          { title: 'Investors', desc: '' },
          { title: 'Press', desc: '' },
          { title: 'Charitable Giving & Impact', desc: '' }
        ],
        'Contact Us': [
          { title: 'Proto Labs, Inc.', desc: '5540 Pioneer Creek Dr.\nMaple Plain, MN 55359\nUnited States' },
          { title: 'P: 877-479-3680', desc: '' },
          { title: 'F: 763-479-2679', desc: '' },
          { title: 'E: customerservice@protolabs.com', desc: '' }
        ]
      },
      promo: {
        title: 'Manufacture like a Pro',
        text: 'From custom prototyping to end-use production, we\'re your trusted manufacturing partner.',
        button: 'Learn More',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300'
      }
    }
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'materials', label: 'Materials' },
    { id: 'industries', label: 'Industries' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About Us' }
  ];

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '0.6rem',
        fontSize: '0.85rem',
        textAlign: 'center',
        position: 'relative',
        fontWeight: 500
      }}>
        New trend report! See how manufacturing's digital adoption is transforming the product life cycle | <Link href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Learn More →</Link>
        <span style={{ position: 'absolute', right: '1.5rem', cursor: 'pointer', opacity: 0.7 }}>✕</span>
      </div>

      <nav 
      onMouseLeave={() => setActiveMenu(null)}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        borderBottom: '1px solid var(--border-color)',
        padding: '0.8rem 0'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--primary-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'var(--primary-color)',
            borderRadius: '4px'
          }}></div>
          PROTOLABS
        </Link>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          fontWeight: 500,
          fontSize: '0.95rem'
        }}>
          {navItems.map(item => (
            <div 
              key={item.id}
              onMouseEnter={() => setActiveMenu(item.id)}
              style={{ 
                padding: '0.5rem 0', 
                cursor: 'pointer',
                color: activeMenu === item.id ? 'var(--primary-color)' : 'inherit',
                borderBottom: activeMenu === item.id ? '2px solid var(--primary-color)' : '2px solid transparent',
                transition: 'all 0.2s ease'
              }}
            >
              {item.label}
            </div>
          ))}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1rem' }}>
            <span 
              onClick={() => setIsSearchOpen(true)}
              style={{ cursor: 'pointer', fontSize: '1.2rem', transition: 'var(--transition)' }}
            >🔍</span>
            <div 
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}
            >
               <img 
                 src={`https://flagcdn.com/w20/${selectedRegion.code.toLowerCase()}.png`}
                 alt={selectedRegion.name}
                 style={{ width: '20px', height: 'auto', borderRadius: '2px' }}
               />
               <span style={{ fontSize: '0.7rem' }}>{isLanguageOpen ? '▲' : '▼'}</span>

               {isLanguageOpen && (
                 <div style={{
                   position: 'absolute',
                   top: '100%',
                   right: 0,
                   marginTop: '1rem',
                   backgroundColor: '#fff',
                   boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                   border: '1px solid var(--border-color)',
                   borderRadius: '4px',
                   width: '200px',
                   zIndex: 2000,
                   padding: '0.5rem 0'
                 }}>
                   {[
                     { code: 'IN', name: 'India' },
                     { code: 'DE', name: 'Deutschland' },
                     { code: 'ES', name: 'España' },
                     { code: 'FR', name: 'France' },
                     { code: 'IT', name: 'Italia' },
                     { code: 'GB', name: 'United Kingdom' },
                     { code: 'US', name: 'United States' }
                   ].map(region => (
                     <div 
                       key={region.code}
                       onClick={(e) => {
                         e.stopPropagation();
                         setSelectedRegion(region);
                         setIsLanguageOpen(false);
                       }}
                       style={{ 
                         padding: '0.7rem 1.5rem', 
                         display: 'flex', 
                         alignItems: 'center', 
                         gap: '1rem',
                         fontSize: '0.9rem',
                         color: '#333',
                         transition: 'var(--transition)'
                       }}
                       className="region-item"
                     >
                       <img 
                         src={`https://flagcdn.com/w20/${region.code.toLowerCase()}.png`}
                         alt={region.name}
                         style={{ width: '20px', height: 'auto', borderRadius: '2px' }}
                       />
                       <span>{region.name}</span>
                     </div>
                   ))}
                 </div>
               )}
            </div>
            <Link href="/login" style={{ color: 'var(--primary-color)', marginLeft: '1rem' }}>Sign In</Link>
            <Link href="/login" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', borderRadius: '4px' }}>
              Get Instant Quote
            </Link>
          </div>
        </div>
      </div>

      {/* MEGA MENU */}
      {activeMenu && menus[activeMenu] && (
        <div 
          className="animate-fade"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
            borderTop: '1px solid var(--border-color)',
            padding: '3rem 0'
          }}
        >
          <div className="container" style={{ display: 'grid', gridTemplateColumns: `repeat(${Object.keys(menus[activeMenu].columns).length}, 1fr) 320px`, gap: '3rem' }}>
            {Object.entries(menus[activeMenu].columns).map(([category, links]: [any, any]) => (
              <div key={category}>
                <h4 style={{ 
                  color: '#333', 
                  marginBottom: '1.5rem', 
                  fontSize: '1rem', 
                  fontWeight: 700,
                  borderTop: category === 'Protolabs Network' ? '2px solid #90C34B' : 'none',
                  paddingTop: category === 'Protolabs Network' ? '0.5rem' : '0'
                }}>{category}</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {links.map((link: any) => (
                    <li key={link.title}>
                      <Link href="#" style={{ 
                        transition: 'var(--transition)',
                        display: 'block'
                      }} className="menu-link">
                        <div style={{ fontSize: '0.9rem', fontWeight: link.desc ? 600 : 400, color: '#333', marginBottom: '0.2rem' }}>
                          {link.title}
                        </div>
                        {link.desc && (
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 400, whiteSpace: 'pre-line', lineHeight: '1.4' }}>
                            {link.desc}
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Right Pane Promo */}
            <div style={{
              backgroundColor: '#F8F9FA',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              alignSelf: 'start'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '1rem', borderRadius: '4px', overflow: 'hidden' }}>
                <Image src={menus[activeMenu].promo.image} alt="Promo" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{menus[activeMenu].promo.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                {menus[activeMenu].promo.text}
              </p>
              <button style={{ 
                color: 'var(--primary-color)', 
                fontWeight: 600, 
                fontSize: '0.9rem',
                borderBottom: '2px solid var(--primary-color)',
                paddingBottom: '2px'
              }}>
                {menus[activeMenu].promo.button}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH OVERLAY */}
      {isSearchOpen && (
        <div 
          className="animate-fade"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100px',
            backgroundColor: '#fff',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '0 2rem'
          }}
        >
          <div className="container" style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '1rem' }}>
             <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>🔍</span>
             <input 
               autoFocus
               placeholder="Search Protolabs Services, Materials, and more..."
               style={{
                  flexGrow: 1,
                  padding: '1rem',
                  border: 'none',
                  fontSize: '1.2rem',
                  outline: 'none',
                  color: '#333'
               }}
             />
             <button 
               onClick={() => setIsSearchOpen(false)}
               style={{ 
                  padding: '1rem', 
                  fontSize: '1.5rem', 
                  color: '#999', 
                  cursor: 'pointer'
               }}
             >✕</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .menu-link:hover {
          opacity: 1 !important;
          color: var(--primary-color) !important;
          padding-left: 4px;
        }
        .region-item:hover {
          background-color: #F8F9FA;
          color: var(--primary-color) !important;
        }
      `}</style>
    </nav>
    </>
  );
}

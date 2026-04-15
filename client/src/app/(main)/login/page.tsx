"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 420px) 1fr', minHeight: '100vh', backgroundColor: '#fff' }}>
      
      {/* LEFT: Branding Pane */}
      <div style={{ 
        backgroundColor: '#30363D', 
        color: '#fff', 
        padding: '4rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Link href="/" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
             <div style={{ width: '32px', height: '32px', backgroundColor: '#fff', borderRadius: '4px' }}></div>
             PROTOLABS
          </div>
          <div style={{ fontSize: '0.8rem', opacity: 0.7, letterSpacing: '1px', marginTop: '0.5rem' }}>Manufacturing. Accelerated.</div>
        </Link>
        
        <div style={{ marginBottom: '5rem', maxWidth: '300px' }}>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--primary-color)', margin: '0 auto 2rem' }}></div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 500, lineHeight: '1.4' }}>
            Rapid prototyping and on-demand production in as fast as 1 day.
          </h2>
        </div>
        
        <div style={{ width: '100%', marginTop: 'auto' }}>
          <p style={{ opacity: 0.7, marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>Trusted by:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', opacity: 0.8 }}>
             {['MICHELIN', 'PEPSICO', 'EPSON', 'MAHLE'].map(brand => (
               <div key={brand} style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '2px' }}>{brand}</div>
             ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Form Area */}
      <div style={{ padding: '4rem', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', alignItems: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {mode === 'signIn' ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button 
            onClick={() => setMode(mode === 'signIn' ? 'signUp' : 'signIn')}
            className="btn btn-outline" 
            style={{ padding: '0.5rem 1.5rem', borderRadius: '4px' }}
          >
            {mode === 'signIn' ? 'Sign Up' : 'Sign In'}
          </button>
        </div>

        <div style={{ maxWidth: '580px', margin: '0 auto', width: '100%' }}>
          {mode === 'signIn' ? (
            <div className="animate-fade">
              <h1 style={{ fontSize: '2rem', marginBottom: '2.5rem', fontWeight: 600 }}>Sign In</h1>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                 <div style={inputGroup}>
                    <label style={labelStyle}>Email</label>
                    <input type="email" style={inputStyle} placeholder="deepak@example.com" />
                 </div>
                 <div style={inputGroup}>
                    <label style={labelStyle}>Password</label>
                    <input type="password" style={inputStyle} />
                    <Link href="#" style={{ alignSelf: 'flex-end', fontSize: '0.85rem', color: '#999', marginTop: '0.5rem' }}>
                      Forgot password?
                    </Link>
                 </div>
                 <Link href="/dashboard" className="btn btn-primary" style={{ padding: '1rem', textAlign: 'center', fontSize: '1.1rem', width: '120px' }}>
                    Sign In
                 </Link>
              </form>
            </div>
          ) : (
            <div className="animate-fade">
              <h1 style={{ fontSize: '2rem', marginBottom: '2.5rem', fontWeight: 600 }}>Create an account to get a quote</h1>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div className="grid grid-3" style={{ gridTemplateColumns: 'minmax(80px, 1fr) 2fr 2fr' }}>
                    <div style={inputGroup}>
                       <label style={labelStyle}>Title</label>
                       <select style={inputStyle}><option>Select</option></select>
                    </div>
                    <div style={inputGroup}>
                       <label style={labelStyle}>First Name</label>
                       <input type="text" style={inputStyle} placeholder="Deepak" />
                    </div>
                    <div style={inputGroup}>
                       <label style={labelStyle}>Last Name</label>
                       <input type="text" style={inputStyle} placeholder="Dhupati" />
                    </div>
                 </div>

                 <div style={inputGroup}>
                    <label style={labelStyle}>Company</label>
                    <input type="text" style={inputStyle} />
                 </div>

                 <div style={inputGroup}>
                    <label style={labelStyle}>Country</label>
                    <select style={inputStyle}><option>India</option></select>
                 </div>

                 <div style={inputGroup}>
                    <label style={labelStyle}>Email</label>
                    <input type="email" style={inputStyle} placeholder="deepak@example.com" />
                 </div>

                 <div style={inputGroup}>
                    <label style={labelStyle}>Create your Password</label>
                    <input type="password" style={inputStyle} />
                    <div style={{ fontSize: '0.75rem', color: 'var(--success-color)', marginTop: '0.5rem' }}>
                        Password Strength: Strong
                    </div>
                 </div>

                 <div className="grid grid-2" style={{ gap: '1rem' }}>
                    <div style={inputGroup}>
                       <label style={labelStyle}>Phone Number</label>
                       <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <select style={{ ...inputStyle, width: '100px' }}><option>🇮🇳 +91</option></select>
                          <input type="text" style={inputStyle} placeholder="9999999999" />
                       </div>
                    </div>
                    <div style={inputGroup}>
                       <label style={labelStyle}>Postal Code</label>
                       <input type="text" style={inputStyle} placeholder="500084" />
                    </div>
                 </div>

                 <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                    Create Account
                 </button>
                 
                 <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '1rem' }}>
                    By clicking "Create Account", you agree to our <Link href="#" style={{ color: 'var(--primary-color)' }}>Terms of Use</Link>
                 </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const inputGroup = { display: 'flex', flexDirection: 'column', gap: '0.5rem' };
const labelStyle = { fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' };
const inputStyle = { 
  padding: '0.8rem', 
  border: '1px solid var(--border-color)', 
  borderRadius: '4px',
  backgroundColor: '#F0F4F8',
  fontSize: '1rem'
};

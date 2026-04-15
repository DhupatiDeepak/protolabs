"use client";

import React from 'react';

export default function StayConnected() {
  return (
    <div style={{ backgroundColor: '#2D3436', color: '#fff', padding: '2rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        {/* Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>Stay Connected!</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['LinkedIn', 'X', 'YouTube', 'Instagram', 'Facebook'].map(social => (
              <a key={social} href="#" style={{ 
                width: '32px', 
                height: '32px', 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '0.9rem',
                transition: '0.2s'
              }} className="social-icon">
                {social[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Signup Form */}
        <div style={{ display: 'flex', gap: '1rem', flexGrow: 1, maxWidth: '800px' }}>
          <input 
            type="email" 
            placeholder="Enter Email (required)" 
            style={{ 
              flexGrow: 1, 
              padding: '0.8rem 1rem', 
              borderRadius: '4px', 
              border: 'none',
              fontSize: '0.9rem'
            }} 
          />
          <select style={{ 
            padding: '0.8rem 1rem', 
            borderRadius: '4px', 
            border: 'none',
            fontSize: '0.9rem',
            minWidth: '200px',
            backgroundColor: '#fff'
          }}>
            <option>United States of America</option>
            <option>India</option>
            <option>United Kingdom</option>
            <option>Germany</option>
          </select>
          <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
            Get Updates
          </button>
        </div>
      </div>
      <style jsx>{`
        .social-icon:hover {
          background-color: var(--primary-color) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

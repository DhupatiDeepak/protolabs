"use client";

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [projects, setProjects] = useState<string[]>([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const services = [
    { title: '3D Printing', icon: '🖨️', id: '3dp' },
    { title: 'CNC Machining', icon: '⚙️', id: 'cnc' },
    { title: 'Injection Molding', icon: '🏗️', id: 'im' }
  ];

  const handleContinue = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    console.log(`Connecting to API at: ${apiUrl}`);
    
    try {
      const response = await fetch(`${apiUrl}/`);
      const data = await response.json();
      console.log('API Response:', data);
    } catch (error) {
      console.error('Failed to connect to API:', error);
    }

    if (newProjectName && !projects.includes(newProjectName)) {
      setProjects([...projects, newProjectName]);
      setActiveProject(newProjectName);
    }
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fff' }}>
      <Sidebar />
      
      <main style={{ flexGrow: 1, padding: '2rem', display: 'flex', flexDirection: 'column' }}>
        {/* TOP BAR / BREADCRUMBS */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #eee'
        }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Projects / <span style={{ fontWeight: 600, color: '#000' }}>{activeProject || 'My Projects'}</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Filter</button>
             <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Sort ▼</button>
             <button className="btn btn-primary" onClick={() => setIsModalOpen(true)} style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                + New Quote
             </button>
          </div>
        </div>

        <div style={{ flexGrow: 1 }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{activeProject || 'Welcome to ProDesk'}</h2>
          
          {!activeProject ? (
            <div style={{ 
              padding: '8rem 0', 
              textAlign: 'center', 
              backgroundColor: '#f9f9f9', 
              borderRadius: '20px',
              border: '2px dashed #ddd',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem'
            }}>
              <div style={{ fontSize: '3rem', opacity: 0.3 }}>📂</div>
              <div style={{ maxWidth: '400px' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>No active projects</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Create your first project to start getting instant quotes for your manufacturing needs.
                </p>
              </div>
              <button 
                className="btn btn-primary" 
                onClick={() => setIsModalOpen(true)}
                style={{ padding: '0.8rem 2rem' }}
              >
                Create First Project
              </button>
            </div>
          ) : (
            <div style={{ 
              padding: '6rem 0', 
              textAlign: 'center', 
              backgroundColor: '#f9f9f9', 
              borderRadius: '12px',
              border: '1px solid #eee',
              color: 'var(--text-secondary)'
            }}>
               Ready to upload your CAD files for <strong>{activeProject}</strong>.
            </div>
          )}
        </div>

        {/* MODAL OVERLAY */}
        {isModalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}>
            <div 
              className="animate-fade"
              style={{
                backgroundColor: '#fff',
                width: '640px',
                borderRadius: '20px',
                padding: '3rem',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
              }}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ 
                  position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '1.5rem', color: '#999', cursor: 'pointer' 
                }}
              >
                ✕
              </button>

              <h1 style={{ fontSize: '2.2rem', marginBottom: '2.5rem', color: '#1a1a1a', fontWeight: 700 }}>Start a new quote</h1>
              
              <div style={{ marginBottom: '2.5rem' }}>
                 <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.8rem' }}>
                    Project Name
                    <span style={{ marginLeft: '1rem', fontWeight: 400, opacity: 0.6 }}>Give your quote a project folder name</span>
                 </label>
                 <input 
                   type="text"
                   value={newProjectName}
                   onChange={(e) => setNewProjectName(e.target.value)}
                   placeholder="e.g. Prototype_V1, Medical_Device_Project..."
                   style={{
                      width: '100%',
                      padding: '1.2rem',
                      border: '2px solid #eee',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      backgroundColor: '#fff',
                      transition: 'border-color 0.2s',
                   }}
                 />
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#333' }}>Choose a service</h3>
                    <Link href="#" style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600 }}>Compare services</Link>
                 </div>
                 <div className="grid grid-3" style={{ gap: '1rem' }}>
                    {services.map(s => (
                      <div 
                        key={s.id}
                        onClick={() => setSelectedService(s.id)}
                        style={{
                          padding: '2rem 1rem',
                          textAlign: 'center',
                          borderRadius: '16px',
                          border: selectedService === s.id ? '2px solid var(--primary-color)' : '1px solid #eee',
                          backgroundColor: selectedService === s.id ? 'rgba(0,92,185,0.03)' : '#fff',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease-in-out',
                          boxShadow: selectedService === s.id ? '0 10px 15px -3px rgba(0,92,185,0.1)' : 'none'
                        }}
                      >
                         <div style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>{s.icon}</div>
                         <div style={{ fontSize: '0.9rem', fontWeight: 700, color: selectedService === s.id ? 'var(--primary-color)' : '#444' }}>{s.title}</div>
                      </div>
                    ))}
                 </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                 <button 
                   className="btn btn-primary" 
                   disabled={!selectedService || !newProjectName}
                   style={{ 
                     width: '100%', 
                     padding: '1.4rem', 
                     fontSize: '1.1rem', 
                     borderRadius: '12px',
                     fontWeight: 600,
                     letterSpacing: '0.5px'
                   }}
                   onClick={handleContinue}
                 >
                    Continue to CAD Upload
                 </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

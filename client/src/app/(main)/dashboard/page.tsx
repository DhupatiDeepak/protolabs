"use client";

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [currentView, setCurrentView] = useState('Home'); // Home, Quotes, Parts & Molds, Catalog, History, Profile, quote
  const [currentTab, setCurrentTab] = useState<'upload' | 'configure' | 'review'>('upload');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductionModalOpen, setIsProductionModalOpen] = useState(false);
  const [isReorderModalOpen, setIsReorderModalOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [newProjectName, setNewProjectName] = useState('Prj1');
  const [selectedService, setSelectedService] = useState('');
  const [selectedCncService, setSelectedCncService] = useState<string | null>(null);
  const [imRequirement, setImRequirement] = useState<string | null>('no');
  const [uploadedFile, setUploadedFile] = useState<{name: string, size?: number} | null>(null);
  const [quoteData, setQuoteData] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  const [quantity, setQuantity] = useState(1);
  const [isMaterialDropdownOpen, setIsMaterialDropdownOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // View specific states
  const [quotesTab, setQuotesTab] = useState<'Projects' | 'All Quotes'>('Projects');
  const [partsMainTab, setPartsMainTab] = useState<'Parts' | 'Molds'>('Parts');
  const [partsSubTab, setPartsSubTab] = useState<'Uploads' | 'Part History'>('Uploads');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userProjects, setUserProjects] = useState<any[]>([]);

  useEffect(() => {
    const userStr = localStorage.getItem('protolabs_user');
    if (!userStr) {
      router.push('/login');
      return;
    }
    const user = JSON.parse(userStr);
    setCurrentUser(user);

    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${user._id}`);
        if (response.ok) {
          const data = await response.json();
          setUserProjects(data);
        }
      } catch (err) {
        console.error("Failed to fetch projects");
      }
    };
    fetchProjects();
  }, [router]);

  const materials = [
    {
      category: 'Direct Metal Laser Sintering (DMLS)',
      options: ['Aluminum AlSi10Mg', 'Inconel 718', 'Maraging Steel 1.2709', 'Stainless Steel 316L', 'Titanium Ti-6Al-4V']
    },
    {
      category: 'Stereolithography (SLA)',
      options: ['ABS-Like Black', 'ABS-Like Gray', 'ABS-Like Translucent/Clear', 'ABS-Like White', 'Ceramic-Like (Advanced High Temp)', 'MicroFine Green', 'PC-Like Translucent (Advanced High Temp)']
    },
    {
      category: 'Advanced Photopolymers',
      options: ['EPX 82 Black (High strength) by Carbon', 'Specialty Material']
    },
    {
      category: 'Multi Jet Fusion (MJF)',
      options: ['PA 11 Black', 'PA 12 Black', 'PA 12 Flame Retardant Grey', 'PA 12 Glass Beads Black', 'Ultrasint TPU01-88A Black']
    },
    {
      category: 'Selective Laser Sintering (SLS)',
      options: ['PA 12 Carbon Filled Black', 'PA 12 Glass Filled White', 'PA 12 White', 'Specialty material', 'TPU-88A Black']
    },
    {
      category: 'PolyJet (PLY)',
      options: ['3DP Silicone (60-65%)', 'Digital Black', 'Digital Clear/Translucent']
    }
  ];

  const compareData = [
    {
      category: 'Stereolithography (SLA)',
      materials: [
        { name: 'PC-Like Translucent (Advanced High Temp)', res: ['Request', 'N/A', 'N/A', 'Request'] },
        { name: 'ABS-Like White', res: ['Request', 'N/A', 'N/A', '€3,078.13'] },
        { name: 'MicroFine™ Green', res: ['N/A', 'Request', 'N/A', 'N/A'] },
        { name: 'Ceramic-Like (Advanced High Temp)', res: ['Request', 'N/A', 'N/A', '€3,629.50'] },
        { name: 'ABS-Like Black', res: ['Request', 'N/A', 'N/A', 'Request'] },
        { name: 'ABS-Like Translucent/Clear', res: ['Request', 'N/A', 'N/A', '€3,079.24'] },
        { name: 'ABS-Like Gray', res: ['N/A', 'N/A', 'N/A', '€3,079.24'] },
      ]
    },
    {
      category: 'Direct Metal Laser Sintering (DMLS)',
      materials: [
        { name: 'Aluminum AlSi10Mg', res: ['Request', 'N/A', 'N/A', 'Request'] },
        { name: 'Inconel 718', res: ['Request', 'N/A', 'N/A', 'Request'] },
        { name: 'Stainless Steel 316L', res: ['Request', 'N/A', 'Request', 'N/A'] },
        { name: 'Titanium Ti-6Al-4V', res: ['Request', 'N/A', 'Request', 'Request'] },
        { name: 'Maraging Steel 1.2709', res: ['Request', 'N/A', 'N/A', 'Request'] },
      ]
    },
    {
      category: 'PolyJet (PLY)',
      materials: [
        { name: 'Digital Black', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'Digital Clear/Translucent', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'Digital OverMold', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'Digital White', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: '3DP Silicone (60-65%)', res: ['N/A', 'N/A', 'N/A', 'Request'] },
      ]
    },
    {
      category: 'Selective Laser Sintering (SLS)',
      materials: [
        { name: 'PA 12 White', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'PA 12 Carbon Filled Black', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'Specialty material', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'TPU-88A Black', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'PA 12 Glass Filled White', res: ['N/A', 'N/A', 'N/A', 'Request'] },
      ]
    },
    {
      category: 'Multi Jet Fusion (MJF)',
      materials: [
        { name: 'Ultrasint™ TPU01-88A Black', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'PA 11 Black', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'PA 12 Flame Retardant Grey', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'PA 12 Glass Beads Black', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'PA 12 Black', res: ['N/A', 'N/A', 'N/A', 'Request'] },
      ]
    },
    {
      category: 'Advanced Photopolymers',
      materials: [
        { name: 'EPX 82 Black (High strength) by Carbon', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'Specialty Material', res: ['N/A', 'N/A', 'N/A', 'Request'] },
        { name: 'I don\'t know what material', res: ['N/A', 'N/A', 'N/A', 'Request'] },
      ]
    }
  ];

  const services = [
    { id: '3dp', name: '3D Printing', image: '/service_3d_printing_icon_1775986714593.png' },
    { id: 'cnc', name: 'CNC Machining', image: '/service_cnc_machining_icon_1775986694749.png' },
    { id: 'im', name: 'Injection Molding', image: '/service_injection_molding_icon_1775986735770.png' }
  ];

  const isContinueEnabled = () => {
    if (!selectedProject) return false;
    if (selectedProject === 'New Project' && !newProjectName.trim()) return false;
    if (!selectedService) return false;
    if (selectedService === 'cnc' && !selectedCncService) return false;
    if (selectedService === 'im' && !imRequirement) return false;
    return true;
  };

  const handleContinue = async () => {
    setIsModalOpen(false);
    
    // Create project in DB if it's a new project
    if (selectedProject === 'New Project' && currentUser) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: currentUser._id,
            name: newProjectName,
            description: "Started via New Quote",
            manufacturing_services: [selectedService === 'cnc' ? 'CNC Machining' : selectedService === 'im' ? 'Injection Molding' : '3D Printing']
          })
        });
        // Refresh projects list
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${currentUser._id}/projects`);
        if (res.ok) setUserProjects(await res.json());
      } catch (err) {
        console.error("Failed to save project");
      }
    }
    setCurrentView('quote');
  };

  const [prodProjectName, setProdProjectName] = useState('');
  const [prodProjectDesc, setProdProjectDesc] = useState('');
  const [prodServices, setProdServices] = useState<string[]>([]);
  
  const handleCreateProductionProject = async () => {
    if (!currentUser) return;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: currentUser._id,
          name: prodProjectName || "Untitled Production Project",
          description: prodProjectDesc,
          manufacturing_services: prodServices
        })
      });
      // Refresh projects
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${currentUser._id}/projects`);
      if (res.ok) setUserProjects(await res.json());
      
      setIsProductionModalOpen(false);
      setCurrentView('Quotes');
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // ... logic remains unchanged but we don't want to replace it entirely, wait, I can just replace the layout part ...
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile({ name: file.name, size: file.size });
      setIsUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`, {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          setQuoteData(data);
        } else {
          console.error("Upload failed");
          setQuoteData({ file_id: '1167-9350-000', filename: file.name, dimensions_mm: { x: 300.99, y: 504.01, z: 281.00 } });
        }
      } catch (error) {
        console.error(error);
        setQuoteData({ file_id: '1167-9350-000', filename: file.name, dimensions_mm: { x: 300.99, y: 504.01, z: 281.00 } });
      } finally {
        setIsUploading(false);
      }
    }
  };

  if (currentView === 'quote') {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fff' }}>
        <Sidebar activeTab="" onTabChange={setCurrentView} onNewQuote={() => setIsModalOpen(true)} />
        <main style={{ flexGrow: 1, padding: '2.5rem 3.5rem', display: 'flex', flexDirection: 'column', color: '#333' }}>
          {/* Breadcrumbs */}
          <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
            <Link href="#" onClick={() => setCurrentView('Home')} style={{ color: '#666', textDecoration: 'none' }}>Projects</Link>
            <span>/</span>
            <span style={{ color: '#666' }}>{selectedProject === 'New Project' ? newProjectName : selectedProject}</span>
            <span>/</span>
            <span style={{ color: currentTab === 'configure' ? '#666' : '#999' }}>Quote {currentTab === 'configure' ? '1964-069' : ''}</span>
          </div>

          {/* Header & Tabs */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem', borderBottom: '1px solid #eaecf0', paddingBottom: '0', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.8rem', color: '#333', fontWeight: 500, margin: '0 0 0.5rem 0' }}>Quote {currentTab === 'configure' ? '1964-069' : ''}</h1>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div 
                onClick={() => setCurrentTab('upload')}
                style={{ padding: '0.8rem 1rem', color: currentTab === 'upload' ? '#0078c8' : '#a0aab2', borderBottom: currentTab === 'upload' ? '3px solid #0078c8' : '3px solid transparent', fontWeight: 500, cursor: 'pointer' }}
              >Upload</div>
              <div 
                onClick={() => { if (uploadedFile) setCurrentTab('configure'); }}
                style={{ padding: '0.8rem 1rem', color: currentTab === 'configure' ? '#0078c8' : '#a0aab2', borderBottom: currentTab === 'configure' ? '3px solid #0078c8' : '3px solid transparent', fontWeight: 500, cursor: uploadedFile ? 'pointer' : 'not-allowed' }}
              >Configure</div>
              <div style={{ padding: '0.8rem 1rem', color: '#a0aab2', borderBottom: '3px solid transparent', fontWeight: 500, cursor: 'not-allowed' }}>Review</div>
            </div>
          </div>

          {currentTab === 'upload' && (
            <>
              {/* Drag & Drop Zone */}
              <div style={{ 
                border: '1px dashed #b0c4df', 
                borderRadius: '8px', 
                padding: uploadedFile ? '2rem' : '4rem 2rem', 
                textAlign: 'center',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '2rem'
              }}>
                {!uploadedFile ? (
                  <>
                    <div style={{ width: '80px', height: '80px', backgroundColor: '#eef6fc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0078c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16.5C21 18.43 19.43 20 17.5 20h-11C4.57 20 3 18.43 3 16.5c0-1.76 1.3-3.23 3.01-3.46A6.5 6.5 0 0 1 12.5 7c2.3 0 4.3 1.2 5.5 3a4 4 0 0 1 3 6.5z"/>
                        <path d="M12 11v6"/>
                        <path d="M9 14l3-3 3 3"/>
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: '#333', fontWeight: 500, marginBottom: '1rem' }}>
                      Drag-and-drop your {services.find(s => s.id === selectedService)?.name || 'files'} files, or <label style={{ color: '#0078c8', cursor: 'pointer' }}>browse files<input type="file" style={{ display: 'none' }} onChange={handleFileUpload} accept=".stl,.stp,.step,.sldprt,.igs,.iges" /></label>
                    </h3>
                    <p style={{ color: '#667085', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                      File types: MESH (.stl), STEP (.stp/.step), SOLIDWORKS (.sldprt), IGES (.igs/.iges)
                    </p>
                    <p style={{ color: '#333', fontSize: '0.9rem', fontWeight: 500, marginBottom: '2rem' }}>
                      Maximum file size: 125 MB
                    </p>
                    <p style={{ color: '#667085', fontSize: '0.8rem', maxWidth: '800px', lineHeight: 1.6 }}>
                      By uploading files, I agree to identify any military or dual-use parts and provide all required information to Protolabs. I understand that Protolabs may be unable to fulfill my order based on applicable regulations.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 style={{ fontSize: '1rem', color: '#555', fontWeight: 500, marginBottom: '2rem' }}>
                      Drag-and-drop your {services.find(s => s.id === selectedService)?.name || 'files'} files, or <label style={{ color: '#0078c8', cursor: 'pointer' }}>browse files<input type="file" style={{ display: 'none' }} onChange={handleFileUpload} accept=".stl,.stp,.step,.sldprt,.igs,.iges" /></label>
                    </h3>
                    
                    <div style={{ position: 'relative', display: 'inline-block', border: '1px solid #eaecf0', borderRadius: '8px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', minWidth: '160px' }}>
                       <button onClick={() => setUploadedFile(null)} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: '#999' }}>✕</button>
                       <div style={{ width: '120px', height: '120px', backgroundColor: '#f4f6f8', borderRadius: '4px', margin: '0 auto 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         {/* Fallback part thumbnail */}
                         <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                       </div>
                       <div style={{ fontSize: '0.9rem', color: '#333' }}>{uploadedFile.name}</div>
                    </div>
                  </>
                )}
              </div>

              {/* Toggle & Button */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#555', fontSize: '1rem' }}>
                  Military or dual-use parts?
                  <div style={{ width: '44px', height: '24px', backgroundColor: '#eaecf0', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}></div>
                  </div>
                  <span>No</span>
                  <span style={{ color: '#a0aab2', cursor: 'pointer', fontSize: '1.1rem' }}>ⓘ</span>
                </div>

                <button 
                  disabled={!uploadedFile || isUploading}
                  onClick={() => setCurrentTab('configure')}
                  style={{ 
                    padding: '0.8rem 2.5rem', 
                    backgroundColor: uploadedFile ? '#0078c8' : '#fbfbfc', 
                    color: uploadedFile ? '#fff' : '#a0aab2', 
                    border: uploadedFile ? 'none' : '1px solid #eaecf0', 
                    borderRadius: '6px', 
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: uploadedFile ? 'pointer' : 'not-allowed'
                  }}
                >
                  {isUploading ? 'Uploading...' : (uploadedFile ? 'Continue with 1 file' : 'Continue with 0 files')}
                </button>
              </div>
            </>
          )}

          {currentTab === 'configure' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flexGrow: 1 }}>
              {/* Left Column (Configure Form) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eaecf0', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 style={{ fontSize: '1.5rem', color: '#333', fontWeight: 500 }}>Configure</h2>
                  <span style={{ fontSize: '0.9rem', color: '#555', fontWeight: 500 }}>1 selected</span>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', border: '1px solid #eaecf0', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', color: '#555', backgroundColor: '#fbfbfc', borderRight: '1px solid #eaecf0', display: 'flex', alignItems: 'center' }}>Need Help?</div>
                  <div onClick={() => setIsCompareModalOpen(true)} style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', color: '#0078c8', borderRight: '1px solid #eaecf0', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                    <span style={{ fontSize: '1.1rem' }}>⚖️</span> Compare Prices
                  </div>
                  <div style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', color: '#0078c8', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                    <span style={{ fontSize: '1.1rem' }}>📖</span> Design Guides
                  </div>
                </div>

                {/* Quantity */}
                <div style={{ border: '1px solid #eaecf0', borderRadius: '6px', padding: '0.8rem 1rem', position: 'relative' }}>
                  <label style={{ position: 'absolute', top: '-10px', left: '10px', backgroundColor: '#fff', padding: '0 0.5rem', fontSize: '0.85rem', color: '#555' }}>Quantity</label>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                    <span style={{ fontSize: '1rem', color: '#333' }}>{quantity}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', color: '#0078c8', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer', userSelect: 'none', lineHeight: '1rem' }}>
                      <span onClick={() => setQuantity(q => q + 1)}>+</span>
                      <span onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</span>
                    </div>
                  </div>
                </div>

                {/* Material */}
                <div style={{ border: isMaterialDropdownOpen ? '1px solid #0078c8' : '1px solid #eaecf0', borderRadius: '6px', padding: '0.8rem 1rem', position: 'relative', cursor: 'pointer' }}>
                  <label style={{ position: 'absolute', top: '-10px', left: '10px', backgroundColor: '#fff', padding: '0 0.5rem', fontSize: '0.85rem', color: '#555', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    Material <span style={{ color: '#999', fontSize: '0.9rem' }}>ⓘ</span>
                  </label>
                  <div onClick={() => setIsMaterialDropdownOpen(!isMaterialDropdownOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                    <span style={{ fontSize: '1rem', color: selectedMaterial ? '#333' : '#333' }}>{selectedMaterial || 'Make a selection'}</span>
                    <span style={{ color: '#0078c8', transform: isMaterialDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: '0.8rem' }}>▼</span>
                  </div>

                  {isMaterialDropdownOpen && (
                    <div style={{ position: 'absolute', top: '100%', left: '-1px', right: '-1px', backgroundColor: '#fff', border: '1px solid #eaecf0', borderTop: 'none', borderRadius: '0 0 6px 6px', marginTop: '3px', zIndex: 10, maxHeight: '350px', overflowY: 'auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                      <div style={{ padding: '0.8rem 1rem', borderBottom: '1px solid #eaecf0', color: '#555', cursor: 'pointer' }} onClick={() => {setSelectedMaterial(''); setIsMaterialDropdownOpen(false);}}>
                        I don&apos;t know what material
                      </div>
                      {materials.map((mat, index) => (
                        <div key={mat.category}>
                          <div style={{ padding: '1rem 1rem 0.5rem', fontSize: '0.95rem', fontWeight: 600, color: '#333' }}>
                            {mat.category}
                          </div>
                          {mat.options.map(opt => (
                            <div 
                              key={opt}
                              onClick={() => { setSelectedMaterial(opt); setIsMaterialDropdownOpen(false); }}
                              style={{ padding: '0.7rem 1rem', fontSize: '0.9rem', color: '#555', cursor: 'pointer', transition: 'background-color 0.1s' }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f4f6f8'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                            >
                              {opt}
                            </div>
                          ))}
                          {index < materials.length - 1 && <div style={{ margin: '0.5rem 1rem', borderBottom: '1px solid #eaecf0' }}></div>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Resolution (Disabled) */}
                <div style={{ border: '1px solid #eaecf0', borderRadius: '6px', padding: '0.8rem 1rem', position: 'relative', opacity: 0.5, cursor: 'not-allowed' }}>
                  <label style={{ position: 'absolute', top: '-10px', left: '10px', backgroundColor: '#fff', padding: '0 0.5rem', fontSize: '0.85rem', color: '#999' }}>Resolution</label>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                    <span style={{ fontSize: '1rem', color: '#999' }}>—</span>
                    <span style={{ color: '#ccc', fontSize: '0.8rem' }}>▼</span>
                  </div>
                </div>

                {/* Finish (Disabled) */}
                <div style={{ border: '1px solid #eaecf0', borderRadius: '6px', padding: '0.8rem 1rem', position: 'relative', opacity: 0.5, cursor: 'not-allowed' }}>
                  <label style={{ position: 'absolute', top: '-10px', left: '10px', backgroundColor: '#fff', padding: '0 0.5rem', fontSize: '0.85rem', color: '#999', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    Finish <span style={{ color: '#999', fontSize: '0.9rem' }}>ⓘ</span>
                  </label>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                    <span style={{ fontSize: '1rem', color: '#999' }}>—</span>
                    <span style={{ color: '#ccc', fontSize: '0.8rem' }}>▼</span>
                  </div>
                </div>

                {/* Orientation (Disabled) */}
                <div style={{ border: '1px solid #eaecf0', borderRadius: '6px', padding: '0.8rem 1rem', position: 'relative', opacity: 0.5, cursor: 'not-allowed' }}>
                  <label style={{ position: 'absolute', top: '-10px', left: '10px', backgroundColor: '#fff', padding: '0 0.5rem', fontSize: '0.85rem', color: '#999' }}>Orientation</label>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                    <span style={{ fontSize: '1rem', color: '#999' }}>—</span>
                    <span style={{ color: '#ccc', fontSize: '0.8rem' }}>▼</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ border: '1px solid #eaecf0', borderRadius: '8px 8px 0 0', backgroundColor: '#fff', flexGrow: 1 }}>
                  <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #eaecf0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', color: '#333', fontWeight: 600 }}>{services.find(s => s.id === selectedService)?.name || '3D Printing'}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button style={{ padding: '0.4rem 0.8rem', border: '1px solid #eaecf0', borderRadius: '4px', backgroundColor: '#fff', color: '#333', fontSize: '0.85rem' }}>Select All</button>
                      <button style={{ padding: '0.4rem 0.8rem', border: '1px solid #eaecf0', borderRadius: '4px', backgroundColor: '#fff', color: '#333', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>Sort <span style={{ fontSize: '0.7rem' }}>▼</span></button>
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ border: '2px solid #0078c8', borderRadius: '8px', padding: '1rem', display: 'flex', gap: '1.5rem', position: 'relative' }}>
                      <div style={{ width: '80px', height: '80px', border: '1px solid #eaecf0', borderRadius: '4px', position: 'relative', padding: '0.5rem', backgroundColor: '#fff' }}>
                         <div style={{ width: '100%', height: '100%', backgroundColor: '#f4f6f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                         </div>
                         <div style={{ position: 'absolute', top: '-6px', left: '-6px', width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #ccc', backgroundColor: '#fff' }}></div>
                      </div>
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                          <span style={{ fontSize: '1rem', color: '#333', fontWeight: 500 }}>{uploadedFile?.name || 'Manifold.stp'}</span>
                          <span style={{ fontSize: '0.9rem', color: '#666' }}>Quantity 1</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                          <span style={{ fontSize: '0.85rem', color: '#888' }}>{quoteData?.file_id || '1167-9350-000'}</span>
                          <span style={{ fontSize: '0.85rem', color: '#0078c8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>Options <span style={{ fontSize: '0.7rem' }}>▼</span></span>
                        </div>
                        <div style={{ fontSize: '0.95rem', color: '#555' }}>Configuration Required</div>
                      </div>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '1rem' }}>
                      X: {quoteData?.dimensions_mm?.x || 300.99}mm Y: {quoteData?.dimensions_mm?.y || 504.01}mm Z: {quoteData?.dimensions_mm?.z || 281.00}mm
                    </div>
                  </div>
                </div>
                
                {/* Bottom dark area */}
                <div style={{ backgroundColor: '#2b303b', padding: '1.5rem', borderRadius: '0 0 8px 8px', display: 'flex', gap: '1rem' }}>
                  <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#444c5c', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}>Request for Quote</button>
                  <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#444c5c', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}>Review Quote</button>
                </div>
              </div>
            </div>
          )}

          {/* Compare Prices Modal */}
          {isCompareModalOpen && (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
              <div style={{ backgroundColor: '#fff', borderRadius: '8px', width: '950px', maxHeight: '90vh', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                
                {/* Header */}
                <div style={{ padding: '2rem 2.5rem', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 style={{ fontSize: '1.5rem', color: '#444', fontWeight: 400, margin: 0 }}>Materials and Resolutions</h2>
                  <button onClick={() => setIsCompareModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#666' }}>✕</button>
                </div>

                {/* Table Header */}
                <div style={{ padding: '0 2.5rem', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div></div>
                  <div style={{ fontWeight: 600, color: '#333', textAlign: 'center' }}>High Res</div>
                  <div style={{ fontWeight: 600, color: '#333', textAlign: 'center' }}>Micro Res</div>
                  <div style={{ fontWeight: 600, color: '#333', textAlign: 'center' }}>Fine Res</div>
                  <div style={{ fontWeight: 600, color: '#333', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>Normal Res <span style={{ fontSize: '0.6rem', color: '#999' }}>▲</span></div>
                </div>

                {/* Content Area */}
                <div style={{ overflowY: 'auto', padding: '0 2.5rem', flexGrow: 1, paddingBottom: '1rem' }}>
                  {compareData.map(group => (
                    <div key={group.category} style={{ marginBottom: '2rem' }}>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333', marginBottom: '1rem' }}>{group.category}</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {group.materials.map(mat => (
                          <div key={mat.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ fontSize: '0.9rem', color: '#555' }}>{mat.name}</div>
                            {mat.res.map((r, i) => (
                              <div key={i} style={{ 
                                textAlign: 'center', 
                                fontSize: '0.85rem', 
                                color: r === 'N/A' || r === 'Request' ? '#b0b8c1' : '#333',
                                fontWeight: r !== 'N/A' && r !== 'Request' ? 600 : 400
                              }}>
                                {r}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div style={{ padding: '1.5rem 2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', backgroundColor: '#fff', borderRadius: '0 0 8px 8px' }}>
                  <button onClick={() => setIsCompareModalOpen(false)} style={{ padding: '0.6rem 2rem', backgroundColor: '#0078c8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }}>Done</button>
                  <span style={{ position: 'absolute', right: '2.5rem', color: '#b0b8c1', fontSize: '0.85rem' }}>Request = We need to review your part</span>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    );
  }

  const renderHomeContent = () => (
    <div style={{ padding: '2.5rem 3.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '1.8rem', color: '#546b82', fontWeight: 500, letterSpacing: '-0.5px' }}>Hello {currentUser?.first_name || ''}</h1>
        <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1rem', fontSize: '0.9rem', color: '#546b82', borderColor: '#eaecf0', backgroundColor: '#fff', borderRadius: '6px', fontWeight: 500 }}>
            <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>🎧</span> Support Center
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '3.5rem' }}>
        <div 
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: 'pointer', backgroundColor: '#fff', borderRadius: '6px', padding: '1.8rem', border: '1px solid #eaecf0', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
        >
          <div style={{ backgroundColor: '#eef6fc', borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
              🚀
          </div>
          <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: '#2a3b4c', fontWeight: 500 }}>Get a new quote</h3>
              <p style={{ color: '#667085', fontSize: '0.9rem', lineHeight: 1.6 }}>Upload your CAD files for our CNC, IM, 3DP, and sheet metal services</p>
          </div>
        </div>

        <div 
          onClick={() => setIsProductionModalOpen(true)}
          style={{ cursor: 'pointer', backgroundColor: '#fff', borderRadius: '6px', padding: '1.8rem', border: '1px solid #eaecf0', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
        >
          <div style={{ backgroundColor: '#eef6fc', borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
              💬
          </div>
          <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: '#2a3b4c', fontWeight: 500 }}>Start a production project</h3>
              <p style={{ color: '#667085', fontSize: '0.9rem', lineHeight: 1.6 }}>Provide your project details and discuss with our production team</p>
          </div>
        </div>

        <div 
          onClick={() => setIsReorderModalOpen(true)}
          style={{ cursor: 'pointer', backgroundColor: '#fff', borderRadius: '6px', padding: '1.8rem', border: '1px solid #eaecf0', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
        >
          <div style={{ backgroundColor: '#eef6fc', borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
              🔄
          </div>
          <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: '#2a3b4c', fontWeight: 500 }}>Find parts to reorder</h3>
              <p style={{ color: '#667085', fontSize: '0.9rem', lineHeight: 1.6 }}>Find and reorder from parts and molds from past orders</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#546b82', marginBottom: '1.2rem', fontWeight: 500 }}>Recent Activity</h2>
        <div style={{ backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '6px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #eaecf0', backgroundColor: '#fafbfc' }}>
                    <th style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: '#546b82', fontSize: '0.85rem' }}>Date Created</th>
                    <th style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: '#546b82', fontSize: '0.85rem' }}>Quote/Order</th>
                    <th style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: '#546b82', fontSize: '0.85rem' }}>Project Name</th>
                    <th style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: '#546b82', fontSize: '0.85rem' }}>Service</th>
                    <th style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: '#546b82', fontSize: '0.85rem' }}>Parts</th>
                    <th style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: '#546b82', fontSize: '0.85rem' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {userProjects.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#667085' }}>No recent activity.</td>
                  </tr>
                ) : (
                  userProjects.map((proj, idx) => (
                    <tr key={proj._id} style={{ borderBottom: '1px solid #eaecf0', cursor: 'pointer', ...({ ':hover': { backgroundColor: '#fafbfc' } } as any) }} onClick={() => { setSelectedProject(proj.name); setCurrentView('quote'); }}>
                        <td style={{ padding: '1.2rem 1.5rem', color: '#667085', fontSize: '0.9rem' }}>{new Date(proj.created_at).toLocaleDateString()}</td>
                        <td style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem' }}><span style={{ color: '#0078c8', textDecoration: 'none' }}>{proj._id.slice(-6)}</span></td>
                        <td style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem' }}><span style={{ color: '#0078c8', textDecoration: 'none' }}>{proj.name}</span></td>
                        <td style={{ padding: '1.2rem 1.5rem', color: '#667085', fontSize: '0.9rem' }}>{proj.manufacturing_services[0] || 'TBD'}</td>
                        <td style={{ padding: '1.2rem 1.5rem', color: '#667085', fontSize: '0.9rem' }}>1</td>
                        <td style={{ padding: '1.2rem 1.5rem', color: '#667085', fontSize: '0.9rem' }}>Active Project</td>
                    </tr>
                  ))
                )}
              </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '1.3rem', color: '#546b82', marginBottom: '1.2rem', fontWeight: 500 }}>Explore</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '6px', padding: '1.8rem', display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem', color: '#2a3b4c', fontWeight: 500 }}>ProDesk by Protolabs</h3>
                <p style={{ color: '#667085', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    ProDesk is an AI-enabled digital manufacturing platform designed to accelerate your prototyping and production projects from start to finish.
                </p>
                <Link href="#" style={{ color: '#0078c8', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', marginTop: 'auto' }}>Learn more</Link>
              </div>
              <div style={{ width: '240px', height: '160px', position: 'relative', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/prodesk_bg.png" alt="ProDesk Background" fill sizes="240px" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(41, 49, 58, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '1px', display: 'flex', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                      <span style={{ color: '#65b2e8' }}>PRO</span>
                      <span style={{ color: '#e0e4e8' }}>DESK™</span>
                  </span>
                </div>
              </div>
          </div>
          <div style={{ backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '6px', padding: '1.8rem', display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem', color: '#2a3b4c', fontWeight: 500 }}>Manufacture like a <span style={{ color: '#65b2e8' }}>PRO</span></h3>
                <p style={{ color: '#667085', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    Protolabs is your single resource from prototyping to production. Team up with our manufacturing experts and get to market faster than ever before.
                </p>
                <Link href="#" style={{ color: '#0078c8', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', marginTop: 'auto' }}>Learn more</Link>
              </div>
              <div style={{ width: '240px', height: '160px', position: 'relative', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/manufacture_hero.png" alt="Manufacture like a PRO" fill sizes="50vw" priority style={{ objectFit: 'cover' }} />
              </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuotesContent = () => (
    <div style={{ padding: '2.5rem 3.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', border: '1px solid #eaecf0', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#fff' }}>
          <button onClick={() => setQuotesTab('Projects')} style={{ padding: '0.6rem 1.5rem', backgroundColor: quotesTab === 'Projects' ? '#fff' : '#f8f9fb', color: quotesTab === 'Projects' ? '#0078c8' : '#555', border: 'none', borderRight: '1px solid #eaecf0', fontWeight: quotesTab === 'Projects' ? 500 : 400, cursor: 'pointer' }}>Projects</button>
          <button onClick={() => setQuotesTab('All Quotes')} style={{ padding: '0.6rem 1.5rem', backgroundColor: quotesTab === 'All Quotes' ? '#fff' : '#f8f9fb', color: quotesTab === 'All Quotes' ? '#0078c8' : '#555', border: 'none', fontWeight: quotesTab === 'All Quotes' ? 500 : 400, cursor: 'pointer' }}>All Quotes</button>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>🔍</span>
            <input type="text" style={{ padding: '0.6rem 1rem 0.6rem 2.2rem', width: '300px', border: '1px solid #eaecf0', borderRadius: '4px', outline: 'none' }} />
          </div>
          <button style={{ padding: '0.6rem 1.5rem', backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '4px', cursor: 'pointer', color: '#555' }}>Filter</button>
          <button onClick={() => setIsModalOpen(true)} style={{ padding: '0.6rem 1.5rem', backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '4px', cursor: 'pointer', color: '#555', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>+</span> New Project</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {userProjects.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', padding: '3rem', textAlign: 'center', backgroundColor: '#fff', border: '1px dashed #ccc', borderRadius: '8px', color: '#666' }}>
            No projects found. Create one to get started!
          </div>
        ) : (
          userProjects.map((proj) => (
            <div 
              key={proj._id} 
              style={{ backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '4px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', cursor: 'pointer', transition: 'box-shadow 0.2s', ...({ ':hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.05)' } } as any) }}
              onClick={() => { setSelectedProject(proj.name); setCurrentView('quote'); }}
            >
              <button style={{ position: 'absolute', right: '1rem', top: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: '#555' }} onClick={(e) => e.stopPropagation()}>⋮</button>
              <h3 style={{ fontSize: '1.1rem', color: '#333', fontWeight: 500, marginBottom: '2rem' }}>{proj.name}</h3>
              <div style={{ width: '80px', height: '80px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#eef6fc', position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: '-5px', left: '-5px', right: '-5px', height: '15px', backgroundColor: '#0078c8', clipPath: 'polygon(0 50%, 50% 100%, 100% 50%, 100% 100%, 0 100%)' }}></div>
                  <div style={{ position: 'absolute', top: '-15px', left: '18px', width: '4px', height: '20px', backgroundColor: '#333' }}></div>
                  <div style={{ position: 'absolute', top: '-15px', left: '10px', right: '10px', height: '8px', backgroundColor: '#333', clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}></div>
                </div>
              </div>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>{new Date(proj.created_at).toLocaleDateString()}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const renderPartsContent = () => (
    <div style={{ padding: '2.5rem 3.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', border: '1px solid #eaecf0', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#fff' }}>
          <button onClick={() => setPartsMainTab('Parts')} style={{ padding: '0.6rem 1.5rem', backgroundColor: partsMainTab === 'Parts' ? '#fff' : '#f8f9fb', color: partsMainTab === 'Parts' ? '#0078c8' : '#555', border: 'none', borderRight: '1px solid #eaecf0', fontWeight: partsMainTab === 'Parts' ? 500 : 400, cursor: 'pointer' }}>Parts</button>
          <button onClick={() => setPartsMainTab('Molds')} style={{ padding: '0.6rem 1.5rem', backgroundColor: partsMainTab === 'Molds' ? '#fff' : '#f8f9fb', color: partsMainTab === 'Molds' ? '#0078c8' : '#555', border: 'none', fontWeight: partsMainTab === 'Molds' ? 500 : 400, cursor: 'pointer' }}>Molds</button>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>🔍</span>
            <input type="text" style={{ padding: '0.6rem 1rem 0.6rem 2.2rem', width: '300px', border: '1px solid #eaecf0', borderRadius: '4px', outline: 'none' }} />
          </div>
          <button style={{ padding: '0.6rem 1.5rem', backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '4px', cursor: 'pointer', color: '#555' }}>Filter</button>
          <button style={{ padding: '0.6rem 1.5rem', backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '4px', cursor: 'pointer', color: '#555', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Sort <span>▼</span></button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #eaecf0' }}>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
          <span style={{ color: '#555' }}>View by:</span>
          <span onClick={() => setPartsSubTab('Uploads')} style={{ color: partsSubTab === 'Uploads' ? '#0078c8' : '#555', fontWeight: partsSubTab === 'Uploads' ? 500 : 400, cursor: 'pointer', borderBottom: partsSubTab === 'Uploads' ? '2px solid #0078c8' : 'none', paddingBottom: '0.5rem', marginBottom: '-0.5rem' }}>Uploads</span>
          <span onClick={() => setPartsSubTab('Part History')} style={{ color: partsSubTab === 'Part History' ? '#0078c8' : '#555', fontWeight: partsSubTab === 'Part History' ? 500 : 400, cursor: 'pointer', borderBottom: partsSubTab === 'Part History' ? '2px solid #0078c8' : 'none', paddingBottom: '0.5rem', marginBottom: '-0.5rem' }}>Part History</span>
        </div>
        <div style={{ fontSize: '0.9rem', color: '#555' }}>2 Results</div>
      </div>

      <div style={{ backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>
          No parts uploaded yet. Start a new quote to upload CAD files.
        </div>
      </div>
    </div>
  );

  const renderCatalogContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f8f9fb' }}>
      <div style={{ padding: '1rem 3.5rem', borderBottom: '1px solid #eaecf0', backgroundColor: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#555' }}>
        <span>Production Catalog</span> <span style={{ color: '#ccc' }}>/</span> <span>All Production Parts</span>
      </div>
      <div style={{ padding: '2.5rem 3.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333', fontWeight: 400, margin: '0 0 4rem 0' }}>All Production Parts</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '4rem' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: '2rem', color: '#555' }}>🔖</span>
          </div>
          <h3 style={{ fontSize: '1.8rem', color: '#333', fontWeight: 400, marginBottom: '1rem' }}>Welcome to your Production Catalog</h3>
          <p style={{ color: '#666', fontSize: '1rem', marginBottom: '2rem' }}>Done prototyping? Parts and molds that you catalog for production will appear here</p>
          <button style={{ padding: '0.8rem 2rem', backgroundColor: '#0078c8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', marginBottom: '1.5rem' }}>Add a Part to Your Catalog</button>
          <a href="#" style={{ color: '#0078c8', textDecoration: 'none', fontSize: '0.9rem' }}>Learn about the Production Catalog</a>
        </div>
      </div>
    </div>
  );

  const renderHistoryContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f8f9fb' }}>
      <div style={{ padding: '2.5rem 3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#555', fontWeight: 400, margin: 0 }}>Order History</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ padding: '0.6rem 1rem', backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '4px', cursor: 'pointer', color: '#555', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>All orders <span style={{ fontSize: '0.7rem' }}>▼</span></button>
          <button style={{ padding: '0.6rem 1rem', backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '4px', cursor: 'pointer', color: '#555', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>All time <span style={{ fontSize: '0.7rem' }}>▼</span></button>
          <div style={{ display: 'flex', border: '1px solid #eaecf0', borderRadius: '4px', backgroundColor: '#fff', overflow: 'hidden' }}>
            <div style={{ padding: '0.6rem 1rem', borderRight: '1px solid #eaecf0', color: '#555', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>Part Name <span style={{ fontSize: '0.7rem' }}>▼</span></div>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>🔍</span>
              <input type="text" style={{ padding: '0.6rem 1rem 0.6rem 2.2rem', width: '200px', border: 'none', outline: 'none' }} />
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-4rem' }}>
        <h3 style={{ fontSize: '2rem', color: '#555', fontWeight: 400, marginBottom: '2rem' }}>You don&apos;t have any orders</h3>
        <button onClick={() => setCurrentView('Quotes')} style={{ padding: '0.8rem 2rem', backgroundColor: '#0078c8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }}>Go to My Projects</button>
      </div>
    </div>
  );

  const renderProfileContent = () => (
    <div style={{ padding: '2.5rem 3.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.8rem', color: '#333', fontWeight: 400 }}>{currentUser?.first_name} {currentUser?.last_name}</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ padding: '0.6rem 1rem', color: '#0078c8', borderBottom: '3px solid #0078c8', fontWeight: 500, cursor: 'pointer' }}>Profile</div>
          <div style={{ padding: '0.6rem 1rem', color: '#666', borderBottom: '3px solid transparent', cursor: 'pointer' }}>Security</div>
          <div style={{ padding: '0.6rem 1rem', color: '#666', borderBottom: '3px solid transparent', cursor: 'pointer' }}>Team</div>
          <div style={{ padding: '0.6rem 1rem', color: '#666', borderBottom: '3px solid transparent', cursor: 'pointer' }}>Billing</div>
          <div style={{ padding: '0.6rem 1rem', color: '#666', borderBottom: '3px solid transparent', cursor: 'pointer' }}>Addresses</div>
          <div style={{ padding: '0.6rem 1rem', color: '#666', borderBottom: '3px solid transparent', cursor: 'pointer' }}>Carriers</div>
          <div style={{ padding: '0.6rem 1rem', color: '#666', borderBottom: '3px solid transparent', cursor: 'pointer' }}>Materials</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Profile Form */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #eaecf0', borderRadius: '8px', padding: '2rem', width: '600px' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#333', fontWeight: 500, margin: '0 0 2rem 0' }}>Profile Details</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ border: '1px solid #eaecf0', borderRadius: '4px', padding: '0.5rem 1rem', position: 'relative' }}>
              <label style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#fff', padding: '0 5px', fontSize: '0.8rem', color: '#666' }}>Title</label>
              <input type="text" defaultValue={currentUser?.title || ''} style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#333' }} />
            </div>
            <div style={{ border: '1px solid #eaecf0', borderRadius: '4px', padding: '0.5rem 1rem', position: 'relative' }}>
              <label style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#fff', padding: '0 5px', fontSize: '0.8rem', color: '#666' }}>First Name</label>
              <input type="text" defaultValue={currentUser?.first_name || ''} style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#333' }} />
            </div>
            <div style={{ border: '1px solid #eaecf0', borderRadius: '4px', padding: '0.5rem 1rem', position: 'relative' }}>
              <label style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#fff', padding: '0 5px', fontSize: '0.8rem', color: '#666' }}>Last Name</label>
              <input type="text" defaultValue={currentUser?.last_name || ''} style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#333' }} />
            </div>
          </div>

          <div style={{ border: '1px solid #eaecf0', borderRadius: '4px', padding: '0.5rem 1rem', position: 'relative', marginBottom: '0.5rem', backgroundColor: '#fbfbfc' }}>
            <label style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#fbfbfc', padding: '0 5px', fontSize: '0.8rem', color: '#999' }}>Email Address</label>
            <input type="text" defaultValue={currentUser?.email || ''} readOnly style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#999', backgroundColor: 'transparent' }} />
          </div>
          <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
            <a href="#" style={{ color: '#0078c8', textDecoration: 'none', fontSize: '0.85rem' }}>Contact us to change your email</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ border: '1px solid #eaecf0', borderRadius: '4px', padding: '0.5rem 1rem', position: 'relative' }}>
              <label style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#fff', padding: '0 5px', fontSize: '0.8rem', color: '#666' }}>Company</label>
              <input type="text" defaultValue={currentUser?.company || ''} style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#333' }} />
            </div>

            <div style={{ border: '1px solid #eaecf0', borderRadius: '4px', padding: '0.5rem 1rem', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#fff', padding: '0 5px', fontSize: '0.8rem', color: '#666' }}>Country</label>
              <span style={{ fontSize: '1rem', color: '#333' }}>{currentUser?.country || 'India'}</span>
              <span style={{ color: '#0078c8', fontSize: '0.8rem' }}>▼</span>
            </div>

            <div style={{ border: '1px solid #eaecf0', borderRadius: '4px', padding: '0.5rem 1rem', position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#fff', padding: '0 5px', fontSize: '0.8rem', color: '#666' }}>Phone Number</label>
              <span style={{ fontSize: '1rem' }}>🇮🇳 <span style={{ fontSize: '0.7rem', color: '#666' }}>▼</span></span>
              <input type="text" defaultValue={currentUser?.phone_number || ''} style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#333' }} />
            </div>

            <div style={{ border: '1px solid #eaecf0', borderRadius: '4px', padding: '0.5rem 1rem', position: 'relative' }}>
              <label style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#fff', padding: '0 5px', fontSize: '0.8rem', color: '#666' }}>Postal Code</label>
              <input type="text" defaultValue={currentUser?.postal_code || ''} style={{ width: '100%', border: 'none', outline: 'none', fontSize: '1rem', color: '#333' }} />
            </div>

            <div style={{ border: '1px solid #eaecf0', borderRadius: '4px', padding: '0.5rem 1rem', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ position: 'absolute', top: '-8px', left: '10px', backgroundColor: '#fff', padding: '0 5px', fontSize: '0.8rem', color: '#666' }}>Language</label>
              <span style={{ fontSize: '1rem', color: '#333' }}>English (US)</span>
              <span style={{ color: '#0078c8', fontSize: '0.8rem' }}>▼</span>
            </div>
          </div>

          <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
            Default Export Controls to: None <a href="#" style={{ color: '#0078c8', textDecoration: 'none' }}>(Change)</a>
          </div>
        </div>
        
        {/* Empty space for other side */}
        <div style={{ flexGrow: 1 }}></div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'Home': return renderHomeContent();
      case 'Quotes': return renderQuotesContent();
      case 'Parts & Molds': return renderPartsContent();
      case 'Production Catalog': return renderCatalogContent();
      case 'Order History': return renderHistoryContent();
      case 'Profile & Settings': return renderProfileContent();
      default: return renderHomeContent();
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f0f2f5', backgroundImage: 'radial-gradient(at 0% 0%, rgba(101, 178, 232, 0.05) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 120, 200, 0.05) 0px, transparent 50%)' }}>
      <Sidebar activeTab={currentView} onTabChange={setCurrentView} onNewQuote={() => setIsModalOpen(true)} />
      
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', color: '#333', overflowY: 'auto', position: 'relative' }}>
        {renderContent()}

        {/* Modal Overlay */}
        {isModalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(2px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              width: '640px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2.5rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              position: 'relative'
            }}>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#666' }}
              >
                ✕
              </button>

              <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '2rem', fontWeight: 500 }}>Start a new quote</h2>

              {/* Select Project */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'flex-end' }}>
                  <label style={{ fontSize: '0.95rem', color: '#333', fontWeight: 500 }}>Select project</label>
                  <span style={{ fontSize: '0.85rem', color: '#888' }}>Projects are folders to keep quotes organized</span>
                </div>
                
                <div style={{ position: 'relative' }}>
                  <div 
                    onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}
                    style={{ 
                      border: '1px solid #eaecf0', 
                      borderRadius: '6px', 
                      padding: '1rem 1rem', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      cursor: 'pointer',
                      backgroundColor: '#fff'
                    }}
                  >
                    <span style={{ color: selectedProject ? '#333' : '#888' }}>
                      {selectedProject === 'New Project' ? '+ Create a New Project' : (selectedProject || 'Create or select a project')}
                    </span>
                    <span style={{ color: '#0078c8', transform: isProjectDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: '0.8rem' }}>▼</span>
                  </div>

                  {isProjectDropdownOpen && (
                    <div style={{ 
                      position: 'absolute', 
                      top: '100%', 
                      left: 0, 
                      width: '100%', 
                      backgroundColor: '#fff', 
                      border: '1px solid #eaecf0', 
                      borderRadius: '6px', 
                      marginTop: '0.4rem', 
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      zIndex: 10
                    }}>
                      <div 
                        style={{ padding: '1rem 1rem', borderBottom: '1px solid #eaecf0', cursor: 'pointer', color: '#333' }}
                        onClick={() => { setSelectedProject('New Project'); setIsProjectDropdownOpen(false); }}
                      >
                        + Create a New Project
                      </div>
                      <div style={{ padding: '1rem 1rem', color: '#888', fontSize: '0.85rem' }}>
                        Or, select a current project:
                      </div>
                      {userProjects.map(proj => (
                        <div 
                          key={proj._id}
                          style={{ padding: '0.8rem 1rem', cursor: 'pointer', color: '#333' }}
                          onClick={() => { setSelectedProject(proj.name); setIsProjectDropdownOpen(false); }}
                        >
                          {proj.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Name your project (conditional) */}
                {selectedProject === 'New Project' && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <label style={{ fontSize: '0.95rem', color: '#333', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>Name your project</label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        value={newProjectName} 
                        onChange={(e) => {
                          if (e.target.value.length <= 40) setNewProjectName(e.target.value);
                        }}
                        style={{ 
                          width: '100%', 
                          padding: '1rem', 
                          border: '1px solid #eaecf0', 
                          borderRadius: '6px', 
                          fontSize: '1rem',
                          color: '#333',
                          outline: 'none'
                        }} 
                      />
                      <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#999', fontSize: '0.9rem' }}>
                        {newProjectName.length} / 40
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Choose Service */}
              <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ fontSize: '0.95rem', color: '#333', fontWeight: 500, display: 'block', marginBottom: '1rem' }}>Choose a service</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {services.map(service => (
                    <div 
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service.id);
                        setSelectedCncService(null); // clear sub-selection
                      }}
                      style={{ 
                        flex: 1, 
                        border: selectedService === service.id ? '2px solid #0078c8' : '1px solid #eaecf0', 
                        borderRadius: '6px', 
                        padding: '1.5rem 0.5rem', 
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: '#fff',
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ width: '48px', height: '48px', margin: '0 auto 0.8rem', position: 'relative' }}>
                        <Image src={service.image} alt={service.name} fill sizes="48px" style={{ objectFit: 'contain' }} />
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500, color: selectedService === service.id ? '#0078c8' : '#888' }}>{service.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditional sections based on chosen service */}
              {selectedService === 'cnc' && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                    <label style={{ fontSize: '0.95rem', color: '#333', fontWeight: 500 }}>Select a CNC machining service</label>
                    <Link href="#" style={{ color: '#0078c8', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      More about our CNC capabilities <span style={{ fontSize: '1.1rem' }}>↗</span>
                    </Link>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {/* Protolabs Card */}
                    <div 
                      onClick={() => setSelectedCncService('protolabs')}
                      style={{ flex: 1, padding: '2rem 1.5rem', border: selectedCncService === 'protolabs' ? '2px solid #0078c8' : '1px solid #eaecf0', borderRadius: '6px', cursor: 'pointer', textAlign: 'center', backgroundColor: '#fff' }}
                    >
                      <h4 style={{ fontSize: '0.95rem', color: '#333', fontWeight: 500, marginBottom: '0.8rem' }}>Protolabs</h4>
                      <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>Great for fast and reliable low-volume prototyping in as fast as 1 day</p>
                    </div>
                    {/* Network Card */}
                    <div 
                      onClick={() => setSelectedCncService('network')}
                      style={{ flex: 1, padding: '2rem 1.5rem', border: selectedCncService === 'network' ? '2px solid #0078c8' : '1px solid #eaecf0', borderRadius: '6px', cursor: 'pointer', textAlign: 'center', backgroundColor: '#fff' }}
                    >
                      <h4 style={{ fontSize: '0.95rem', color: '#333', fontWeight: 500, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                        Protolabs Network <span style={{ fontSize: '1.1rem' }}>↗</span>
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>Great for economic prices at scale with near unlimited capabilities in as fast as 9 days</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedService === 'im' && (
                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                  <label style={{ fontSize: '0.95rem', color: '#333', fontWeight: 500, display: 'block', marginBottom: '1.2rem' }}>Does your part require overmolding or inserts?</label>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    {['Overmolding', 'Insert', 'No'].map((opt) => {
                       const val = opt.toLowerCase();
                       return (
                         <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: '#555' }}>
                           <div 
                             onClick={() => setImRequirement(val)}
                             style={{ 
                               width: '18px', height: '18px', borderRadius: '50%', border: `2px solid ${imRequirement === val ? '#0078c8' : '#ccc'}`,
                               display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px'
                             }}
                           >
                             {imRequirement === val && <div style={{ width: '10px', height: '10px', backgroundColor: '#0078c8', borderRadius: '50%' }}></div>}
                           </div>
                           <span onClick={() => setImRequirement(val)}>{opt}</span>
                         </label>
                       );
                    })}
                  </div>
                </div>
              )}

              {/* Continue Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button 
                  onClick={handleContinue}
                  disabled={!isContinueEnabled()}
                  style={{ 
                    padding: '0.8rem 1.5rem', 
                    backgroundColor: isContinueEnabled() ? '#0078c8' : '#fbfbfc', 
                    color: isContinueEnabled() ? '#fff' : '#a0aab2', 
                    border: isContinueEnabled() ? 'none' : '1px solid #eaecf0', 
                    borderRadius: '6px', 
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: isContinueEnabled() ? 'pointer' : 'not-allowed',
                    transition: 'all 0.2s'
                  }}
                >
                  Continue to CAD Upload
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Production Modal Overlay */}
        {isProductionModalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', width: '640px', padding: '2.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
              <button onClick={() => setIsProductionModalOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#666' }}>✕</button>
              <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '0.5rem', fontWeight: 400 }}>Start a Production Project</h2>
              <p style={{ color: '#666', marginBottom: '2rem', fontSize: '0.95rem' }}>We can tailor our capabilities to optimize your cost, quantity, and quality control.</p>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#333', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>Project Name</label>
                <div style={{ position: 'relative' }}>
                  <input type="text" placeholder="What do you call this project?" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid #eaecf0', borderRadius: '4px', fontSize: '0.95rem', outline: 'none' }} />
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#999', fontSize: '0.85rem' }}>0 / 100</span>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#333', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>Project Description</label>
                <div style={{ position: 'relative' }}>
                  <textarea placeholder="Describe your project" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid #eaecf0', borderRadius: '4px', fontSize: '0.95rem', outline: 'none', minHeight: '80px', resize: 'vertical' }} />
                  <span style={{ position: 'absolute', right: '1rem', bottom: '1rem', color: '#999', fontSize: '0.85rem' }}>0 / 255</span>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#333', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>What manufacturing service?</label>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#555' }}>
                  {['3D Printing', 'CNC Machining', 'Injection Molding', 'Sheet Metal', 'Decide Later'].map(s => (
                    <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                      <input type="checkbox" style={{ cursor: 'pointer' }} /> {s}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#333', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>Are these parts subject to ITAR or other export restrictions?</label>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#555' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}><input type="radio" name="itar" /> Yes</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}><input type="radio" name="itar" /> No</label>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#fff', color: '#0078c8', border: '1px solid #0078c8', borderRadius: '4px', fontSize: '0.95rem', fontWeight: 500, cursor: 'pointer' }}>Explore Our Production Capabilities</button>
                <button onClick={() => setIsProductionModalOpen(false)} style={{ padding: '0.8rem 1.5rem', backgroundColor: '#0078c8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.95rem', fontWeight: 500, cursor: 'pointer' }}>Send to Our Team</button>
              </div>
            </div>
          </div>
        )}

        {/* Reorder Modal Overlay */}
        {isReorderModalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', width: '700px', padding: '2.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
              <button onClick={() => setIsReorderModalOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#666' }}>✕</button>
              <h2 style={{ fontSize: '1.8rem', color: '#555', marginBottom: '2rem', fontWeight: 400 }}>Find parts to reorder</h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ border: '1px solid #0078c8', borderRadius: '6px', padding: '2rem 1.5rem', textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ fontSize: '1.5rem', color: '#0078c8', marginBottom: '1rem' }}>🔖</div>
                  <h4 style={{ fontSize: '1rem', color: '#333', fontWeight: 500, marginBottom: '0.5rem' }}>Production Catalog</h4>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.4 }}>Build a quote from your production catalog</p>
                </div>
                <div style={{ border: '1px solid #eaecf0', borderRadius: '6px', padding: '2rem 1.5rem', textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ fontSize: '1.5rem', color: '#0078c8', marginBottom: '1rem' }}>🕒</div>
                  <h4 style={{ fontSize: '1rem', color: '#333', fontWeight: 500, marginBottom: '0.5rem' }}>Order History</h4>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.4 }}>Reorder from one of your previously placed orders</p>
                </div>
                <div style={{ border: '1px solid #eaecf0', borderRadius: '6px', padding: '2rem 1.5rem', textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ fontSize: '1.5rem', color: '#0078c8', marginBottom: '1rem' }}>💳</div>
                  <h4 style={{ fontSize: '1rem', color: '#333', fontWeight: 500, marginBottom: '0.5rem' }}>Part History</h4>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.4 }}>Start from a detailed list of previously quoted parts</p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setIsReorderModalOpen(false)} style={{ padding: '0.8rem 2rem', backgroundColor: '#fbfbfc', color: '#a0aab2', border: '1px solid #eaecf0', borderRadius: '4px', fontSize: '0.95rem', fontWeight: 500, cursor: 'not-allowed' }}>Continue</button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

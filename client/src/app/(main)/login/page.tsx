"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn');
  
  const [formData, setFormData] = useState({
    title: '',
    first_name: '',
    last_name: '',
    company: '',
    country: 'India',
    email: '',
    password: '',
    phone_number: '',
    postal_code: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { text: '', color: 'transparent' };
    if (pwd.length < 6) return { text: 'Weak', color: '#e86a4e' };
    if (pwd.length >= 8 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) return { text: 'Strong', color: 'var(--success-color)' };
    return { text: 'Medium', color: '#ffc107' };
  };

  const strength = getPasswordStrength(formData.password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Login failed');
      }

      localStorage.setItem('protolabs_user', JSON.stringify(data.user));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Registration failed');
      }

      // Instead of auto-login, switch to Sign In mode so user can log in themselves
      setMode('signIn');
      // Keeping password in formData so it pre-fills the sign in page
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
          
          {error && <div style={{ padding: '1rem', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '4px', marginBottom: '1.5rem' }}>{error}</div>}

          {mode === 'signIn' ? (
            <div className="animate-fade">
              <h1 style={{ fontSize: '2rem', marginBottom: '2.5rem', fontWeight: 600 }}>Sign In</h1>
              <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                 <div style={inputGroup}>
                    <label style={labelStyle}>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="deepak@example.com" />
                 </div>
                 <div style={inputGroup}>
                    <label style={labelStyle}>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required style={inputStyle} />
                    <Link href="#" style={{ alignSelf: 'flex-end', fontSize: '0.85rem', color: '#999', marginTop: '0.5rem' }}>
                      Forgot password?
                    </Link>
                 </div>
                 <button type="submit" disabled={isLoading} className="btn btn-primary" style={{ padding: '1rem', textAlign: 'center', fontSize: '1.1rem', width: '120px', cursor: isLoading ? 'not-allowed' : 'pointer' }}>
                    {isLoading ? 'Wait...' : 'Sign In'}
                 </button>
              </form>
            </div>
          ) : (
            <div className="animate-fade">
              <h1 style={{ fontSize: '2rem', marginBottom: '2.5rem', fontWeight: 600 }}>Create an account to get a quote</h1>
              <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div className="grid grid-3" style={{ gridTemplateColumns: 'minmax(80px, 1fr) 2fr 2fr' }}>
                    <div style={inputGroup}>
                       <label style={labelStyle}>Title</label>
                       <select name="title" value={formData.title} onChange={handleChange} style={inputStyle}>
                         <option value="">Select</option>
                         <option value="Mr.">Mr.</option>
                         <option value="Ms.">Ms.</option>
                         <option value="Mrs.">Mrs.</option>
                       </select>
                    </div>
                    <div style={inputGroup}>
                       <label style={labelStyle}>First Name</label>
                       <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required style={inputStyle} placeholder="Deepak" />
                    </div>
                    <div style={inputGroup}>
                       <label style={labelStyle}>Last Name</label>
                       <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required style={inputStyle} placeholder="Dhupati" />
                    </div>
                 </div>

                 <div style={inputGroup}>
                    <label style={labelStyle}>Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} style={inputStyle} />
                 </div>

                 <div style={inputGroup}>
                    <label style={labelStyle}>Country</label>
                    <select name="country" value={formData.country} onChange={handleChange} style={inputStyle}>
                      <option value="India">India</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                 </div>

                 <div style={inputGroup}>
                    <label style={labelStyle}>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="deepak@example.com" />
                 </div>

                 <div style={inputGroup}>
                    <label style={labelStyle}>Create your Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required style={inputStyle} />
                    <div style={{ fontSize: '0.75rem', color: strength.color, marginTop: '0.5rem', minHeight: '1rem', fontWeight: 500 }}>
                        {strength.text ? `Password Strength: ${strength.text}` : ''}
                    </div>
                 </div>

                 <div className="grid grid-2" style={{ gap: '1rem' }}>
                    <div style={inputGroup}>
                       <label style={labelStyle}>Phone Number</label>
                       <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <select style={{ ...inputStyle, width: '100px' }}><option>🇮🇳 +91</option></select>
                          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} style={{ ...inputStyle, flex: 1 }} placeholder="9999999999" />
                       </div>
                    </div>
                    <div style={inputGroup}>
                       <label style={labelStyle}>Postal Code</label>
                       <input type="text" name="postal_code" value={formData.postal_code} onChange={handleChange} style={inputStyle} placeholder="500084" />
                    </div>
                 </div>

                 <button type="submit" disabled={isLoading} className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', cursor: isLoading ? 'not-allowed' : 'pointer' }}>
                    {isLoading ? 'Wait...' : 'Create Account'}
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

const inputGroup = { display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' };
const labelStyle = { fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' };
const inputStyle = { 
  padding: '0.8rem', 
  border: '1px solid var(--border-color)', 
  borderRadius: '4px',
  backgroundColor: '#F0F4F8',
  fontSize: '1rem'
};

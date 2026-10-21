import React, { Component, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; err: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, err: null };
  }
  static getDerivedStateFromError(err: any) {
    return { hasError: true, err };
  }
  componentDidCatch(err: any, info: any) {
    console.error('App Crash:', err, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0e0d0c', color: '#f5f0eb', padding: 24, textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>something went wrong</h2>
          <p style={{ color: '#9c9489', maxWidth: 460, fontSize: 14, marginBottom: 20 }}>{this.state.err?.message || 'an unexpected error occurred'}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            <button onClick={() => location.reload()} style={{ padding: '10px 24px', background: '#e07a5f', color: '#fff', border: 'none', borderRadius: 99, cursor: 'pointer', fontWeight: 600 }}>reload page</button>
            {/(^|\/)(wp-admin|admin)(\/|$)/i.test(location.pathname) && <button onClick={() => { localStorage.removeItem('dot_admin'); localStorage.removeItem('dot_admin_exp'); location.replace('/wp-admin'); }} style={{ padding: '10px 24px', background: '#272333', color: '#f5f0eb', border: '1px solid #51436d', borderRadius: 99, cursor: 'pointer', fontWeight: 600 }}>reset session and sign in again</button>}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

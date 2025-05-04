import React from 'react';
import { createRoot } from 'react-dom/client';
import { WhatsAppWidget } from '../src';
import './styles.css';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>WhatsApp Widget Test Page</h1>
      <p style={{ marginBottom: '20px' }}>You should see a WhatsApp button in the bottom-right corner</p>

      <WhatsAppWidget
        phoneNumber="1234567890"
        name="Test Support"
        position="Online | Replies instantly"
        welcomeMessage="Hello! 👋 How can I help you today?"
        avatar="https://via.placeholder.com/60"
      />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
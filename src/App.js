// src/App.js
import React, { useState } from 'react';
import './App.css';
import OtpVerification from '../src/components/OtpVerification';

function App() {
  const [otpVerified, setOtpVerified] = useState(false);

  return (
    <div className="App">
      {!otpVerified ? (
        <OtpVerification onOtpVerified={() => setOtpVerified(true)} />
      ) : (
        <MainContent />
      )}
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <p>This content is protected and only visible after OTP verification.</p>
    </div>
  );
}

export default App;

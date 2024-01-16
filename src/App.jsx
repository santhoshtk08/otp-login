import React from 'react';
import PhoneOtp from './components/PhoneOtp';

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl mb-4 font-bold text-center">Login with Phone</h1>
        <PhoneOtp />
      </div>
    </div>
  );
};

export default App;

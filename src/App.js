// src/App.js
import React from 'react';
import './App.css'; // This imports default CSS styling

import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';

// Main App component
function App() {
  return (
    // Container for the entire application
    <div className="App">
      {/* Include the Navigation component */}
      <Navigation />
      {/* Include the LoginForm component */}
      <LoginForm />
    </div>
  );
}

export default App;

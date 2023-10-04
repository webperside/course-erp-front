import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './shared/components/Sidebar/Sidebar';
import Navbar from "./shared/components/Navbar/Navbar";
import { AppContextProvider } from './shared/components/context/AppContext';
import { NotificationProvider } from './shared/components/context/NotificationContext'; 

function App() {
  return (
    <Router>
      <AppContextProvider>
        <NotificationProvider> 
          <Navbar />
          <Sidebar />
        </NotificationProvider>
      </AppContextProvider>
    </Router>
  );
}

export default App;
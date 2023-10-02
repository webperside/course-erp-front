import React  from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './shared/components/Sidebar/Sidebar';
import Navbar from "./shared/components/Navbar/Navbar";
import { AppContextProvider } from './shared/components/context/AppContext';
import Checkbox from './shared/components/Checkbox/Checkbox';



function App() {
 
  return (
    <Router>
      <AppContextProvider>
        <Navbar />
        <Sidebar />
        <Checkbox/>
    
      </AppContextProvider>
    </Router>
  );
}

export default App;

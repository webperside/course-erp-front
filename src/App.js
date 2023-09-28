
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from "./shared/components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar />
    </Router>
    );
}

export default App;

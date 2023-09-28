
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from "./shared/components/Navbar/Navbar";
import LoginForm from './shared/components/LoginForm';
function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar />
      <LoginForm/>
    </Router>
    );
}

export default App;

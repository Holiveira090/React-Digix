import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Newproject from './pages/NewProject'
import Footer from './components/layout/Footer'
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<Newproject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
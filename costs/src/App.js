import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Company from './pages/Company'
import Contact from './pages/Contact'
import Footer from './components/layout/Footer'
import Projects from './pages/Projects';
import Home from './components/pages/Home';
import Newproject from './components/pages/NewProject';


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
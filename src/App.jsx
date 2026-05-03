import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import Navbar from './Components/Header/index';
import Footer from './Components/Footer/index';
import Home from './Pages/Frontend/Home/index';
import About from './Pages/Frontend/About/index';
import Projects from './Pages/Frontend/Projects/index';
import Skills from './Pages/Frontend/Skills/index';
import Contact from './Pages/Frontend/Contact/index';
import './scss/_styles.scss';

function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
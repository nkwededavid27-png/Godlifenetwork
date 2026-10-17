import { Routes,Route } from 'react-router-dom'
import Navmenu from './components/Navbar'
import Home from './pages/Home'
import "./i18n";
import About from './pages/About';
import Event from './pages/Event';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';
import FloatingCard from './components/FloatingCard';






function App() {
  
  return (
    <>
      <Navmenu />
      <FloatingCard />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Blog" element={<Blog />} />
          
        </Routes>
      </main>
    </>
  )
}

export default App



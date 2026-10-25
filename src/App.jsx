import { Routes,Route } from 'react-router-dom'
import Navmenu from './components/Navbar'
import Home from './pages/Home'
import "./i18n";
import About from './pages/About';
import Event from './pages/Event';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';
import FloatingCard from './components/FloatingCard';
import Contact from './pages/Contact'
import { Suspense } from "react";
import PerfectLove from './pages/subpages/perfect-love';
import Media from './pages/Media';






function App() {
  
  return (
    <>
      <Navmenu />
      <FloatingCard />
      <main>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/perfect-love" element={<PerfectLove />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App



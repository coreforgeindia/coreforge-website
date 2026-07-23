import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import CoreForgeLoader from './components/CoreForgeLoader'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'
import NoInternetState from './components/states/NoInternetState'
import useNetworkStatus from './hooks/useNetworkStatus'

function App() {
  const [initialLoading, setInitialLoading] = useState(true)
  const isOnline = useNetworkStatus()

  useEffect(() => {
    // Show smooth CoreForge SVG Loader for 3s on initial mount/refresh
    const timer = setTimeout(() => setInitialLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOnline) {
    return <NoInternetState />
  }

  if (initialLoading) {
    return <CoreForgeLoader duration={3} />
  }

  return (
    <BrowserRouter>
      <div className="bg-[#f3f3f1] text-[#111111] selection:bg-black selection:text-white">
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <main className="overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

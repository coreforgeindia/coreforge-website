import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import StaticWebsite from './pages/StaticWebsite'
import DynamicWebsite from './pages/DynamicWebsite'
import WebWithAnalytics from './pages/WebWithAnalytics'
import WebsiteWithForms from './pages/WebsiteWithForms'
import AppDevelopment from './pages/AppDevelopment'
import Company from './pages/Company'

function App() {
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
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/static-website" element={<StaticWebsite />} />
            <Route path="/services/dynamic-website" element={<DynamicWebsite />} />
            <Route path="/services/web-analytics" element={<WebWithAnalytics />} />
            <Route path="/services/lead-capture" element={<WebsiteWithForms />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  )
}

export default App

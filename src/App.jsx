import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieConsent from './components/CookieConsent'
import CoreForgeLoader from './components/CoreForgeLoader'

// Lazy-loaded routes
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const NotFound = lazy(() => import('./pages/NotFound'))

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.15, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.1, ease: 'easeIn' } },
}

function PageFallback() {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      <CoreForgeLoader text="PREPARING INTERFACE" />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />

            {/* 301 Permanent Redirects for Legacy URLs */}
            <Route path="/company" element={<Navigate to="/about" replace />} />
            <Route path="/portfolio" element={<Navigate to="/services" replace />} />
            <Route path="/careers" element={<Navigate to="/about" replace />} />
            <Route path="/digital-marketing-branding" element={<Navigate to="/services/digital-marketing-branding" replace />} />
            <Route path="/software-app-development" element={<Navigate to="/services/software-tech-solutions" replace />} />
            <Route path="/antenna-rf-products" element={<Navigate to="/products" replace />} />

            {/* Legacy Software Services */}
            <Route path="/services/software" element={<Navigate to="/services/software-tech-solutions" replace />} />
            <Route path="/services/software/custom-software" element={<Navigate to="/services/custom-software" replace />} />
            <Route path="/services/software/web-development" element={<Navigate to="/services/web-development" replace />} />
            <Route path="/services/software/mobile-apps" element={<Navigate to="/services/mobile-app-development" replace />} />
            <Route path="/services/software/business-intelligence" element={<Navigate to="/services/custom-software" replace />} />

            {/* Legacy Hardware & Training Services */}
            <Route path="/services/hardware" element={<Navigate to="/products" replace />} />
            <Route path="/services/hardware/*" element={<Navigate to="/products" replace />} />
            <Route path="/services/training" element={<Navigate to="/about" replace />} />
            <Route path="/services/training/*" element={<Navigate to="/about" replace />} />

            {/* Legacy Web Package URLs */}
            <Route path="/services/static-website" element={<Navigate to="/services/web-development" replace />} />
            <Route path="/services/dynamic-website" element={<Navigate to="/services/web-development" replace />} />
            <Route path="/services/web-analytics" element={<Navigate to="/services/performance-marketing" replace />} />
            <Route path="/services/lead-capture" element={<Navigate to="/services/performance-marketing" replace />} />
            <Route path="/services/app-development" element={<Navigate to="/services/mobile-app-development" replace />} />

            {/* Legacy Blog Articles */}
            <Route path="/blog/how-coreforge-builds-iot-solutions" element={<Navigate to="/blog/industrial-iot-antenna-selection-gsm-gnss-integration" replace />} />
            <Route path="/blog/custom-software-vs-off-the-shelf-erp" element={<Navigate to="/blog/custom-web-applications-vs-off-the-shelf-saas" replace />} />
            <Route path="/blog/why-practical-embedded-training-matters" element={<Navigate to="/blog" replace />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="bg-[#fbfbfa] dark:bg-[#0c0c0d] text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black min-h-screen flex flex-col justify-between transition-colors">
          <ScrollToTop />
          <CookieConsent />
          <Navbar />
          <main id="main-content" className="flex-1 overflow-hidden">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

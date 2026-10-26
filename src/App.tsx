import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { QuickConnectModal } from './components/QuickConnectModal';
import { DoctorProfileModal } from './components/DoctorProfileModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Professional } from './data/professionals';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Courses } from './pages/Courses';
import { Internship } from './pages/Internship';
import { Relationship } from './pages/Relationship';
import { Events } from './pages/Events';
import { Blog } from './pages/Blog';
import { BlogPostDetail } from './pages/BlogPostDetail';
import { Contact } from './pages/Contact';
import { Button } from './components/Button';
import { PageLoader } from './components/PageLoader';
import { PageTransition } from './components/PageTransition';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#F3EAF6] text-[#700486] font-bold text-2xl flex items-center justify-center mx-auto">
        404
      </div>
      <h1 className="font-heading text-4xl font-bold text-[#1D1D1F]">
        Page Not Found
      </h1>
      <p className="text-[#666666] max-w-md mx-auto text-base">
        The clinic service or page you are looking for does not exist or has been relocated.
      </p>
      <div>
        <Button variant="primary" size="lg" to="/">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuickConnectOpen, setIsQuickConnectOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined);
  const [activeDoctorBio, setActiveDoctorBio] = useState<Professional | null>(null);

  const handleOpenQuickConnect = (service?: string, doctor?: string) => {
    setSelectedService(service);
    setSelectedDoctor(doctor);
    setIsQuickConnectOpen(true);
  };

  const handleCloseQuickConnect = () => {
    setIsQuickConnectOpen(false);
    setSelectedService(undefined);
    setSelectedDoctor(undefined);
  };

  const handleViewDoctorBio = (doctor: Professional) => {
    setActiveDoctorBio(doctor);
  };

  return (
    <BrowserRouter>
      {/* Premium Minimal Page Loader */}
      <PageLoader onComplete={() => {}} />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#1D1D1F] font-sans antialiased selection:bg-[#F3EAF6] selection:text-[#700486]">
        {/* Top Dark Bar matching screenshot */}
        <TopBar />

        {/* Announcement Bar matching screenshot */}
        <AnnouncementBar onBookConsultation={() => handleOpenQuickConnect()} />

        {/* Sticky Header matching screenshot */}
        <Header
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenBooking={() => handleOpenQuickConnect()}
        />

        {/* Main Routed Page Content with GSAP Page Transition */}
        <main className="flex-1">
          <PageTransition>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onOpenQuickConnect={handleOpenQuickConnect}
                    onViewDoctorBio={handleViewDoctorBio}
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <About
                    onOpenQuickConnect={handleOpenQuickConnect}
                    onViewDoctorBio={handleViewDoctorBio}
                  />
                }
              />
              <Route
                path="/services"
                element={<Services onOpenQuickConnect={handleOpenQuickConnect} />}
              />
              <Route
                path="/courses"
                element={<Courses onOpenQuickConnect={handleOpenQuickConnect} />}
              />
              <Route
                path="/internship"
                element={<Internship onOpenQuickConnect={handleOpenQuickConnect} />}
              />
              <Route
                path="/relationship"
                element={<Relationship onOpenQuickConnect={handleOpenQuickConnect} />}
              />
              <Route
                path="/events"
                element={<Events onOpenQuickConnect={handleOpenQuickConnect} />}
              />
              <Route
                path="/event"
                element={<Events onOpenQuickConnect={handleOpenQuickConnect} />}
              />
              <Route path="/blog" element={<Blog />} />
              <Route
                path="/blog/:slug"
                element={<BlogPostDetail onOpenQuickConnect={handleOpenQuickConnect} />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </main>

        {/* Comprehensive Healthcare Footer */}
        <Footer onOpenBooking={() => handleOpenQuickConnect()} />

        {/* Floating WhatsApp & Speed Dial */}
        <FloatingWhatsApp onOpenQuickConnect={() => handleOpenQuickConnect()} />

        {/* Search Overlay Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        {/* Quick Connect / Booking Modal */}
        <QuickConnectModal
          isOpen={isQuickConnectOpen}
          onClose={handleCloseQuickConnect}
          preselectedService={selectedService}
          preselectedDoctor={selectedDoctor}
        />

        {/* Doctor Bio & Credentials Profile Modal */}
        <DoctorProfileModal
          doctor={activeDoctorBio}
          onClose={() => setActiveDoctorBio(null)}
          onBook={(docName) => handleOpenQuickConnect(undefined, docName)}
        />
      </div>
    </BrowserRouter>
  );
}

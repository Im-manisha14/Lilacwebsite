'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useAdaptiveQuality } from '@/hooks/useAdaptiveQuality'
import { useAppear } from '@/hooks/useAppear'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <FulfillingLifeSection />
        <SpecialtiesSection />
        <NotAloneSection />
        <About />
        <TestimonialsSection />
        <FAQSection />
        <ProfessionalBackgroundSection />
        <OurOfficeSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

// Header Component
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const isHighQuality = useAdaptiveQuality()

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-inner">
        <button
          className={`header-burger ${mobileOpen ? 'burger-open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
        >
          <div className="burger-inner">
            <div className="top-bun"></div>
            <div className="bottom-bun"></div>
          </div>
        </button>

        <div className="header-title">
          <Link href="/" style={{ fontWeight: '700' }}>Grounded • Therapy</Link>
        </div>

        <nav className="header-nav-desktop">
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      {mobileOpen && (
        <div className="header-mobile-menu">
          <nav className="header-menu-nav-list">
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="menu-link">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="menu-link">
              Contact
            </Link>
          </nav>
        </div>
      )}

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10001;
          background-color: ${mobileOpen ? 'transparent' : 'hsla(var(--bg-main-hsl), 0.97)'};
          backdrop-filter: ${isHighQuality && !mobileOpen ? 'blur(10px)' : 'none'};
          -webkit-backdrop-filter: ${isHighQuality && !mobileOpen ? 'blur(10px)' : 'none'};
          transform: translateY(0);
          transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1), background-color 0.3s ease;
        }
        .header-hidden { transform: translateY(-100%); }
        .header-visible { transform: translateY(0); }
        .header-inner {
          max-width: 1500px;
          margin: 0 auto;
          padding: 20px 4vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-burger {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
          order: 1;
          position: relative;
          z-index: 10002;
        }
        @media (min-width: 768px) {
          .header-burger { display: none; }
        }
        .header-title { 
          order: 2;
          position: relative;
          z-index: 10002;
        }
        @media (min-width: 768px) {
          .header-title { order: 1; }
        }
        .header-title :global(a) {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(20px, 2vw, 26px);
          font-weight: 500;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 0.5px;
        }
        .header-nav-desktop {
          display: none;
          align-items: center;
          gap: 32px;
          order: 3;
        }
        @media (min-width: 768px) {
          .header-nav-desktop {
            display: flex;
            order: 2;
          }
        }
        .header-nav-desktop :global(a) {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: opacity 0.3s ease;
        }
        .header-nav-desktop :global(a:hover) { opacity: 0.6; }
        .burger-inner {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 24px;
          transition: all 0.3s ease;
        }
        .burger-open .burger-inner {
          gap: 0;
        }
        .top-bun, .bottom-bun {
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
          transition: all 0.3s ease;
        }
        .burger-open .top-bun {
          transform: rotate(45deg) translateY(0.5px);
        }
        .burger-open .bottom-bun {
          transform: rotate(-45deg) translateY(-0.5px);
        }
        .header-mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background-color: var(--bg-soft);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 4vw 40px;
          overflow: hidden;
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @media (min-width: 768px) {
          .header-mobile-menu { display: none; }
        }
        .header-menu-nav-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          width: 100%;
        }
        .header-menu-nav-list :global(.menu-link) {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(32px, 8vw, 48px);
          font-weight: 400;
          color: var(--text-primary);
          text-decoration: none;
          transition: opacity 0.3s ease;
        }
        .header-menu-nav-list :global(.menu-link:hover) { opacity: 0.6; }
      `}</style>
    </header>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-image-col">
          <div className="hero-image-mask">
            <Parallax speed={-8} className="parallax-container">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/14/08/jetty-1834801_1280.jpg"
                alt="Peaceful jetty over calm water"
                loading="eager"
              />
            </Parallax>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-heading">
            Find calm in <br />
            the chaos
          </h1>
          <p className="hero-subtitle">Anxiety, Trauma & Burnout Therapy in Santa Monica, California</p>
          <div className="hero-button-wrap">
            <a href="/contact" className="hero-button">
              SCHEDULE A CONSULTATION&nbsp;&nbsp;{'\u2192'}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background-color: hsla(var(--white-hsl), 1);
          padding-top: 70px;
          min-height: 100vh;
        }
        .hero-grid {
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 70px);
        }
        @media (min-width: 768px) {
          .hero-grid {
            flex-direction: row;
            align-items: stretch;
          }
        }
        .hero-image-col {
          position: relative;
          width: 100%;
          min-height: 400px;
          padding: 20px 20px 0 4vw;
        }
        @media (min-width: 768px) {
          .hero-image-col {
            width: 42%;
            min-height: auto;
            padding: 20px 0 0 4vw;
          }
        }
        .hero-image-mask {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 50% 50% 0 0 / 33% 33% 0 0;
        }
        .hero-image-mask :global(.parallax-container) {
          width: 100%;
          height: 100%;
        }
        .hero-image-mask img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 50px 6vw;
          flex: 1;
        }
        @media (min-width: 768px) {
          .hero-content {
            width: 58%;
            padding: 60px 6vw;
          }
        }
        .hero-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(40px, 5.5vw, 80px);
          font-weight: 700;
          font-style: italic;
          line-height: 1.05;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 24px 0;
        }
        .hero-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(16px, 1.3vw, 19px);
          font-weight: 400;
          line-height: 1.6;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 36px 0;
        }
        .hero-button-wrap { display: flex; justify-content: center; }
        .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-primary);
          background: transparent;
          text-decoration: none;
          border: 1px solid var(--text-primary);
          padding: 18px 36px;
          transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
          font-weight: 500;
        }
        .hero-button:hover {
          background-color: var(--text-primary);
          color: var(--bg-main);
        }
        .hero-button:active {
          transform: scale(0.96);
          transition: transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </section>
  )
}

// Fulfilling Life Section Component
function FulfillingLifeSection() {
  return (
    <section className="fulfilling-section">
      <div className="fulfilling-grid">
        <div className="fulfilling-image-block">
          <img
            src="/office2.jpeg"
            alt="Therapy office environment"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%', display: 'block' }}
            loading="lazy"
          />
        </div>

        <div className="fulfilling-text-block">
          <h2 className="fulfilling-heading">You don't have to struggle alone.</h2>
          <p className="fulfilling-body">
            Many high-achieving professionals feel exhausted despite appearing "functional" on the outside. Constant worry, difficulty sleeping, or that nagging sense of bracing for something to go wrong—these are signs your nervous system needs support.
          </p>
          <p className="fulfilling-body">
            I help adults in Santa Monica navigate anxiety, trauma, and burnout through evidence-based therapy that addresses both emotional and physiological experiences. Together, we'll create sustainable ways to reconnect with yourself.
          </p>
        </div>

        <div className="fulfilling-cta-block">
          <a href="/contact" className="fulfilling-cta-button">Get in touch</a>
        </div>
      </div>

      <style jsx>{`
        .fulfilling-section { background-color: var(--bg-main); }
        .fulfilling-grid {
          display: grid;
          position: relative;
          row-gap: 0px;
          column-gap: 0px;
          overflow-x: clip;
        }
        @media (max-width: 767px) {
          .fulfilling-grid {
            grid-template-rows: auto auto auto;
            grid-template-columns: 1fr;
          }
          .fulfilling-image-block {
            grid-area: 1 / 1 / 2 / 2;
            height: 60vw;
            max-height: 400px;
            min-height: 280px;
          }
          .fulfilling-text-block {
            grid-area: 2 / 1 / 3 / 2;
            padding: 40px 6vw;
          }
          .fulfilling-cta-block { grid-area: 3 / 1 / 4 / 2; }
        }
        @media (min-width: 768px) {
          .fulfilling-grid {
            --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 0px);
            --cell-max-width: calc((var(--sqs-site-max-width, 1500px) - (0px * 23)) / 24);
            --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2));
            grid-template-rows: 1fr auto;
            grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(24, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr);
          }
          .fulfilling-image-block {
            grid-area: 1 / 14 / 3 / 27;
            z-index: 1;
            max-height: calc(100vh - 70px);
          }
          .fulfilling-text-block {
            grid-area: 1 / 2 / 2 / 13;
            z-index: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 60px 60px;
          }
          .fulfilling-cta-block {
            grid-area: 2 / 1 / 3 / 14;
            z-index: 3;
          }
        }
        .fulfilling-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.15;
          color: var(--text-primary);
          margin: 0 0 40px 0;
        }
        .fulfilling-body {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(16px, 1.2vw, 18px);
          font-weight: 400;
          line-height: 1.6;
          color: #2A3430;
          margin: 0 0 16px 0;
        }
        .fulfilling-body:last-child { margin-bottom: 0; }
        .fulfilling-cta-block {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .fulfilling-cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-primary);
          text-decoration: none;
          border-top: 1px solid var(--text-primary);
          padding: 24px 32px;
          transition: all 1s ease;
          font-weight: 500;
        }
        .fulfilling-cta-button::after {
          content: '→';
          padding-left: 5px;
        }
        .fulfilling-cta-button:hover { opacity: 0.5; }
      `}</style>
    </section>
  )
}

// Specialties Section Component
function SpecialtiesSection() {
  const specialties = [
    {
      title: 'Anxiety & Panic Therapy',
      description: "Specialized treatment for chronic worry, panic attacks, and nervous system dysregulation. Using CBT and mindfulness-based practices, we'll help you understand the emotional and physiological roots of anxiety to find lasting relief.",
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1000&auto=format&fit=crop',
      focalPoint: '50% 50%',
    },
    {
      title: 'Trauma & EMDR',
      description: "Compassionate, evidence-based trauma therapy for single-incident and complex trauma. EMDR and body-oriented techniques help process difficult experiences at a pace that feels safe, with emphasis on regulation and stabilization.",
      image: 'https://tse1.mm.bing.net/th/id/OIP.Szq-EPWSG1-wf0oU406KEAHaD4?w=1200&h=628&rs=1&pid=ImgDetMain&o=7&rm=3',
      focalPoint: '53.6% 100%',
    },
    {
      title: 'Professional Burnout & Perfectionism',
      description: "Support for entrepreneurs, creatives, and high-achievers feeling disconnected after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working.",
      image: 'https://tse2.mm.bing.net/th/id/OIP.T5QNoDZCcQcwNy_AO1K3pgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
      focalPoint: '50% 50%',
    },
  ]

  return (
    <section className="specialties-section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="specialties-title">
        <p>How I Can Help</p>
      </div>

      <ul className="specialties-grid">
        {specialties.map((item, index) => (
          <li key={index} className="specialties-card">
            <div className="specialties-card-content">
              <div className="specialties-card-text">
                <h2 className="specialties-card-title">{item.title}</h2>
                <div className="specialties-card-description">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>

            <div className="specialties-card-media">
              <div className="specialties-card-media-inner">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ display: 'block', objectPosition: item.focalPoint }}
                  loading="lazy"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .specialties-section {
          min-height: 100px;
          padding-top: 6.6vmax;
          padding-bottom: 6.6vmax;
          background-color: var(--bg-main) !important;
          color: var(--text-primary);
        }
        .specialties-title {
          padding-bottom: 50px;
          text-align: center;
        }
        .specialties-title p {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.2;
          color: var(--text-primary);
        }
        .specialties-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          list-style: none;
          margin: 0 auto;
          padding: 0;
          max-width: 1500px;
          padding-left: 4vw;
          padding-right: 4vw;
        }
        @media (min-width: 576px) {
          .specialties-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .specialties-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .specialties-card {
          padding: 20px;
          border: 1px solid hsla(95.29, 45.95%, 14.51%, 1);
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .specialties-card-content { flex: 1; }
        .specialties-card-text { width: 100%; }
        .specialties-card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 1.3;
          color: var(--text-primary);
          max-width: 100%;
          margin: 0;
        }
        .specialties-card-description {
          margin-top: 10%;
          max-width: 100%;
        }
        .specialties-card-description p {
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.6;
          color: #2A3430;
          margin: 0;
        }
        .specialties-card-media {
          margin-top: 10%;
          width: 75%;
          align-self: center;
        }
        .specialties-card-media-inner {
          width: 100%;
          padding-bottom: 100%;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
        }
        .specialties-card-media-inner img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </section>
  )
}

// Not Alone Section Component
function NotAloneSection() {
  const challenges = [
    'Constant worry or feeling like something bad is about to happen',
    'Physical tension, racing heartbeat, or difficulty breathing',
    'Past experiences that continue to affect your relationships or sense of safety',
    'Burnout from years of high performance and internal pressure',
    'Difficulty sleeping or feeling emotionally on edge',
  ]

  const { ref: headingRef, isVisible: headingVisible } = useAppear({ delay: 0 })
  const { ref: subtitleRef, isVisible: subtitleVisible } = useAppear({ delay: 100 })
  const { ref: listRef, isVisible: listVisible } = useAppear({ delay: 150 })
  const { ref: closingRef, isVisible: closingVisible } = useAppear({ delay: 400 })
  const { ref: buttonRef, isVisible: buttonVisible } = useAppear({ delay: 500 })

  return (
    <section className="notalone-section">
      <div className="notalone-columns">
        <div className="notalone-image">
          <img
            src="/office1.jpeg"
            alt="Welcoming therapy space"
            loading="lazy"
          />
        </div>

        <div className="notalone-content">
          <div className="notalone-text-area">
            <h2 
              ref={headingRef}
              className={`notalone-heading ${headingVisible ? 'appear-visible' : 'appear-hidden'}`}
            >
              Therapy that feels <em>grounded</em> and supportive.
            </h2>

            <p 
              ref={subtitleRef}
              className={`notalone-subtitle ${subtitleVisible ? 'appear-visible' : 'appear-hidden'}`}
            >
              You may be experiencing:
            </p>

            <ul ref={listRef} className="notalone-list">
              {challenges.map((item, index) => (
                <li 
                  key={index}
                  className={listVisible ? 'appear-visible' : 'appear-hidden'}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <p>{item}</p>
                </li>
              ))}
            </ul>

            <p 
              ref={closingRef}
              className={`notalone-closing ${closingVisible ? 'appear-visible' : 'appear-hidden'}`}
            >
              My approach combines evidence-based methods—CBT, EMDR, mindfulness, and body-oriented techniques—to help you feel more regulated, resilient, and connected to yourself.
            </p>
          </div>

          <div 
            ref={buttonRef}
            className={`notalone-button-bar ${buttonVisible ? 'appear-visible' : 'appear-hidden'}`}
          >
            <a href="/contact" className="notalone-button">Work with me</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .appear-hidden {
          opacity: 0;
          transform: translateY(30px);
        }
        .appear-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s cubic-bezier(0.22, 0.61, 0.36, 1), transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .notalone-section { background-color: var(--bg-soft); }
        .notalone-columns {
          display: grid;
          grid-template-columns: 1fr;
          min-height: 100vh;
        }
        @media (min-width: 768px) {
          .notalone-columns { grid-template-columns: 1fr 1fr; }
        }
        .notalone-image {
          position: relative;
          min-height: 450px;
          overflow: hidden;
        }
        .notalone-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .notalone-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .notalone-text-area {
          padding: 50px 6vw;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .notalone-text-area { padding: 80px 60px 40px 50px; }
        }
        .notalone-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 500;
          line-height: 1.1;
          color: var(--text-primary);
          margin: 0 0 28px 0;
        }
        .notalone-heading em { font-style: italic; }
        .notalone-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(16px, 1.2vw, 19px);
          font-weight: 600;
          line-height: 1.6;
          color: var(--text-primary);
          margin: 0 0 24px 0;
        }
        .notalone-list {
          list-style: disc;
          padding-left: 22px;
          margin: 0 0 32px 0;
        }
        .notalone-list li { margin-bottom: 12px; }
        .notalone-list li p {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.1vw, 18px);
          font-weight: 400;
          line-height: 1.6;
          color: #2A3430;
          margin: 0;
        }
        .notalone-closing {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.1vw, 18px);
          font-weight: 400;
          line-height: 1.7;
          color: #2A3430;
          margin: 0;
        }
        .notalone-button-bar { border-top: 1px solid var(--text-primary); }
        .notalone-button {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-primary);
          text-decoration: none;
          padding: 24px 32px;
          transition: all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
          width: 100%;
          box-sizing: border-box;
          text-align: center;
          font-weight: 500;
        }
        .notalone-button::after {
          content: '→';
          padding-left: 5px;
        }
        .notalone-button:hover { opacity: 0.5; }
        .notalone-button:active {
          transform: scale(0.96);
          transition: transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </section>
  )
}

// About Component
function About() {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-image-col">
          <div className="arch-image-wrap">
            <img
              src="/dr-maya-reynolds.png"
              alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
              loading="lazy"
            />
          </div>
          <div className="circle-image-wrap">
            <img
              src="/office1.jpeg"
              alt="Calm therapy environment"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-content">
          <h2 className="about-heading">Meet Dr. Maya Reynolds, PsyD</h2>
          <p className="about-text">
            I'm a licensed clinical psychologist based in Santa Monica, specializing in anxiety, trauma, and burnout. I work with high-achieving adults who appear "functional" but internally feel exhausted, stuck in overthinking, or emotionally on edge.
          </p>
          <p className="about-text">
            My warm, collaborative approach integrates CBT, EMDR, mindfulness, and body-oriented techniques. Trauma work is paced carefully with emphasis on safety and stabilization. I offer both in-person sessions in my Santa Monica office and secure telehealth for California residents.
          </p>
          <div className="about-button-wrap">
            <a href="/contact" className="about-button">
              SCHEDULE CONSULTATION&nbsp;&nbsp;{'\u2192'}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: var(--bg-soft);
          padding: var(--section-padding-medium) 0;
        }
        .about-grid {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 4vw;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 42% 1fr;
            gap: 60px;
          }
        }
        .about-image-col {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .arch-image-wrap {
          width: 100%;
          max-width: 400px;
          height: 0;
          padding-bottom: 130%;
          position: relative;
          overflow: hidden;
          border-radius: 50% 50% 0 0 / 33% 33% 0 0;
        }
        @media (min-width: 768px) {
          .arch-image-wrap { max-width: none; }
        }
        .arch-image-wrap img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          display: block;
        }
        .circle-image-wrap {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 45%;
          max-width: 200px;
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          border: 8px solid var(--bg-soft);
        }
        @media (min-width: 768px) {
          .circle-image-wrap {
            right: -40px;
            bottom: -40px;
            max-width: 240px;
          }
        }
        .circle-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          display: block;
        }
        .about-content { padding: 20px 0; }
        @media (min-width: 768px) {
          .about-content { padding: 40px 0; }
        }
        .about-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          line-height: 1.1;
          color: var(--text-primary);
          margin: 0 0 28px 0;
        }
        .about-text {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.2vw, 18px);
          font-weight: 400;
          line-height: 1.7;
          color: #2A3430;
          margin: 0 0 32px 0;
        }
        .about-button-wrap { display: flex; justify-content: flex-start; }
        .about-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-primary);
          background-color: transparent;
          text-decoration: none;
          border: 1px solid var(--text-primary);
          padding: 16px 32px;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        .about-button:hover {
          background-color: var(--text-primary);
          color: var(--bg-soft);
        }
      `}</style>
    </section>
  )
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "Dr. Reynolds helped me understand my anxiety wasn't a weakness—it was my nervous system trying to protect me. EMDR therapy changed everything. I finally feel like I can breathe again.",
      author: "Sarah M.",
      role: "Marketing Director"
    },
    {
      id: 2,
      text: "After years of pushing through burnout, I learned it's okay to not have all the answers. Dr. Reynolds creates such a safe, grounding space. I leave every session feeling more like myself.",
      author: "James K.",
      role: "Software Engineer"
    },
    {
      id: 3,
      text: "I was skeptical about therapy, but Dr. Reynolds made it easy to open up. Her approach is practical, compassionate, and actually helpful. I wish I'd started sooner.",
      author: "Maria L.",
      role: "Teacher"
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">What Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background-color: hsla(var(--white-hsl), 1);
          padding: var(--section-padding-large) var(--sectionHorizontalMargin);
        }
        .testimonials-container {
          max-width: var(--maxWidth-2);
          margin: 0 auto;
        }
        .testimonials-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: 4rem;
          line-height: 1.2;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .testimonial-card {
          background-color: var(--bg-soft);
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        .testimonial-text {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: #2A3430;
          font-style: italic;
          margin-bottom: 1.5rem;
        }
        .testimonial-author {
          border-top: 1px solid hsla(44, 35%, 85%, 0.4);
          padding-top: 1rem;
        }
        .author-name {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .author-role {
          font-size: 0.9rem;
          color: hsla(44, 35%, 35%, 0.7);
        }
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { 
      question: 'What should I expect in our first session?', 
      answer: 'In our first session, we\'ll get to know each other and explore what brings you to therapy. I\'ll ask about your current challenges, your goals for therapy, and a bit about your background. This is also your opportunity to ask any questions you have about the therapeutic process and decide if we\'re a good fit.' 
    },
    { 
      question: 'Do you offer telehealth sessions?', 
      answer: 'Yes, I offer both in-person sessions at my Santa Monica office and secure telehealth sessions for clients throughout California. Many clients prefer the flexibility of alternating between in-person and virtual sessions based on their schedule and needs.' 
    },
    { 
      question: 'What is EMDR therapy and how does it help with trauma?', 
      answer: 'EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain process traumatic memories in a way that reduces their emotional intensity. It\'s particularly effective for trauma, anxiety, and panic, helping you move from feeling stuck in the past to feeling more present and grounded.' 
    },
    { 
      question: 'How often will we meet?', 
      answer: 'Most clients benefit from weekly sessions, especially when starting therapy. As you progress and feel more stable, we can discuss spacing sessions further apart. The frequency is always flexible and based on your specific needs and goals.' 
    },
  ]

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-grid">
        <div className="faq-image-col">
          <div className="faq-image-mask">
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Amazing-nature-scenery-wallpaper-3840x2160.jpg"
              alt="Peaceful natural scenery"
              loading="lazy"
            />
          </div>
        </div>

        <div className="faq-content">
          <h2 className="faq-heading">FAQs</h2>

          <ul className="accordion">
            {faqs.map((faq, index) => (
              <li key={index} className="accordion-item">
                {index === 0 && <div className="accordion-divider" />}

                <button
                  className="accordion-trigger"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className={`accordion-icon ${openIndex === index ? 'is-open' : ''}`}>
                    <div className="plus-h" />
                    <div className="plus-v" />
                  </div>
                  <span className="accordion-title">{faq.question}</span>
                </button>

                {openIndex === index && (
                  <div className="accordion-dropdown">
                    <p className="accordion-answer">{faq.answer}</p>
                  </div>
                )}

                <div className="accordion-divider" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background-color: hsla(var(--white-hsl), 1);
          padding: var(--section-padding-medium) 0;
        }
        .faq-grid {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 4vw;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 768px) {
          .faq-grid {
            grid-template-columns: 36% 1fr;
            gap: 60px;
            align-items: start;
          }
        }
        .faq-image-col { display: flex; justify-content: center; }
        .faq-image-mask {
          width: 100%;
          max-width: 350px;
          height: 0;
          padding-bottom: 130%;
          position: relative;
          overflow: hidden;
          border-radius: 50% 50% 0 0 / 33% 33% 0 0;
        }
        @media (min-width: 768px) {
          .faq-image-mask { max-width: none; }
        }
        .faq-image-mask img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          display: block;
        }
        .faq-content { padding: 20px 0; }
        @media (min-width: 768px) {
          .faq-content { padding: 20px 20px 20px 0; }
        }
        .faq-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(36px, 4.5vw, 60px);
          font-weight: 700;
          line-height: 1.1;
          color: var(--text-primary);
          margin: 0 0 40px 0;
        }
        .accordion {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .accordion-item { position: relative; }
        .accordion-divider {
          height: 1px;
          background-color: hsla(44, 35%, 35%, 0.3);
        }
        .accordion-trigger {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 18px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 0;
        }
        .accordion-icon {
          position: relative;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
        }
        .plus-h {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 1px;
          background-color: var(--text-primary);
        }
        .plus-v {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1px;
          height: 24px;
          background-color: var(--text-primary);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .is-open .plus-v {
          transform: translate(-50%, -50%) rotate(90deg);
          opacity: 0;
        }
        .accordion-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(18px, 2vw, 28px);
          font-weight: 400;
          line-height: 1.5;
          color: var(--text-primary);
          padding-left: 14px;
        }
        .accordion-dropdown { padding: 0 0 30px 44px; }
        .accordion-answer {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(14px, 1vw, 16px);
          font-weight: 400;
          line-height: 1.7;
          color: #2A3430;
          margin: 0;
        }
      `}</style>
    </section>
  )
}

// Professional Background Section Component
function ProfessionalBackgroundSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const items = [
    {
      title: 'Education & Training',
      description: 'Licensed Clinical Psychologist (PsyD, License #PSY12345) with advanced training in trauma-focused therapies and evidence-based approaches for anxiety disorders. Specialized training in EMDR, Cognitive Behavioral Therapy (CBT), and mindfulness-based interventions.',
    },
    {
      title: 'Clinical Approach',
      description: 'I integrate evidence-based therapies with a warm, grounded approach. My work is rooted in the belief that you already have the capacity for healing—therapy is about creating the right conditions for that growth. Whether we\'re using EMDR for trauma, CBT for anxiety patterns, or mindfulness for grounding, the focus is always on what works for you.',
    },
    {
      title: 'Who I Work With',
      description: 'I specialize in working with high-achieving adults who feel stuck in patterns of anxiety, overwhelm, or burnout. My clients are often navigating the pressure to "have it all together" while struggling quietly with panic, trauma responses, or disconnection from themselves. If you\'re tired of white-knuckling through life and ready to feel more grounded, we\'ll work well together.',
    },
  ]

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="profbg-section">
      <div className="profbg-container">
        <h3 className="profbg-heading">Professional Background</h3>

        <ul className="profbg-accordion">
          {items.map((item, index) => (
            <li key={index} className="profbg-item">
              {index === 0 && <div className="profbg-divider" />}

              <button
                className="profbg-trigger"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span className="profbg-title">{item.title}</span>
                <div className={`profbg-icon ${openIndex === index ? 'is-open' : ''}`}>
                  <div className="profbg-plus-h" />
                  <div className="profbg-plus-v" />
                </div>
              </button>

              {openIndex === index && (
                <div className="profbg-dropdown">
                  <p className="profbg-answer">{item.description}</p>
                </div>
              )}

              <div className="profbg-divider" />
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .profbg-section {
          background-color: hsla(var(--lightAccent-hsl), 1);
          padding: var(--section-padding-medium) 0;
        }
        .profbg-container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 4vw;
        }
        .profbg-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(24px, 3vw, 40px);
          font-weight: 500;
          font-style: italic;
          line-height: 1.3;
          color: var(--text-primary);
          text-align: center;
          margin: 0 auto 40px;
          max-width: 90%;
          padding: 0 20px;
        }
        @media (min-width: 768px) {
          .profbg-heading {
            max-width: 600px;
            padding: 0;
          }
        }
        .profbg-accordion {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          max-width: 100%;
        }
        @media (min-width: 768px) {
          .profbg-accordion { max-width: 600px; }
        }
        .profbg-item { position: relative; }
        .profbg-divider {
          height: 1px;
          background-color: hsla(44, 35%, 35%, 0.3);
        }
        .profbg-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 15px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .profbg-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(16px, 1.5vw, 22px);
          font-weight: 600;
          line-height: 1.5;
          color: var(--text-primary);
          padding-right: 14px;
        }
        .profbg-icon {
          position: relative;
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }
        .profbg-plus-h {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 14px;
          height: 1px;
          background-color: var(--text-primary);
        }
        .profbg-plus-v {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1px;
          height: 14px;
          background-color: var(--text-primary);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .is-open .profbg-plus-v {
          transform: translate(-50%, -50%) rotate(90deg);
          opacity: 0;
        }
        .profbg-dropdown {
          padding: 0 0 30px 0;
          display: flex;
          justify-content: center;
        }
        .profbg-answer {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(14px, 1vw, 16px);
          font-weight: 400;
          line-height: 1.7;
          color: #2A3430;
          margin: 0;
          max-width: 300px;
          min-width: 70%;
        }
      `}</style>
    </section>
  )
}

// Our Office Section Component
function OurOfficeSection() {
  return (
    <section className="office-section">
      <div className="office-container">
        <h2 className="office-heading">Our Office</h2>
        <p className="office-description">
          Located in the heart of Santa Monica, my office is a quiet, private space designed to feel calm and grounding. With natural light and a comfortable setting, it's a place where you can slow down, be yourself, and do the important work of healing.
        </p>
        <p className="office-detail">
          Both in-person and telehealth sessions available for California residents.
        </p>
        <p className="office-address">
          123rd Street 45 W, Santa Monica, CA 90401
        </p>
        <div className="office-images">
          <div className="office-image-wrapper">
            <img
              src="/office1.jpeg"
              alt="Dr. Maya Reynolds office interior - calm therapy space"
              loading="lazy"
            />
          </div>
          <div className="office-image-wrapper">
            <img
              src="/office2.jpeg"
              alt="Comfortable waiting area at Santa Monica therapy office"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .office-section {
          background-color: var(--bg-soft);
          padding: var(--section-padding-large) var(--sectionHorizontalMargin);
        }
        .office-container {
          max-width: var(--maxWidth-2);
          margin: 0 auto;
          text-align: center;
        }
        .office-heading {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .office-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #2A3430;
          max-width: 800px;
          margin: 0 auto 1rem auto;
        }
        .office-detail {
          font-size: 1rem;
          font-weight: 500;
          font-style: italic;
          color: hsla(44, 35%, 35%, 0.8);
          margin: 0.5rem auto 0 auto;
        }
        .office-address {
          font-size: 1.125rem;
          font-weight: 600;
          color: hsla(44, 35%, 35%, 0.7);
          margin: 1.5rem auto 3rem auto;
        }
        .office-images {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .office-image-wrapper {
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .office-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          aspect-ratio: 4/3;
          transition: transform 0.3s ease;
        }
        .office-image-wrapper:hover img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .office-images {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

// CTA Section Component
function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h3 className="cta-heading">Ready to find calm?</h3>
        <p className="cta-text">
          Taking the first step toward therapy is a brave decision. I offer a free 15-minute consultation call where we can discuss what you're looking for and see if we're a good fit.
          <br />
          <br />
          I see clients in-person at my Santa Monica office and via telehealth throughout California.
        </p>
        <div className="cta-button-wrap">
          <a href="/contact" className="cta-button">
            SCHEDULE A CONSULTATION&nbsp;&nbsp;{'\u2192'}
          </a>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background-color: var(--bg-main);
          padding: var(--section-padding-medium) 0;
        }
        .cta-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 0 4vw;
          text-align: center;
        }
        .cta-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 700;
          font-style: italic;
          line-height: 1.3;
          color: var(--text-primary);
          margin: 0 0 24px 0;
        }
        .cta-text {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(14px, 1.1vw, 17px);
          font-weight: 400;
          line-height: 1.7;
          color: #2A3430;
          margin: 0 0 40px 0;
        }
        .cta-button-wrap { display: flex; justify-content: center; }
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--bg-main);
          background-color: var(--accent);
          text-decoration: none;
          border: 1px solid var(--accent);
          padding: 18px 36px;
          transition: all 0.6s ease;
          font-weight: 500;
        }
        .cta-button:hover {
          background-color: var(--text-primary) !important;
          border-color: var(--text-primary) !important;
          color: var(--bg-main);
        }
      `}</style>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-col-heading">Dr. Maya Reynolds, PsyD</h3>
              <div className="footer-info">
                <p className="footer-text">
                  123rd Street 45 W<br />
                  Santa Monica, CA 90401
                </p>
                <div className="footer-links-group">
                  <a href="mailto:drmaya@example.com" className="footer-link">drmaya@example.com</a>
                  <a href="tel:310-555-1234" className="footer-link">(310) 555-1234</a>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-heading">Hours</h4>
              <p className="footer-text">
                Monday {'\u2013'} Thursday<br />
                9am {'\u2013'} 6pm<br />
                Friday<br />
                9am {'\u2013'} 3pm
              </p>
            </div>

            <div className="footer-col footer-col-right">
              <h4 className="footer-col-heading">Find</h4>
              <nav className="footer-nav">
                <Link href="/" className="footer-link">Home</Link>
                <Link href="/contact" className="footer-link">Contact</Link>
                <Link href="/blog" className="footer-link">Blog</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-legal-links">
            <Link href="/privacy" className="footer-legal-link">Privacy & Cookies Policy</Link>
            <Link href="/good-faith-estimate" className="footer-legal-link">Good Faith Estimate</Link>
            <Link href="/terms" className="footer-legal-link">Website Terms & Conditions</Link>
            <Link href="/disclaimer" className="footer-legal-link">Disclaimer</Link>
          </div>

          <p className="footer-credits">
            Website Template Credits:{' '}
            <a href="https://gobloomcreative.com" target="_blank" rel="noopener noreferrer" className="footer-credits-link">
              Go Bloom Creative
            </a>
          </p>

          <p className="footer-copyright">
            All Rights Reserved © 2026 Grounded Therapy, PLLC.
          </p>
        </div>
      </div>

      <style jsx>{`
        .site-footer { font-family: 'Poppins', sans-serif; }
        .footer-container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 4vw;
        }
        .footer-top {
          background-color: var(--bg-soft);
          padding: 60px 0 70px;
          border-top: 1px solid rgba(31, 42, 38, 0.12);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 4fr 1fr 1fr;
            gap: 60px;
          }
        }
        .footer-col-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(20px, 1.6vw, 26px);
          font-weight: 400;
          line-height: 1.3;
          color: var(--text-primary);
          margin: 0 0 20px 0;
        }
        .footer-col-right .footer-col-heading { text-align: left; }
        @media (min-width: 768px) {
          .footer-col-right .footer-col-heading { text-align: right; }
        }
        .footer-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-text {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(14px, 1vw, 17px);
          font-weight: 400;
          line-height: 1.7;
          color: hsla(44, 35%, 35%, 0.7);
          margin: 0;
        }
        .footer-links-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .footer-link {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(14px, 1vw, 17px);
          font-weight: 400;
          line-height: 1.7;
          color: hsla(44, 35%, 35%, 0.7);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.3s ease;
        }
        .footer-link:hover { color: var(--text-primary); }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-start;
        }
        @media (min-width: 768px) {
          .footer-col-right .footer-nav {
            align-items: flex-end;
            text-align: right;
          }
        }
        .footer-bottom {
          background-color: hsla(var(--lightAccent-hsl), 1);
          padding: 40px 0 50px;
        }
        .footer-legal-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .footer-legal-link {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(13px, 0.9vw, 15px);
          font-weight: 400;
          color: hsla(44, 35%, 35%, 0.7);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.3s ease;
        }
        .footer-legal-link:hover { color: var(--text-primary); }
        .footer-credits {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(13px, 0.9vw, 15px);
          font-weight: 400;
          color: hsla(44, 35%, 35%, 0.7);
          text-align: center;
          margin: 0 0 24px 0;
        }
        .footer-credits-link {
          text-decoration: underline;
          text-underline-offset: 4px;
          color: inherit;
          transition: color 0.3s ease;
        }
        .footer-credits-link:hover { color: var(--text-primary); }
        .footer-copyright {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(13px, 0.9vw, 15px);
          font-weight: 400;
          color: hsla(44, 35%, 35%, 0.7);
          text-align: center;
          margin: 0;
        }
      `}</style>
    </footer>
  )
}

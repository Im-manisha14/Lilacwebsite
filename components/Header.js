'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAdaptiveQuality } from '@/hooks/useAdaptiveQuality'

export default function Header({ contactPage = false }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const isHighQuality = useAdaptiveQuality()

  // Lock body scroll when mobile menu is open
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

  const headerBg = contactPage
    ? 'rgba(220, 214, 224, 0.97)'
    : 'hsla(30, 55.56%, 96.47%, 0.97)'
  const menuBg = contactPage
    ? 'rgba(220, 214, 224, 1)'
    : 'hsla(30, 55.56%, 96.47%, 1)'
  const textColor = 'hsla(95.29, 45.95%, 14.51%, 1)'

  return (
    <>
      {/* ===== NORMAL HEADER BAR ===== */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: mobileOpen ? 9998 : 1000,
          backgroundColor: headerBg,
          backdropFilter: isHighQuality ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isHighQuality ? 'blur(10px)' : 'none',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)',
        }}
      >
        <div
          style={{
            maxWidth: 1500,
            margin: '0 auto',
            padding: '20px 4vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Hamburger button - always on left on mobile */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
            className="mobile-only"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 24 }}>
              <div style={{ width: '100%', height: 1, backgroundColor: textColor }} />
              <div style={{ width: '100%', height: 1, backgroundColor: textColor }} />
            </div>
          </button>

          {/* Site Title - right on mobile, left on desktop */}
          <Link
            href="/"
            className="site-title"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(18px, 2vw, 24px)',
              fontWeight: 500,
              color: textColor,
              textDecoration: 'none',
              letterSpacing: '0.5px',
            }}
          >
            Grounded • Therapy
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link
              href="/blog"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: textColor,
                textDecoration: 'none',
                letterSpacing: '0.5px',
                transition: 'opacity 0.3s ease',
              }}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: textColor,
                textDecoration: 'none',
                letterSpacing: '0.5px',
                transition: 'opacity 0.3s ease',
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* ===== FULLSCREEN MOBILE MENU OVERLAY ===== */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backgroundColor: menuBg,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top bar: X close on left, site title on right */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 4vw',
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close Menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: textColor,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(18px, 2vw, 24px)',
                fontWeight: 500,
                color: textColor,
                letterSpacing: '0.5px',
              }}
            >
              Grounded • Therapy
            </span>
          </div>

          {/* Centered navigation links */}
          <nav
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
            }}
          >
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(32px, 7vw, 44px)',
                fontWeight: 400,
                color: textColor,
                textDecoration: 'none',
              }}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(32px, 7vw, 44px)',
                fontWeight: 400,
                color: textColor,
                textDecoration: 'none',
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Responsive visibility styles */}
      <style jsx global>{`
        .mobile-only {
          display: flex !important;
        }
        .desktop-only {
          display: none !important;
        }
        @media (min-width: 768px) {
          .mobile-only {
            display: none !important;
          }
          .desktop-only {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import styles from '@/styles/Contact.module.css'

export default function Contact() {
  return (
    <>
      <Header contactPage />

      <main>
        <HeroSection />
        <BookingSection />
        <OfficeSection />
        <SocialSection />
        <FooterExtended />
        <BottomFooter />
      </main>
    </>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroHeading}>Let's Connect</h1>

        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <div className={styles.heroText}>
              <p className={styles.leadText}>
                Starting therapy is courageous.
              </p>
              <p className={styles.leadText}>
                Get in touch for questions, or to book a free 15-minute consultation.
              </p>
            </div>

            <div className={styles.imagesContainer}>
              <div className={styles.archImage}>
                <img
                  src="/dr-maya-reynolds.png"
                  alt="Dr. Maya Reynolds"
                  loading="eager"
                />
              </div>
              <div className={styles.circleImage}>
                <img
                  src="/office1.jpeg"
                  alt="Therapy flowers"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.hipaaBox}>
              <p className={styles.hipaaText}>
                <strong>PLEASE NOTE:</strong> If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Booking Section
function BookingSection() {
  return (
    <section className={styles.bookSection}>
      <div className={styles.bookContainer}>
        <h2 className={styles.bookHeading}>Book an appointment.</h2>

        <p className={styles.bookText}>
          Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
        </p>

        <div className={styles.scheduleWidget}>
          <div className={styles.widgetInner}>
            <h3 className={styles.widgetTitle}>This page is not active</h3>
            <p className={styles.widgetText}>
              If you're the owner, please log into your account to start a free trial or subscribe.
            </p>
            <button className={styles.widgetButton}>GO TO ACCOUNT</button>
          </div>

          <div className={styles.widgetFooter}>
            <p className={styles.poweredBy}>Powered by</p>
            <p className={styles.acuityLogo}>acuity<span className={styles.colon}>:</span>scheduling</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Office Location & Hours
function OfficeSection() {
  return (
    <section className={styles.officeSection}>
      <div className={styles.officeContainer}>
        <div className={styles.officeGrid}>
          <div className={styles.officeInfo}>
            <h2 className={styles.officeHeading}>My Office</h2>

            <p className={styles.officeAddress}>
              123rd Street 45 W<br />
              Santa Monica, CA 90401
            </p>

            <h3 className={styles.hoursHeading}>Hours</h3>

            <p className={styles.hoursText}>
              Monday – Friday<br />
              10am – 6pm
            </p>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7447896170765!2d-118.49647!3d34.0194543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAxJzEwLjAiTiAxMTjCsDI5JzQ3LjMiVw!5e0!3m2!1sen!2sus!4v1234567890"
              className={styles.mapIframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

// Social Section
function SocialSection() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.socialContainer}>
        <h2 className={styles.socialHeading}>Clear Mind</h2>

        <div className={styles.socialGrid}>
          <a href="#" className={styles.socialImageLink}>
            <img
              src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&auto=format&fit=crop"
              alt="Calm ocean waves"
              className={styles.socialImage}
            />
          </a>

          <a href="#" className={styles.socialImageLink}>
            <img
              src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=800&auto=format&fit=crop"
              alt="Coffee and journal"
              className={styles.socialImage}
            />
          </a>

          <a href="#" className={styles.socialImageLink}>
            <img
              src="https://putthekettleon.ca/wp-content/uploads/2023/08/Mindfulness-questions-768x480.jpg"
              alt="Mindful reflection"
              className={styles.socialImage}
            />
          </a>

          <a href="#" className={styles.socialImageLink}>
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop"
              alt="Calming nature scene"
              className={styles.socialImage}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

// Extended Footer
function FooterExtended() {
  return (
    <footer className={styles.extendedFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Column 1 - Practice Info */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Grounded • Therapy</h3>
            <p className={styles.footerSubtitle}>Dr. Maya Reynolds, PsyD</p>
            <p className={styles.footerAddress}>
              123rd Street 45 W<br />
              Santa Monica, CA 90401
            </p>
            <p className={styles.footerContact}>
              <a href="mailto:drmaya@example.com">drmaya@example.com</a>
            </p>
            <p className={styles.footerContact}>
              <a href="tel:+13105551234">(310) 555-1234</a>
            </p>
          </div>

          {/* Column 2 - Hours */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Hours</h3>
            <p className={styles.footerHours}>
              Monday – Friday<br />
              10am – 6pm
            </p>
          </div>

          {/* Column 3 - Navigation */}
          <div className={styles.footerColumnRight}>
            <h3 className={styles.footerTitle}>Find</h3>
            <nav className={styles.footerNav}>
              <Link href="/">Home</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Bottom Footer
function BottomFooter() {
  return (
    <div className={styles.bottomFooter}>
      <div className={styles.bottomFooterContainer}>
        <div className={styles.legalLinks}>
          <a href="#">Privacy & Cookies Policy</a>
          <a href="#">Good Faith Estimate</a>
          <a href="#">Website Terms & Conditions</a>
          <a href="#">Disclaimer</a>
        </div>

        <p className={styles.creditText}>
          Website Template Credits: <a href="https://gobloomcreative.com" target="_blank" rel="noopener noreferrer">Go Bloom Creative</a>
        </p>

        <p className={styles.copyrightText}>
          All Rights Reserved © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD
        </p>
      </div>
    </div>
  )
}

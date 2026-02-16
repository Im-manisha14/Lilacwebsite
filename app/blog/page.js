'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAdaptiveQuality } from '@/hooks/useAdaptiveQuality'
import Header from '@/components/Header'

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: '5 Signs Your Anxiety Needs Professional Support',
    date: 'JANUARY 28, 2026',
    slug: '/blog/signs-anxiety-needs-support',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Not all anxiety requires therapy—but some patterns do. Learn when worry crosses the line from everyday stress to something that deserves professional attention.',
  },
  {
    id: 2,
    title: 'What to Expect in Your First EMDR Session',
    date: 'JANUARY 15, 2026',
    slug: '/blog/first-emdr-session',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Curious about EMDR therapy but not sure what happens in the room? Here\'s an honest look at how this trauma therapy works and what your first session might look like.',
  },
  {
    id: 3,
    title: 'The Hidden Cost of High-Functioning Anxiety',
    date: 'DECEMBER 20, 2025',
    slug: '/blog/high-functioning-anxiety',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    excerpt: 'You\'re successful, productive, and exhausted. High-functioning anxiety looks like success on the outside—but feels like chaos on the inside. Here\'s how to recognize it.',
  },
  {
    id: 4,
    title: 'Grounding Techniques That Actually Work for Panic Attacks',
    date: 'DECEMBER 5, 2025',
    slug: '/blog/grounding-techniques-panic',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    excerpt: 'When panic hits, your body goes into survival mode. These evidence-based grounding techniques can help you come back to the present moment—even in the middle of a panic attack.',
  },
  {
    id: 5,
    title: 'Why Burnout Isn\'t Just About Working Too Much',
    date: 'NOVEMBER 18, 2025',
    slug: '/blog/burnout-deeper-causes',
    image: 'https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Burnout isn\'t fixed by a vacation. It\'s about chronic disconnection from yourself—and it requires a different kind of healing. Here\'s what actually helps.',
  },
  {
    id: 6,
    title: 'Choosing Between In-Person and Telehealth Therapy',
    date: 'NOVEMBER 3, 2025',
    slug: '/blog/in-person-vs-telehealth',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Both therapy formats work—but they work differently. Here\'s how to decide which option is right for you, your schedule, and your healing process.',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHero />
      <BlogList posts={blogPosts} />
      <SubscribeSection />
      <Footer />
    </main>
  )
}

// Blog Hero Component
function BlogHero() {
  return (
    <section className="blog-hero-section">
      <div className="blog-hero-grid">
        <div className="blog-hero-image-col">
          <div className="blog-hero-image-mask">
            <img
              src="/office2.jpeg"
              alt="Dr. Maya Reynolds' therapy office in Santa Monica"
              loading="eager"
            />
          </div>
        </div>

        <div className="blog-hero-content">
          <h1 className="blog-hero-heading">Insights & Resources</h1>
          <p className="blog-hero-text">
            A collection of thoughts on anxiety, trauma, and the path to healing. 
            Here you'll find practical tools, therapy insights, and honest reflections 
            on what it really takes to feel grounded again.
          </p>
          <p className="blog-hero-closing">Take what resonates, leave what doesn't.</p>
        </div>
      </div>

      <style jsx>{`
        .blog-hero-section {
          background-color: hsl(30, 55.56%, 96.47%);
          padding-top: 90px;
          min-height: 100vh;
        }
        .blog-hero-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: calc(100vh - 90px);
        }
        @media (min-width: 768px) {
          .blog-hero-grid {
            flex-direction: row;
            align-items: stretch;
          }
        }
        .blog-hero-image-col {
          position: relative;
          width: 50%;
          max-width: 220px;
          min-height: 400px;
          padding: 30px 0 0 0;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .blog-hero-image-col {
            width: 42%;
            max-width: none;
            min-height: auto;
            padding: 20px 0 0 4vw;
            margin: 0;
          }
        }
        .blog-hero-image-mask {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 50% 50% 0 0 / 33% 33% 0 0;
        }
        .blog-hero-image-mask img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }
        .blog-hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px 6vw 50px;
          flex: 1;
        }
        @media (min-width: 768px) {
          .blog-hero-content {
            width: 58%;
            padding: 60px 6vw;
            align-items: flex-start;
            text-align: left;
          }
        }
        .blog-hero-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(36px, 5.5vw, 72px);
          font-weight: 700;
          line-height: 1.1;
          color: hsla(95.29, 45.95%, 14.51%, 1);
          margin: 0 0 24px 0;
        }
        .blog-hero-text {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.3vw, 20px);
          font-weight: 400;
          font-style: italic;
          line-height: 1.6;
          color: hsla(95.29, 45.95%, 14.51%, 1);
          margin: 0 0 24px 0;
          max-width: 600px;
        }
        .blog-hero-closing {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.3vw, 20px);
          font-weight: 600;
          line-height: 1.6;
          color: hsla(95.29, 45.95%, 14.51%, 1);
          margin: 0;
        }
      `}</style>
    </section>
  )
}

// Blog List Component
function BlogList({ posts }) {
  return (
    <section className="blog-list-section">
      <div className="blog-list-container">
        <div className="blog-list-grid">
          {posts.map((post) => (
            <a href={post.slug} key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-content">
                <p className="blog-card-date">{post.date}</p>
                <h3 className="blog-card-title">{post.title}</h3>
                {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}
                <div className="blog-card-link">
                  <span>Read More</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-list-section {
          background-color: hsl(30, 55.56%, 96.47%);
          padding: 60px 0 100px;
        }
        .blog-list-container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 4vw;
        }
        .blog-list-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px 40px;
        }
        @media (min-width: 768px) {
          .blog-list-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 80px 60px;
          }
        }
        .blog-card {
          display: block;
          text-decoration: none;
          cursor: pointer;
        }
        .blog-card-image {
          width: 100%;
          height: 350px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        @media (min-width: 768px) {
          .blog-card-image { height: 450px; }
        }
        .blog-card-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .blog-card:hover .blog-card-image img {
          transform: scale(1.05);
        }
        .blog-card-content {
          display: flex;
          flex-direction: column;
        }
        .blog-card-date {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: hsla(95.29, 45.95%, 14.51%, 1);
          margin: 0 0 16px 0;
        }
        .blog-card-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          line-height: 1.2;
          color: hsla(95.29, 45.95%, 14.51%, 1);
          margin: 0 0 16px 0;
          transition: opacity 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .blog-card:hover .blog-card-title { opacity: 0.6; }
        .blog-card-excerpt {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.7;
          color: hsla(95.29, 45.95%, 14.51%, 0.8);
          margin: 0 0 24px 0;
        }
        .blog-card-link {
          position: relative;
          display: inline-block;
        }
        .blog-card-link span {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: hsla(95.29, 45.95%, 14.51%, 1);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
        }
      `}</style>
    </section>
  )
}

// Subscribe Section Component
function SubscribeSection() {
  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-box">
          <h2 className="subscribe-heading">Subscribe</h2>
          <p className="subscribe-text">
            Sign up with your email address to receive news and updates.
          </p>

          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Email Address"
              className="subscribe-input"
              required
            />
            <button type="submit" className="subscribe-button">
              SIGN UP
            </button>
          </form>

          <p className="subscribe-privacy">We respect your privacy.</p>
        </div>
      </div>

      <style jsx>{`
        .subscribe-section {
          background-color: #8b8c5c;
          padding: 80px 0 96px;
        }
        .subscribe-container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 6vw;
        }
        @media (min-width: 768px) {
          .subscribe-container { padding: 0 4vw; }
        }
        .subscribe-box {
          max-width: 900px;
          margin: 0 auto;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 64px 32px;
          text-align: center;
          color: #ffffff;
        }
        @media (min-width: 768px) {
          .subscribe-box { padding: 80px 64px; }
        }
        .subscribe-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 16px 0;
        }
        .subscribe-text {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.2vw, 16px);
          font-weight: 400;
          line-height: 1.6;
          margin: 0 0 40px 0;
          opacity: 0.9;
        }
        .subscribe-form {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .subscribe-form { flex-direction: row; }
        }
        .subscribe-input {
          flex: 1;
          padding: 12px 16px;
          background-color: #ffffff;
          color: #2d3319;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          border: none;
          outline: none;
        }
        .subscribe-input::placeholder { color: rgba(45, 51, 25, 0.5); }
        .subscribe-input:focus {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: -2px;
        }
        .subscribe-button {
          padding: 12px 32px;
          background: transparent;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .subscribe-button:hover {
          background-color: #ffffff;
          color: #8b8c5c;
        }
        .subscribe-privacy {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
          margin: 32px 0 0 0;
          opacity: 0.7;
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
          background-color: hsla(var(--white-hsl), 1);
          padding: 60px 0 70px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          text-align: center;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 4fr 1fr 1fr;
            gap: 60px;
            text-align: left;
          }
        }
        .footer-col-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(20px, 1.6vw, 26px);
          font-weight: 400;
          line-height: 1.3;
          color: hsla(95.29, 45.95%, 14.51%, 1);
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
          color: hsla(95.29, 45.95%, 14.51%, 0.7);
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
          color: hsla(95.29, 45.95%, 14.51%, 0.7);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.3s ease;
        }
        .footer-link:hover { color: hsla(95.29, 45.95%, 14.51%, 1); }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .footer-nav {
            align-items: flex-start;
          }
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
          color: hsla(95.29, 45.95%, 14.51%, 0.7);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.3s ease;
        }
        .footer-legal-link:hover { color: hsla(95.29, 45.95%, 14.51%, 1); }
        .footer-credits {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(13px, 0.9vw, 15px);
          font-weight: 400;
          color: hsla(95.29, 45.95%, 14.51%, 0.7);
          text-align: center;
          margin: 0 0 24px 0;
        }
        .footer-credits-link {
          text-decoration: underline;
          text-underline-offset: 4px;
          color: inherit;
          transition: color 0.3s ease;
        }
        .footer-credits-link:hover { color: hsla(95.29, 45.95%, 14.51%, 1); }
        .footer-copyright {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(13px, 0.9vw, 15px);
          font-weight: 400;
          color: hsla(95.29, 45.95%, 14.51%, 0.7);
          text-align: center;
          margin: 0;
        }
      `}</style>
    </footer>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function HeroSection() {
  const heroRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1
    })
      .from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 40,
          duration: 1
        },
        '-=0.5'
      )
      .from(
        '.shape',
        {opacity: 0,
          scale: 0,
          stagger: 0.2,
          duration: 1
        },
        '-=0.5'
      )

    gsap.to('.shape', {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      stagger: 0.2
    })
  }, [])
  return (
    <section ref={heroRef} className="hero">
      <div className="hero-content">
        <h1 className="hero-title">GSAP in React Mini Project 2</h1>
        <p className="hero-subtitle">
          ini punya oli
        </p>

        <div className="shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
        </div>
      </div>
  <style>{`
        .hero {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-subtitle {
          margin-top: 20px;
        }

        .shape {
          width: 120px;
          height: 120px;
          position: absolute;
          border-radius: 20px;
          filter: blur(10px);
          opacity: 0.7;
        }

        .shape1 {
          background: purple;
          top: -100px;
          left: -100px;
        }

        .shape2 {
          background: cyan;
          top: -50px;
          right: -100px;
        }
           .shape3 {
          background: hotpink;
          bottom: -100px;
          left: 0;
        }

        .shape4 {
          background: orange;
          bottom: -120px;
          right: 0;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CTASection() {
  useEffect(() => {
    gsap.from('.cta-content', {
      scrollTrigger: {
        trigger: '.cta',
        start: 'top 70%'
      },
      opacity: 0,
      y: 100,
      duration: 1
    })
  }, [])

  return (
    <section className="cta">
      <div className="cta-content">
        <h1>Let's Create Something Amazing</h1>
        <p>Modern animation experience with React and GSAP.</p>
        <button>Get Started</button>
      </div>

      <style>{`
        .cta {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(135deg, #111, #222);
        }

        .cta p {
          margin: 30px 0;
        }
      `}</style>
    </section>
  )
}

export default CTASection
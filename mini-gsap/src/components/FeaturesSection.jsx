import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function FeaturesSection() {
  useEffect(() => {
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features',
        start: 'top 70%'
      },
      opacity: 0,
      y: 100,
      stagger: 0.3,
      duration: 1
    })
  }, [])
const features = [
    'Performance engine',
    'Streetwear Identity',
    'Athlete Approved',
    'Sustainable Future'
  ]

  return (
    <section className="features">
      <h2>Features</h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <h3>{item}</h3>
            <p>
              designed with lightweight materials and responsive cushioning to support every mmovement on and off the field
            </p>
          </div>
            ))}
      </div>

      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .feature-card {
          background: #151515;
          padding: 40px;
          border-radius: 20px;
        }

        .feature-card h3 {
          margin-bottom: 15px;
        }
      `}</style>
    </section>
  )
}
export default FeaturesSection
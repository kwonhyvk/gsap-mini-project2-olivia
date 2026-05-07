import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function StoryCards() {
  const sectionRef = useRef()

  useEffect(() => {
    const cards = gsap.utils.toArray('.story-card')

    cards.forEach((card, index) => {
      gsap.to(card, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      })
    })
  }, [])

  return (
    <section className="story-section" ref={sectionRef}>
      <h2>Story Section</h2>

      <div className="story-wrapper">
        {[1, 2, 3].map((item) => (
          <div className="story-card" key={item}>
            <h2>Card {item}</h2>
            <p>
              ini punya oli
            </p>
            <button>Read More</button>
          </div>
        ))}
      </div>

      <style>{`
        .story-wrapper {
          display: flex;
          flex-direction: column;
          gap: 50px;
          margin-top: 50px;
        }

        .story-card {
          background: #171717;
          padding: 60px;
          border-radius: 30px;
          transform: scale(0.8);
        }
      `}</style>
    </section>
  )
}

export default StoryCards
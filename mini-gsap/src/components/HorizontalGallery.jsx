import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import pic1 from './assets/luka.jpg'
import pic2 from './assets/luka.jpg'
import pic3 from './assets/luka.jpg'

gsap.registerPlugin(ScrollTrigger)
const images = [pic1, pic2, pic3, pic1, pic2]
function HorizontalGallery() {
  const containerRef = useRef(null)

  useEffect(() => {
    const sections = gsap.utils.toArray('.panel')

    if (!containerRef.current) return

    const animation = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: '+=' + 3000
      }
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="gallery-section" ref={containerRef}>
      <div className="gallery-wrapper">
       {[1, 2, 3, 4, 5].map((item, index) => (
  <div className="panel" key={item}>
    <div className="panel-content">
      <img src={images[index]} alt="" />
      <h2>Panel {item}</h2>
      <p>Luka</p>
    </div>
  </div>
))}
      </div>
      

      <style>{`
        .gallery-section {
          overflow: hidden;
        }

        .gallery-wrapper {
          display: flex;
          width: 500%;
        }

        .panel {
          width: 100vw;
          height: 100vh;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }
      `}</style>
    </section>
    
  )

}

export default HorizontalGallery
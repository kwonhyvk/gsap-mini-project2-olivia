import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import pic1 from './assets/adidas.jpg'
import pic2 from './assets/adidas2.jpg'
import pic3 from './assets/adidas3.jpg'
import pic4 from './assets/adidas4.jpg'
import pic5 from './assets/adidas5.jpg'


gsap.registerPlugin(ScrollTrigger)
const images = [pic1, pic2, pic3, pic4, pic5]
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
       {[1].map((item, index) => (
  <div className="panel" key={item}>
    <div className="panel-content">
      <img src={images[index]} alt="" />
      <h2>ultraboost energy {item}</h2>
      <p>experience maximum comfort with responsive boots cushioning built for long-lasting performance</p>
    </div>
  </div>
))}
 {[2].map((item, index) => (
  <div className="panel" key={item}>
    <div className="panel-content">
      <img src={images[index]} alt="" />
      <h2>predator legacy {item}</h2>
      <p>inspired by football legends, crafted for precision, control, and confidence on the pitch</p>
    </div>
  </div>
))}
 {[3].map((item, index) => (
  <div className="panel" key={item}>
    <div className="panel-content">
      <img src={images[index]} alt="" />
      <h2>campus street style {item}</h2>
      <p> classic silhouette redesigned for modern performance</p>
    </div>
  </div>
))}
 {[4].map((item, index) => (
  <div className="panel" key={item}>
    <div className="panel-content">
      <img src={images[index]} alt="" />
      <h2>original collection {item}</h2>
      <p>timeless adidas heritage reimagined for todays generation</p>
    </div>
  </div>
))}
 {[5].map((item, index) => (
  <div className="panel" key={item}>
    <div className="panel-content">
      <img src={images[index]} alt="" />
      <h2>future motion {item}</h2>
      <p>where innovation meets creativity then pushing movement beyond limits</p>
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
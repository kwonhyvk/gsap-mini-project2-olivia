import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function StatsSection() {
  useEffect(() => {
    gsap.from('.stat-card', {
      scrollTrigger: {
        trigger: '.stats',
        start: 'top 70%'
      },
      opacity: 0,
      y: 100,
      stagger: 0.3,
      duration: 1
    })

    const counters = document.querySelectorAll('.number')

    counters.forEach((counter) => {
      const target = +counter.dataset.target

      gsap.to(counter, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%'
        }
      })
    })
  }, [])

  return (
    <section className="stats">
      <h2>Statistics</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h1 className="number" data-target="120">
            0
          </h1>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h1 className="number" data-target="80">
            0
          </h1>
          <p>Clients</p>
        </div>

        <div className="stat-card">
          <h1 className="number" data-target="15">
            0
          </h1>
          <p>Awards</p>
        </div>
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }
      `}</style>
    </section>
  )
}

export default StatsSection
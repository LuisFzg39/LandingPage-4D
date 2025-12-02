import RazeImage from '../../assets/RazeSection2-img.svg'
import ReynaImage from '../../assets/ReynaSection2-img.svg'
import './SecondSection.css'

const SecondSection = () => {
  return (
    <section className="second-section" aria-labelledby="second-section-title">
      <div className="second-section__wrapper">

        <div className="second-section__art">
          <img
            src={ReynaImage}
            alt="Reyna standing confidently"
            className="second-section__agent second-section__agent--reyna"
          />
          <img
            src={RazeImage}
            alt="Raze ready for battle"
            className="second-section__agent second-section__agent--raze"
          />
        </div>
        <div className="second-section__content">
          <h2 className="second-section__title" id="second-section-title">
            PROVE YOUR SKILL
          </h2>
          <h3 className="second-section__subtitle">CREATIVITY IS YOUR GREATEST WEAPON.</h3>
          <p className="second-section__body">
            More than guns and bullets, you&apos;ll choose an Agent armed with adaptive,
            swift, and lethal abilities that create opportunities to let your gunplay
            shine. No two Agents play alike, just as no two highlight reels will look the
            same.
          </p>
          <button className="second-section__cta" type="button">
            DOWNLOAD NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default SecondSection


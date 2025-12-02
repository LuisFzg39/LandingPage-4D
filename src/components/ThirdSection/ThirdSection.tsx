import './ThirdSection.css'
import SectionThreeImage from '../../assets/Section3-img.svg'
import PlaceWord from '../../assets/PLACE.svg'

const ThirdSection = () => {
  return (
    <section className="third-section" aria-labelledby="third-section-heading">
      <div className="third-section__wrapper">
        <div className="third-section__content">
          <img className="third-section__word" src={PlaceWord} aria-hidden="true" alt="" />
          <h2 id="third-section-heading" className="third-section__title">
            YOUR MAPS
          </h2>
          <h3 className="third-section__subtitle">FIGHT AROUND THE WORLD.</h3>
          <p className="third-section__body">
            Each map is a playground to showcase your creative thinking. Purpose-built for
            team strategies, spectacular plays, and clutch moments. Make the play others
            will imitate for years to come.
          </p>
          <button className="third-section__cta" type="button">
            Explore
          </button>
        </div>
        <div className="third-section__art">
          <img src={SectionThreeImage} alt="Valorant map scenery" />
        </div>
      </div>
    </section>
  )
}

export default ThirdSection


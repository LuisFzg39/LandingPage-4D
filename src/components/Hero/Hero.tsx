import ValorantTitle from '../../assets/Valorant-title.svg'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__inner">
        <img
          src={ValorantTitle}
          alt="Valorant"
          id="hero-heading"
          className="hero__title"
        />
        <button className="hero__cta" type="button">
          <span>Play now</span>
        </button>
      </div>
    </section>
  )
}

export default Hero

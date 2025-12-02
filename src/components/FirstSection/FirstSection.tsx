import FirstSectionArt from '../../assets/FirstSection-element.svg'
import './FirstSection.css'

const FirstSection = () => {
  return (
    <section className="first-section" aria-labelledby="first-section-title">
      <div className="first-section__wrapper">
        <div className="first-section__content">
          <h2 className="first-section__title" id="first-section-title">
            WE ARE VALORANT
          </h2>
          <h3 className="first-section__subtitle">DEFY THE LIMITS</h3>
          <p className="first-section__body">
            Blend your style and experience on a global, competitive stage. You have 13
            rounds to attack and defend your side using sharp gunplay and tactical
            abilities. And, with one life per-round, you'll need to think faster than your
            opponent if you want to survive. Take on foes across Competitive and
            Unranked modes as well as Deathmatch and Spike Rush.
          </p>
          <button className="first-section__cta" type="button">
            LEARN THE GAME
          </button>
        </div>
        <div className="first-section__art">
          <img src={FirstSectionArt} alt="Valorant agents in action" />
        </div>
      </div>
    </section>
  )
}

export default FirstSection


import BrimstonePfp from '../../assets/Brimstone/Brimstone-pfp.svg'
import JettPfp from '../../assets/Jett/Jett-pfp.svg'
import PhoenixFullBody from '../../assets/Phoenix/Phoenix-fullbody.svg'
import PhoenixPfp from '../../assets/Phoenix/Phoenix-pfp.svg'
import PhoenixAbility1 from '../../assets/Phoenix/PhoenixAbility-1.svg'
import PhoenixAbility2 from '../../assets/Phoenix/PhoenixAbility-2.svg'
import PhoenixAbility3 from '../../assets/Phoenix/PhoenixAbility-3.svg'
import PhoenixAbility4 from '../../assets/Phoenix/PhoenixAbility-4.svg'
import SagePfp from '../../assets/Sage/Sage-pfp.svg'
import ViperPfp from '../../assets/Viper/Viper-pfp.svg'
import './CharacterSelect.css'

const agentThumbnails = [
  { name: 'Phoenix', image: PhoenixPfp, active: true },
  { name: 'Brimstone', image: BrimstonePfp },
  { name: 'Sage', image: SagePfp },
  { name: 'Viper', image: ViperPfp },
  { name: 'Jett', image: JettPfp },
]

const CharacterSelect = () => {
  return (
    <section className="character-select" aria-labelledby="character-select-heading">
      <div className="character-select__wrapper">
        <div className="character-select__sidebar">
          <span className="character-select__label">AGENT</span>
          <div className="character-select__list">
            {agentThumbnails.map((agent) => (
              <button
                key={agent.name}
                className={`character-select__thumb ${agent.active ? 'is-active' : ''}`}
                type="button"
                aria-label={agent.name}
              >
                <img src={agent.image} alt="" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        <div className="character-select__content">
          <header className="character-select__header">
            <div>
              <h2 id="character-select-heading" className="character-select__title">
                PHOENIX
              </h2>
            </div>
          </header>

          <div className="character-select__abilities">
            {[PhoenixAbility1, PhoenixAbility2, PhoenixAbility3, PhoenixAbility4].map(
              (icon, index) => (
                <img key={index} src={icon} alt="" aria-hidden="true" />
              ),
            )}
          </div>

          <div className="character-select__details">
            <div className="character-select__meta">
              <p className="character-select__meta-label">//Role</p>
              <p className="character-select__meta-value">DUELIST✦</p>
            </div>
            <div className="character-select__meta">
              <p className="character-select__meta-label">//Biography</p>
              <p className="character-select__body">
                Hailing from the U.K., Phoenix&apos;s star power shines through in his fighting
                style, igniting the battlefield with flash and flare. Whether he&apos;s got
                backup or not, he&apos;ll rush into a fight on his own terms.
              </p>
            </div>
          </div>
        </div>

        <div className="character-select__art">
          <img src={PhoenixFullBody} alt="Phoenix agent full body illustration" />
        </div>
      </div>
    </section>
  )
}

export default CharacterSelect


import RiotGamesLogo from '../../assets/RiotGames-logo.svg'
import ValorantLogo from '../../assets/Valorant-logo.svg'
import SearchIcon from '../../assets/Search-icon.svg'
import WebIcon from '../../assets/Web-icon.svg'
import './Navbar.css'

const navItems = [
  { label: 'GAME INFO', dropdown: true },
  { label: 'MEDIA' },
  { label: 'NEWS' },
  { label: 'SUPPORT', dropdown: true },
  { label: 'OUR SOCIALS', dropdown: true },
  { label: 'ESPORTS', external: true },
  { label: 'MORE', dropdown: true },
]

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__branding">
        <img src={RiotGamesLogo} alt="Riot Games" className="navbar__logo" />
        <span className="navbar__divider" />
        <img src={ValorantLogo} alt="Valorant" className="navbar__logo" />
      </div>

      <nav className="navbar__links" aria-label="Primary">
        {navItems.map((item) => (
          <button key={item.label} className="navbar__link" type="button">
            <span>{item.label}</span>
            {item.dropdown && <span className="navbar__caret">▾</span>}
            {item.external && <span className="navbar__external">↗</span>}
          </button>
        ))}
      </nav>

      <div className="navbar__actions">
        <button className="navbar__icon-btn" type="button" aria-label="Search">
          <img id="search-icon" src={SearchIcon} alt="" aria-hidden="true" />
        </button>
        <button className="navbar__icon-btn" type="button" aria-label="Change region">
          <img src={WebIcon} alt="" aria-hidden="true" />
        </button>
        <button className="navbar__cta" type="button">
          PLAY NOW
        </button>
      </div>
    </header>
  )
}

export default Navbar


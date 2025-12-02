import './Maps.css'
import AscentMap from '../../assets/Maps/Ascent-map.svg'
import BindMap from '../../assets/Maps/Bind-map.svg'
import HavenMap from '../../assets/Maps/Haven-map.svg'
import SplitMap from '../../assets/Maps/Split-map.svg'

const maps = [
  { name: 'Ascent', image: AscentMap },
  { name: 'Bind', image: BindMap },
  { name: 'Haven', image: HavenMap },
  { name: 'Split', image: SplitMap },
]

const Maps = () => {
  return (
    <section className="maps-section" aria-label="Valorant maps gallery">
      <div className="maps-grid">
        {maps.map((map) => (
          <div key={map.name} className="map-card">
            <img src={map.image} alt={`${map.name} map`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Maps


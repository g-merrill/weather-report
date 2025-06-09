import './WeatherCard.css'

const WEATHER_EMOJI = { Windy: "🍃", Sunny: "☀️", Cloudy: "☁️", Rainy: "☔️" }

const WeatherCard = ({ dayData }) => {
	const { date, weatherType, temperature } = dayData
	return <div className="weatherCard">
    <h5 className='weatherCard-date'>{date}</h5>
    <p className='weatherCard-icon'>{WEATHER_EMOJI[weatherType]}</p>
    <p className='weatherCard-type'>{weatherType}</p>
    <p className='weatherCard-temp'>{temperature}°</p>
  </div>
}
export default WeatherCard

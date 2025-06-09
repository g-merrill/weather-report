import './WeatherCard.css'

const WEATHER_EMOJI = { Windy: "🍃", Sunny: "☀️", Cloudy: "☁️", Rainy: "☔️" }

const WeatherCard = ({ dayData }) => {
	const { date, weatherType, temperature } = dayData
	return <div className="weatherCard">
    <h5>{date}</h5>
    <p>{WEATHER_EMOJI[weatherType]}</p>
    <p>{weatherType}</p>
    <p>{temperature}°</p>
  </div>
}
export default WeatherCard

import WeatherCard from "./WeatherCard"
import './WeatherResults.css'

const WeatherResults = ({ city, forecast }) => {
	return (
		<>
			<p>Location: {city}</p>
			<div className="forecastCtnr">
				{forecast.map((dayData, idx) => (
					<WeatherCard key={idx} dayData={dayData} />
				))}
			</div>
		</>
	)
}
export default WeatherResults

import { useState } from "react"
import "./App.css"
import Footer from "./Footer"
import Header from "./Header"
import SearchBar from "./SearchBar"
import WeatherCard from "./WeatherCard"
import WeatherResults from "./WeatherResults"
import { cities } from "./utils/data"
import Background from "./Background"

function App() {
	const [selectedCity, setSelectedCity] = useState("New York City")

	const handleSearch = () => {
		console.log("handleSearch btn clicked!")
	}
	return (
		<div className="App">
			<Background />
			<div className="foreground">
				<Header />
				<SearchBar handleSearch={handleSearch} />
				<WeatherResults
					city={selectedCity}
					forecast={cities.find((city) => city.name === selectedCity).forecast}
				/>
				<Footer />
			</div>
		</div>
	)
}

export default App

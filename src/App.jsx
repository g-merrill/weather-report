import { useState } from "react"
import "./App.css"
import Footer from "./Footer"
import Header from "./Header"
import SearchBar from "./SearchBar"
import WeatherCard from "./WeatherCard"
import WeatherResults from "./WeatherResults"

const cities = [
	{
		name: "New York City",
		forecast: [
			{
				date: "3-14-25",
				weatherType: "Windy",
				temperature: 57.34,
			},
			{
				date: "3-15-25",
				weatherType: "Sunny",
				temperature: 72.5,
			},
			{
				date: "3-16-25",
				weatherType: "Cloudy",
				temperature: 63.91,
			},
			{
				date: "3-17-25",
				weatherType: "Rainy",
				temperature: 64.63,
			},
		],
	},
	{
		name: "Los Angeles",
		forecast: [
			{
				date: "3-14-25",
				weatherType: "Rainy",
				temperature: 64.63,
			},
			{
				date: "3-15-25",
				weatherType: "Windy",
				temperature: 57.34,
			},
			{
				date: "3-16-25",
				weatherType: "Sunny",
				temperature: 72.5,
			},
			{
				date: "3-17-25",
				weatherType: "Cloudy",
				temperature: 63.91,
			},
		],
	},
	{
		name: "Chicago",
		forecast: [
			{
				date: "3-14-25",
				weatherType: "Cloudy",
				temperature: 63.91,
			},
			{
				date: "3-15-25",
				weatherType: "Rainy",
				temperature: 64.63,
			},
			{
				date: "3-16-25",
				weatherType: "Windy",
				temperature: 57.34,
			},
			{
				date: "3-17-25",
				weatherType: "Sunny",
				temperature: 72.5,
			},
		],
	},
	{
		name: "Houston",
		forecast: [
			{
				date: "3-14-25",
				weatherType: "Sunny",
				temperature: 72.5,
			},
			{
				date: "3-15-25",
				weatherType: "Cloudy",
				temperature: 63.91,
			},
			{
				date: "3-16-25",
				weatherType: "Rainy",
				temperature: 64.63,
			},
			{
				date: "3-17-25",
				weatherType: "Windy",
				temperature: 57.34,
			},
		],
	},
]

function App() {
	const [selectedCity, setSelectedCity] = useState("New York City")

	const handleSearch = () => {
		console.log("handleSearch btn clicked!")
	}
	return (
		<>
			<Header />
			<SearchBar handleSearch={handleSearch} />
			<WeatherResults
				city={selectedCity}
				forecast={cities.find((city) => city.name === selectedCity).forecast}
			/>
			<Footer />
		</>
	)
}

export default App

import React, {useState} from "react";
import axios from "axios";

function App() {

	const [data,setData] = useState({})
	const [location, setLocation] = useState("")
  	const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=21d803bef8a8c07fa2307d161d5e7aff'

	const searchLocation = (event) => {
		if(event.key === 'Enter') {
			axios.get(url).then((response) => {
			setData(response.data)
			console.log(response.data);
		})
	}	
}


  return (
    <div className="app">
		<div className="search">
			<input 
			value={location}
			onChange={event => setLocation(event.target.value)}
			onKeyPress={searchLocation}
			placeholder="Enter Location"
			type="text"
			/>
		</div>
		<div className="container">
			<div className="top">
				<div className="location">
					<p>Dallas</p>
				</div>
				<div className="temp">
					<h1>22 Degrees</h1>
				</div>
				<div className="description">
					<p>Cloudy</p>
				</div>
			</div>
			<div className="bottom">
				<div className="feels-like">
					<p className="bold">22</p>
					<p>Feels Like</p>
				</div>
				<div className="humidity">
					<p className="bold">20%</p>
					<p>Humidity</p>
				</div>
				<div className="wind">
					<p className="bold">12 KM/H</p>
					<p>Wind Speed</p>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;

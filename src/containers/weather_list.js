import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component{
renderWeather(cityData){
  const name = cityData.city.name;
  const temps = cityData.list.map(weather => weather.main.temp);
  const pressures = cityData.list.map(weather => weather.main.pressure);
  const humidities = cityData.list.map(weather => weather.main.humidity);
  //ES5
  // const lon = cityData.city.coord.lon;
  // const lat = cityData.city.coord.lat;
  //ES6
  const {lon,lat} = cityData.city.coord;



return(
<tr key={name}>
<td><GoogleMap lon={lon} lat={lat} /></td>
<td className="google-maps"><Chart data={temps} color="orange" units="K"/></td>
<td className="google-maps"><Chart data={pressures} color="green" units="hPa"/></td>
<td className="google-maps"><Chart data={humidities} color="blue" units="%"/></td>
</tr>
  );
}

render(){
return (
<table className="table table-hover">
<thead>
<tr>
<th>City</th>
<th>Temprature (K)</th>
<th>Pressure (hPa)</th>
<th>Humidity (%)</th>
</tr>
</thead>
<tbody>
{this.props.weather.map(this.renderWeather)}
</tbody>
 </table>
 );
}
}


function mapStateToprops({weather}){
  return { weather };
}

export default connect(mapStateToprops)(WeatherList);
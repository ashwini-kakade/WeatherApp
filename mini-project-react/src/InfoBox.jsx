import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ weatherInfo }) {
  // Image logic for the Card top
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1000";
  const COLD_URL = "https://images.unsplash.com/photo-1528191710846-99b8717a2830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvbGR8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1561915511-a461b5056526?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=https://images.unsplash.com/photo-1561915511-a461b5056526?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="info-box">
      <Card sx={{ width: 345, borderRadius: '15px', boxShadow: 3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            weatherInfo.humidity > 80 ? 
            RAIN_URL 
            :weatherInfo.temp > 15 ? 
            HOT_URL 
            :COLD_URL}
          title="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {weatherInfo.city}
            <img 
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${weatherInfo.icon}.png`} 
              alt="icon" 
            />
          </Typography>

          <div className="weather-info-container">
            <Typography variant="body2" component="div">
              <p>Temperature: <b>{weatherInfo.temp}°C</b></p>
              <p>Humidity: <b>{weatherInfo.humidity}%</b></p>
              <p>Min Temp: <b>{weatherInfo.tempMin}°C</b></p>
              <p>Max Temp: <b>{weatherInfo.tempMax}°C</b></p>
              <p>Feels Like: <b>{weatherInfo.feelsLike}°C</b></p>
              
              <Typography variant="body2" className="description-text">
                The weather is <strong>{weatherInfo.description}</strong>
              </Typography>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
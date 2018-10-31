import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "20388dbfdd3930c2237e557be0a47b4d";

class App extends React.Component {
  state = {
    temperature: undefined,
    temp_min: undefined,
    temp_max: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    speed: undefined,
    despcription: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country) {
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        despcription: data.weather[0].description,
        country: data.sys.country,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        humidity: undefined,
        speed: undefined,
        despcription: undefined,
        country: undefined,
        error: "Please enter the Values!."
      });
    }
  }
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    city= {this.state.city}
                    temperature= {this.state.temperature}
                    temp_min= {this.state.temp_min}
                    temp_max= {this.state.temp_max}
                    humidity= {this.state.humidity}
                    speed= {this.state.speed}
                    despcription= {this.state.description}
                    country= {this.state.country}
                    error= {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;

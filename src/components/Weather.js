import React from "react";
// STATELESS FUNCTIONAL components
/* when returning explicitly one root element you can eliminate the curly braces and just use parenthesis as shown below, also when passing only one argument in the function you can eliminate the wrapping parenthesis */
const Weather = props =>(
  <div className="weather__info">
    { props.city &&
      <p className="weather__key">City:
      <span className="weather__value">{props.city}</span></p>
    }
    { props.temperature &&
      <p className="weather__key">Temperature:
      <span className="weather__value">{props.temperature}</span></p>
    }
    { props.humidity &&
      <p className="weather__key">Humidity:
      <span className="weather__value">{props.humidity}</span></p>
    }
    { props.speed &&
      <p className="weather__key">Wind Speed:
      <span className="weather__value">{props.speed}</span></p>
    }
    { props.description &&
      <p className="weather__key">Conditions:
      <span className="weather__value">{props.description}</span></p>
    }
    { props.country &&
      <p className="weather__key">Country:
      <span className="weather__value">{props.country}</span></p>
    }
    { props.error && <p className="weather__error">{props.error}</p> }
  </div>
);

export default Weather;

/*
 the nomrmal way to write it would be:
  const Weather = (props) => {
    return(
      <div>
        code here .....
      </div>
    );
  };

*/

import React from "react";

export default function Today() {
  return (
    <div className="cityForecast">
      <div className="cityWeather">
        <h1 className="currentCity">Amsterdam</h1>
        <p className="currentWeather">
          Wednesday 18:48, gentle breeze
          <br />
          Humidity: <strong>73%</strong> Wind: <strong>13mph</strong>
        </p>
      </div>

      <div className="temperatureNow">
        ☀️ 21<span class="degrees">ºc</span>
      </div>
    </div>
  );
}

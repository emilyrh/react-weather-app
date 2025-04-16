import React from "react";

export default function Day(props) {
  return (
    <div className="forecastDay">
      {props.weekday} {props.emoji}
      <br />
      <strong>{props.highTemp}ºc</strong> {props.lowTemp}ºc
    </div>
  );
}

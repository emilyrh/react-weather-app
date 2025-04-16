import "./App.css";
import "./fonts.css";
import Today from "./Today";
import Day from "./Day";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Today />
        <div className="weekView">
          <Day weekday="Wed" emoji="☀️" highTemp={22} lowTemp={14} />
          <Day weekday="Thu" emoji="☀️" highTemp={23} lowTemp={14} />
          <Day weekday="Fri" emoji="☀️" highTemp={23} lowTemp={12} />
          <Day weekday="Sat" emoji="☀️" highTemp={23} lowTemp={12} />
          <Day weekday="Sun" emoji="⛅️" highTemp={22} lowTemp={14} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

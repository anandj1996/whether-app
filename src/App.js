import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "49bdccc47cabb07f46b5ae364044a032"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Wether App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control bg-light rounded"  value={inputCity}onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">
          <img src="/icon.png" alt="" className="wethericon" />
          <h5 className="weathorCity">{data?.name}</h5>
          <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
        </div>
      </div>
      }
    </div>
  );
}
export default App;

// 49bdccc47cabb07f46b5ae364044a032

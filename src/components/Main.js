import React from "react";
import './Main.css';


const Main = ({data , clas}) =>{
  
    return(
           <div>
            <div className="container" id="close-box">
                <div className={clas}>
                 <div className="image">
                 {data.condition ? <img src={data.condition.icon}></img> : null}
                 </div>
                 <div className="condition">
                 {data.condition ? <h6>{data.condition.text}</h6> : null}
                 </div>
                 <h2>The Temperature is</h2>
                 <p>{data.temp_c} &deg;C</p>
                 <h5>Humidity: {data.humidity}</h5>
                 <div className="wind">
                 <h5>Wind speed: {data.wind_kph} km/h</h5>
                 </div>
                </div>
            </div>
           </div> 
        
    );
}
export default Main;
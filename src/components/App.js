import React,{useState} from 'react';
import './App.css';
import Main from './Main';

const App= () => {
 const [search,setsearch] = useState('');
 const [data , setdata] = useState([]);
 const [clas , setclas] = useState("card1");
 const submit = (e) =>{
   e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=298248c683124b45b9b54002220206&q=${search}&aqi=no`).then(
      Response => Response.json()
    ).then(
      data => setdata(data.current),
      
    )} 
  return (
    <div>
      <div className="main">
      <h1>Weather</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="Enter the name of city.." value={search} onChange={(e)=>setsearch(e.target.value)}></input>
        <button onClick={()=>setclas("card")}>submit</button>
      </form>
      </div>
      <Main data={data} clas={clas}/>
    </div>
  );
}

export default App;


import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import './bootstrap.css';


// fetch("https://catfact.ninja/fact")
// .then((res)=> res.json())
// .then((data)=>{
//   console.log(data);
// }
// );


function App() {
const [catFact, setCatFact] = useState("");
const fetchCatFact = () => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact); });
}
useEffect(()=>{
  // Axios.get("https://catfact.ninja/fact").then((res) => {
  //   setCatFact(res.data.fact);
  fetchCatFact();
  //});
}, []);


  return(
    <div className="App">
      
      <h1 style={{ padding: 100}}>Generator ciekawostek o kotkach</h1>

     <div style={{ padding: 100}}>
      <div style ={{padding: 20}}>
      <button class="btn btn-lg btn-secondary "  type="button" onClick ={fetchCatFact}>Generate Cat facts</button>
      </div>
      <div style={{width: 50 + "vh", margin: "auto"}}>
      <div class="card text-white bg-info mb-4"  >
      <div class="card-body" style={{ padding: 50}} >  <p> {catFact} </p>   </div>
      </div>
      </div> 
    </div>
    </div>
      
  );

}

export default App;

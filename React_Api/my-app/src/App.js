
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
      
      <h1>Generator ciekawostek o kotkach</h1>
     
      <button class="btn btn-lg btn-secondary " type="button" onClick ={fetchCatFact}>Generate Cat facts</button>

      <div class="card text-white bg-info mb-3 20rem " >
      <div class="card-body" >  <p> {catFact} </p>   </div>
      
      </div> 
    </div>
    
      
  );

}

export default App;


import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";

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
      <button onClick ={fetchCatFact}>Generate Cat facts</button>
      <p> {catFact} </p>
      </div>
  );

}

export default App;

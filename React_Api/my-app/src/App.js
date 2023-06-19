
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

useEffect(()=>{
  Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact);
  });
}, []);


  return(
    <div className="App">
      <button>Generate Cat facts</button>
      <p> {catFact} </p>
      </div>
  );

}

export default App;


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
      
      <h1 style={{ padding: 20}}>Curious cats</h1>

      <div style={{ padding: 40}}>
      <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light" style={{width: 50 + "vh", margin: "auto"}}>
         <div style={{ margin: "auto"}}>//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\</div> 
      </nav>
      </div>


    

     <div style={{ padding: 40}}>

        <div style ={{padding: 10}}>
          <button class="btn btn-lg btn-secondary "  type="button" onClick ={fetchCatFact}>Generate Cat facts</button>
        </div>
        <div style={{width: 60 + "vh", margin: "auto"}}>
          <div class="card text-white bg-info mb-4"  >
          <div class="card-body" style={{ padding: 50}} >  <p> {catFact} </p>   </div>
          </div>
          </div> 
       </div>

       <figure class="text-center">
            <blockquote class="blockquote">
             <p class="mb-0"> CLICK the button to generate some facts :3 </p>
  
           </blockquote>
            <figcaption class="blockquote-footer">
                      ps.just look up
            </figcaption>
          </figure>

          <div style={{ padding: 40}}>
      <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light" style={{width: 50 + "vh", margin: "auto"}}>
         <div style={{ margin: "auto"}}>//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\</div> 
      </nav>
      </div>

    </div>
      
  );

}

export default App;


import './App.css';
import Axios from Axios;

fetch("https://catfact.ninja/fact")
.then((res)=> res.json())
.then((data)=>{
  console.log(data);
}
);

Axios.get("https://catfact.ninja/fact")
.then((res) => res.json())
.then((data) =>{
  console.log(data);
});

function App() {
  return(
    <div className="App">
      <button>Generate Cat facts</button>
      <p> </p>
      </div>
  );

}

export default App;

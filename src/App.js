import { useEffect, useState } from "react";
import "./App.css";
import Astrix from "./components/Astrix";
import MainComponent from "./components/MainComponent";
import SideComponent from "./components/SideComponent";

function App() {
  const [state, setState] = useState(true);
  const [preloader, setPreloader] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4000);
    setTimeout(() => {
      const showEle = document.querySelector(".container");
      showEle.classList.add("move-up")
    }, 4100);
    setTimeout(() => {
      const showEle = document.querySelector(".container");
      showEle.classList.remove("move-up")
      setPreloader(false);
    }, 5000);
  }, []);


  return (
    <div className="App">
      {preloader && <Astrix />}
      {show && (
        <div className="container">
          <MainComponent state={state} setState={setState} />
          <SideComponent state={state} />
        </div>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Astrix from "./components/Astrix";
import MainComponent from "./components/MainComponent";
import SideComponent from "./components/SideComponent";

function App() {
  // state handles the current state of app based on toggle
  const [state, setState] = useState(true);
  const [preloader, setPreloader] = useState(true);
  const [show, setShow] = useState(false);

  // useEffect for handling animations and rendering components conditionally
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4000);
    setTimeout(() => {
      const showEle = document.querySelector(".container");
      showEle?.classList.add("move-up");
    }, 4100);
    setTimeout(() => {
      const showEle = document.querySelector(".container");
      showEle?.classList.remove("move-up");
      setPreloader(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {/* Astrix is the preloader */}
      {preloader && <Astrix />}
      {show && (
        <div className="container">
          {/* Main component contains the leftmost part of design including carousel and event/collection toggle */}
          <MainComponent state={state} setState={setState} />
          {/* Side component includes the info based on event/collection */}
          <SideComponent state={state} />
        </div>
      )}
    </div>
  );
}

export default App;

import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { useRef } from "react";

import gsap from "https://esm.sh/gsap";
import { useGSAP } from "https://esm.sh/@gsap/react";
import './App.css';


function App() {
  const app = useRef();
  const circle = useRef();
  
  useGSAP(() => {
    // use selectors...
    gsap.to(".box", { rotation: "+=360" });
    
    // or refs...
    gsap.to(circle.current, { rotation: "-=360" });
  
  }, {scope: app}); // <-- scope for selector text (optional)

  return (
    <div ref={app} className="App">
      <div className="box gradient-blue">selector</div>
      <div className="circle gradient-green" ref={circle}>Ref</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
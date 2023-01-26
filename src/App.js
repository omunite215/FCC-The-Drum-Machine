import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [currentpad, setcurrentpad] = useState("");
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      sound(event.key.toUpperCase())
    });
  },[])

  const drumPad = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const sound = (selector) => {
    const audio = document.getElementById(selector);
    audio.play();
    setcurrentpad(selector);
  }
  return (
    <div className="App">
      <div id="drum-machine">
        <div className="bg-primary p-4 border border-primary-subtle rounded-3 d-flex">
        <div id="display" className="bg-success text-light me-4 h-25 w-50 p-2 border border-success-subtle rounded-3">Active Pad: {currentpad}</div>

        <div className="drum-pads">
          {drumPad.map((drumPad) => (
            <div key={drumPad.src} onClick={() => {
              sound(drumPad.text);
            }} className="drum-pad" id={drumPad.src}>
              {drumPad.text}
              <audio
                className="clip"
                id={drumPad.text}
                src={drumPad.src}
              ></audio>
            </div>
          ))}
        </div>
        
        </div>
       <h3 className="text-center">by Om Patel</h3> 
      </div>
      
    </div>
  );
}

export default App;

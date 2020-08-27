import React from 'react';
import './App.css';

function App() {
  
  const [displayText, setDisplayText] = React.useState("")
  
  const drums = {
    q: "Kick",
    w: "Snare",
    e: "Closed Hihat",
    a: "Open Hihat",
    s: "Ride Cymbal",
    d: "Tom",
    z: "Rimshot",
    x: "Clap",
    c: "Cowbell"
  }
  
  document.addEventListener('keydown', handleKey)
  
  function handleKey(event) {
    event.preventDefault()
    if ("qweasdzxc".includes(event.key.toLowerCase())) {
      document.getElementById(event.key.toUpperCase()).play()
      setDisplayText(drums[event.key.toLowerCase()])
    }
  }                
                            
  function handleClick(event) {
    event.preventDefault()
    if (document.getElementById(event.target.value)) {
      document.getElementById(event.target.value).play()
      setDisplayText(drums[event.target.value.toLowerCase()])
    }
  }
  
  return (
    <div id="drum-machine">
      <h1 id="title">
        Mike's Drum Machine!
      </h1>
      <div id="display">
        {displayText}
      </div>
      <div id="drum-pads">
        <button className="drum-pad" id="bass-drum" value="Q" onClick={handleClick}>
          {drums.q}<br/>
          <div className="key">Q</div>
          <audio preload="auto" src="http://mikeshecket.com/drums/808-Kicks01.wav" type="audio/wav" className="clip" id="Q">
          </audio>
        </button>
        <button className="drum-pad" id="snare" value="W" onClick={handleClick}>
        {drums.w}<br/>
          <div className="key">W</div>
          <audio preload="auto" src="http://mikeshecket.com/drums/808-Snare01.wav" type="audio/wav" className="clip" id="W">
          </audio>
        </button>
        <button className="drum-pad" id="closed-hihat" value="E" onClick={handleClick}>
          {drums.e}<br/>
          <div className="key">E</div>
          <audio preload="auto" src="http://mikeshecket.com/drums/808-HiHats01.wav" type="audio/wav" className="clip" id="E">
          </audio>
        </button>
        <button className="drum-pad" id="open-hihat" value="A" onClick={handleClick}>
          {drums.a}<br/>
          <div className="key">A</div>
          <audio preload="auto" src="http://mikeshecket.com/drums/808-OpenHiHats01.wav" type="audio/wav" className="clip" id="A">
          </audio>
        </button>
        <button className="drum-pad" id="ride-cymbal" value="S" onClick={handleClick}>
          {drums.s}<br/>
          <div className="key">S</div>
          <audio preload="auto" src="http://mikeshecket.com/drums/808-Ride1.wav" type="audio/wav" className="clip" id="S">
          </audio>
        </button>
        <button className="drum-pad" id="tom" value="D" onClick={handleClick}>
          {drums.d}<br/>
          <div className="key">D</div>
          <audio preload="auto" src="http://mikeshecket.com/drums/808-Tom1.wav" type="audio/wav" className="clip" id="D">
          </audio>
        </button>
        <button className="drum-pad" id="rimshot" value="Z" onClick={handleClick}>
          {drums.z}<br/>
          <div className="key">Z</div>
          <audio preload="auto" src="http://mikeshecket.com/drums/808-Rim1.wav" type="audio/wav" className="clip" id="Z">
          </audio>
        </button>
        <button className="drum-pad" id="clap" value="X" onClick={handleClick}>
          {drums.x}<br/>
          <div className="key">X</div>
          <audio preload="auto" src="http://mikeshecket.com/drums/808-Clap01.wav" type="audio/wav" className="clip" id="X">
              </audio>
        </button>
        <button className="drum-pad" id="cowbell" value="C" onClick={handleClick}>
          {drums.c}<br/>
          <div className="key">C</div>
          <audio preload="auto" src="http://mikeshecket.com/drums/808-Cowbell1.wav" type="audio/wav" className="clip" id="C">
          </audio>
        </button>
        
      </div>
    </div>
  )
}

export default App;

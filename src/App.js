import React from 'react';
import './App.css';

import Box from './Box';

import track1 from './assets/1.wav';
import track2 from './assets/2.wav';
import track3 from './assets/3.wav';
import track4 from './assets/4.wav';
import track5 from './assets/5.wav';
import track6 from './assets/6.wav';
import track7 from './assets/7.mp3';
import track8 from './assets/8.wav';
import track9 from './assets/9.wav';
import track10 from './assets/10.wav';
import track11 from './assets/11.mp3';
import track12 from './assets/12.wav';
import track13 from './assets/13.wav';
import track14 from './assets/14.wav';
import track15 from './assets/15.wav';
import track16 from './assets/16.wav';

const assets = [
  {name:track1,text:1},
  {name:track2,text:2},
  {name:track3,text:3},
  {name:track4,text:4},
  {name:track5,text:5},
  {name:track6,text:6},
  {name:track7,text:7},
  {name:track8,text:8},
  {name:track9,text:9},
  {name:track10,text:10},
  {name:track11,text:11},
  {name:track12,text:12},
  {name:track13,text:13},
  {name:track14,text:14},
  {name:track15,text:15},
  {name:track16,text:16},
];

function App() {
  return (
    <div className="App">
      <h1 className="Text">Sound Pad</h1>
      {assets.map(track => {

        return <Box track={track}/>

      })}
    
    </div>
  );
}

export default App;

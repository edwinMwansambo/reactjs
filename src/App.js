/*import logo from './logo.svg';
import './App.css';
import 'tailwindcss/tailwind.css';
import CenteredButtons from './Components/CenteredButtons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CenteredButtons />
    </div>
  );
}

export default App;*/

// src/App.js
import React,{useState} from 'react';
//import React from 'react';
import 'tailwindcss/tailwind.css';
import CenteredButtons from './Components/CenteredButtons';
import './index.css';



function App() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener('mousedown', (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div className="App">
      <div className="bg-cobalt h-[30vh] relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-2xl">
          <p className="text-center">You have</p>
          <p className="text-green-500 text-4xl">X X</p>
          <p className="text-center">pending booking requests</p>
        </div>
      </div>
      <div className="bg-white h-[40vh] flex justify-center items-center relative"> {/* White color at the bottom (4 parts) */}
        <CenteredButtons />
        <div className='cursor' style={{
          left: cursorX + 'px',
          top: cursorY + 'px'
        }}></div> {/* Cursor div with inline styles */}
      </div>
    </div>
  );
}

export default App;

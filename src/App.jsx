import './App.css'
import React from 'react'
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./component/Cylinder3d";


function App() {

  return (
    <div className="App">

      <header className="App-header">
        <div className='App-header-left'>
          <img src='./logo.jpg' alt='Image'className='App-header-logo'></img>
          <h1>Web Gallery</h1>
        </div>
        <div className='App-header-right'>
          <h4>Account</h4>
          <h4>Product</h4>
          <h4>Investments</h4>
        </div>
      </header>

      
      <div className="App-3DModel">
        <Canvas>
          <pointLight position={[0, 0, 3]} />
          <ambientLight />
          <Cylinder3d position={[-2, 0, 0]} />
          <Cylinder3d position={[2, 0, 0]} />
        </Canvas>
      </div>



      <div className='Midbutton'>
        <a className='Button' href="https://dribbble.com/">
          Enter
        </a>
      </div>






    </div>
  )
}



export default App

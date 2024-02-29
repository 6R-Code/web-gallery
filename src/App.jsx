import './App.css'
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./component/Cylinder3d";
import Cylinder3d2 from "./component/Cylinder3d2";
import { OrbitControls } from '@react-three/drei';


function App() {

  return (
    <div className="App">

      <header className="App-header">
        <div className='App-header-left'>
          <img src='./logo.jpg' alt='Image'className='App-header-logo'></img>
          <h1>WEB GALLERY</h1>
        </div>
        <div className='App-header-right'>
          <h4>Account</h4>
          <h4>Products</h4>
          <h4>Investments</h4>
        </div>
      </header>

      <div className='App-3DModel-container'>
        <div className="App-3DModel">
          <Canvas>
            <pointLight position={[0, 0, 3]}intensity={10} />
            <pointLight position={[0, 0, -3]}intensity={10} />
            <ambientLight />
            <OrbitControls />
            <Cylinder3d position={[-1.2, 0, 0]} />
            <Cylinder3d2 position={[1.2, 0, 0]} />
          </Canvas>
        </div>
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

import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <>
      <div className='canvasContainer'>
        <Canvas>
          <mesh>
            {/* 球体ジオメトリ*/}
            <sphereGeometry />
            {/* ノーマルマテリアル */}
            <meshNormalMaterial />
          </mesh>
          </Canvas>  
      </div> 
    </>
  )
}

export default App

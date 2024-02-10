import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Leva, useControls } from "leva";
import Experience from "./components/Experience"

function App() {

  const {position, color} = useControls({
    position: {
      x: 0,
      y:0,
      z: 0
    },
    color: "#ff0000",
  })


  return (
    <>
     
      <Leva collapsed />
      <Canvas camera={{ position: [-3, 1.5, 12], fov: 30 }}>
          <color attach={"background"} args={["#171720"]} />
          <fog attach={"fog"} args={[ "#171720", 20, 30]} />
        <OrbitControls />
        <Experience />
        <mesh position={[position.x, position.y, position.z]}>
          <boxGeometry />
          <meshBasicMaterial color={color} />
        </mesh>
      </Canvas>

    </>
  )
}

export default App

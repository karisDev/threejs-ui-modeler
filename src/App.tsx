import {
  MeshObject,
  GeometryType,
  SceneObject,
} from "./components/three/interfaces";
import ThreeCanvas from "./components/three/ThreeCanvas";
import CanvasController from "./components/UI/CanvasControls/CanvasController";
import TopNav from "./components/UI/CanvasControls/TopNav";

function App() {
  return (
    <>
      <CanvasController />
    </>
  );
}

export default App;

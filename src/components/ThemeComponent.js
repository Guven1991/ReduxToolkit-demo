import { useState } from "react";
import { useDispatch } from "react-redux";
import {setTheme} from '../store/feature/theme/ThemeSlice';


function ThemeComponent() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>ThemeComponent</h1>
      <div>
        <input type="color" onChange={(e) => setColor(e.target.value)} />
      <button onClick={(e)=> {dispatch(setTheme(color))}} style={{ marginLeft: "10px" }}>Set Color</button>
      </div>
      
    </div>
  );
}

export default ThemeComponent;

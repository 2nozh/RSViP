
import Dropdown from "../Dropdown/Dropdown";
import figure from "./figure.png"
import "./Testing.css"

export default () => (
  <div className="Reader">  
  <div className="Settings">
    <div className="Upload">
        <Dropdown/>
    </div>
  </div>  
  <img className="Image" src={figure} />
  </div>
);
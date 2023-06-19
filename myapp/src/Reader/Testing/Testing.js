
import Dropdown from "../Dropdown/Dropdown";
import figure from "./figure.png"
import "./Testing.css"
import HorizontalLinearStepper from "./Stepper"

export default () => (
  <div className="Vertical">  
  <div className="Horisontal">
    <div className="Upload">
        <Dropdown/>
    </div>
    <img className="Image" src={figure} />
  </div>  
  <div className="Stepper">
  <HorizontalLinearStepper/>
  </div>
  </div>
);
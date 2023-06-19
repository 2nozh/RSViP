import ViewArea from "./ViewArea/ViewArea";
import Dropdown from "./Dropdown/Dropdown";
import Settings from "./Settings/Settings";
import './Reader.css'

export default () => (
  <div className="Reader">  
  <div className="Settings">
    <div className="Upload">
        <Dropdown/>
    </div>
  </div>
  <div className="Read">
      <ViewArea/>
  </div>   
  </div>
);
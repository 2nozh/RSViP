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
        <Settings/>
    </div>
    <div className="Read">
        <h3>Смотри сюда</h3>
        <ViewArea/>
    </div>   
  </div>
);
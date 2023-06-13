import ViewArea from "./ViewArea/ViewArea";
import Dropdown from "./Dropdown/Dropdown";

export default () => (
  <div>
    <div>
      <Dropdown/>
    </div>
    <hr/>
      <div>
        <h3>Смотри сюда</h3>
        <ViewArea/>
      </div>
    <hr/>
      <div>
        <h3>Параметры</h3>
        <p>масштаб</p>
        <p>режим</p>
        <p>скорость</p>
        <p>применить</p>
      </div>
  </div>
);
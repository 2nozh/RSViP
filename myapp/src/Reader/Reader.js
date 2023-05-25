import ViewArea from "./ViewArea/ViewArea";


export default () => (
  <div>
      <div>
        <h3>Выберите источник</h3>
        <p>Путь до файла</p>
        <p>Строка для url</p>
        <p>кнопка Загрузить</p>
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
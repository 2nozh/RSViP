import './Landing.scss'
import $ from 'jquery';

function Landing() {
    console.log("starting");
    console.log($(".e-button").hasClass("open"))
    return (
        <div className="m-dropdown">
            <div onClick={slide}  className="e-button open">
                Источник
                <div  className="e-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className="e-list">
                <li><a href="#">Путь до файла</a></li>
                <li><a href="#">Строка для url</a></li>
            </ul>
            <h2></h2>
            <button className='e-download-button'>Загрузить</button>
        </div>
    )
}
export default Landing

function slide(){
    console.log("sliding")
    console.log($(".e-button").hasClass("open"))
    if ($(".e-button").hasClass("open")) {
            $(".e-list").slideUp(function() {
                $(".e-button").removeClass("open");
                console.log("open removed");
            });
        } else {
            $(".e-button").addClass("open");
            console.log("open added");
            setTimeout(function() {
                $(".e-list").stop().slideDown();
            }, 200);
        }
}

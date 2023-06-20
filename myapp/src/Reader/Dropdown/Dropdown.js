import './Dropdown.scss'
import $ from 'jquery';

function Dropdown() {
    console.log("starting");
    console.log($(".e-button").hasClass("open"))
    return (
        <div className="m-dropdown">
            <div onClick={slide}  className="e-button open">
                
                <div  className="e-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className="e-list">
                <li><a href="#">Загрузить файл</a></li>
                <li><a href="#">Режим</a></li>
                <li><a href="#">Скорость</a></li>
                <li><a href="#">Масштаб</a></li>
            </ul>
        </div>
    )
}
export default Dropdown

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


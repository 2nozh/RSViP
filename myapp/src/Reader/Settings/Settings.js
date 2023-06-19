import './Settings.scss'
import $ from 'jquery';

function Settings() {
    console.log("starting");
    console.log($(".e-button").hasClass("settings-oppen"))
    return (
        <div className="m-dropdown">
            <div onClick={slide}  className="e-button settings-oppen">
                Настройки
                <div  className="e-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className="e-list">
                <li><a href="#">Масштаб</a></li>
                <li><a href="#">Режим</a></li>
                <li><a href="#">Скорость</a></li>
                <li><a href="#">Применить</a></li>
            </ul>
        </div>
    )
}
export default Settings;

function slide(){
    console.log("sliding")
    console.log($(".e-button").hasClass("settings-oppen"))
    if ($(".e-button").hasClass("settings-oppen")) {
            $(".e-list").slideUp(function() {
                $(".e-button").removeClass("settings-oppen");
                console.log("settings-oppen removed");
            });
        } else {
            $(".e-button").addClass("settings-oppen");
            console.log("settings-oppen added");
            setTimeout(function() {
                $(".e-list").stop().slideDown();
            }, 200);
        }
}


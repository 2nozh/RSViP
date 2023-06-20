import './Landing.scss'
import $ from 'jquery';
import logo from "./Logo.png"

function Landing() {
    console.log("starting");
    console.log($(".e-button").hasClass("open"))
    return (
        <div className="Landing">
            <h2>О проекте</h2>
            <img src={logo} />
        </div>
    )
}
export default Landing

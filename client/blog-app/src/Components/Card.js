import carimage from "../resources/images/car.jpg";

export default function Card(){

    return(
        <div className = "card">
            <div className = "card-image">
                <img src = {carimage} alt = "post-image"></img>
            </div>
            <div className = 'card-info'>
                <a href = "/temp" className = "card-title">Card Title</a>
                <p className = "card-author-time">author time</p>
                <p className = "card-descriptiom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div></div>
        </div>
    )
}
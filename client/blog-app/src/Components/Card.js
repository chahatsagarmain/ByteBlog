import { Link } from "react-router-dom"

export default function Card({props , key}){

    return(
        <div className = "card" key={key}>
            <div className = "card-image">
                <img src = {"http://localhost:8000/static/" + props.image} alt = "post-image"></img>
            </div>
            <div className = 'card-info'>
                <Link to={"/post/"+ props._id} className="card-title"><p>{props.title}</p></Link>
                <p className = "card-author-time">{props.author} {props.createdOn}</p>
                <p className = "card-descriptiom">{props.summary}</p>
            </div>
            <div></div>
        </div>
    )
}
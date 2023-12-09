import { Link } from "react-router-dom"
import dislike from './../resources/icons/dislike.png';
import like from './../resources/icons/like.png';
import liked from './../resources/icons/liked.png';
import disliked from './../resources/icons/disliked.png';

export default function Card({props , key}){

    return(
        <div className = "card" key={key}>
            <div className = "card-image">
                <img src = {"http://localhost:8000/static/" + props.image} alt = "post-image"></img>
            </div>
            <div className = 'card-info'>
                <div className="title-like-dislike">
                <Link to={"/post/"+ props._id} className="card-title"><p>{props.title}</p></Link>
                <div className="like-dislike">
                    <img></img>
                    <img></img>
                </div>
                </div>
                <p className = "card-author-time">{props.author} {props.createdOn}</p>
                <p className = "card-descriptiom">{props.summary}</p>
            </div>
            <div></div>
        </div>
    )
}
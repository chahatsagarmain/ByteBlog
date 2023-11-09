import { Link } from "react-router-dom";
import like from "./../resources/icons/like.png";
import liked from "./../resources/icons/liked.png";
import dislike from "./../resources/icons/dislike.png";
import disliked from "./../resources/icons/disliked.png";

export default function Card({ props, key }) {

    return (
        <div className="card" key={key}>
            <div className="card-image">
                <img src={"http://localhost:8000/static/" + props.image} alt="post-image"></img>
            </div>
            <div className='card-info'>
                <div className="title-like-dislike"><Link to={"/post/" + props._id} className="card-title"><p>{props.title}</p></Link>
                    <div className="like-dislike-card">
                        <img src={props.like === 0 ? like : liked} alt="like button" id="like-button"></img>
                        <p>{props.like}</p>
                        <img src={props.dislike === 0 ? dislike : disliked} alt="dislike button" id="dislike-button"></img>
                        <p>{props.dislike}</p>
                        
                    </div>
                </div>

                <p className="card-author-time">{props.author} {props.createdOn}</p>
                <p className="card-descriptiom">{props.summary}</p>
            </div>
            <div></div>
        </div>
    )
}
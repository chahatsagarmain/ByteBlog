import "./../stylesheets/post.css"
import { useEffect } from "react";
import { UserContext } from "../context /UserContext";
import { useContext } from "react";
import like from "./../resources/icons/like.png";
import liked from "./../resources/icons/liked.png";
import dislike from "./../resources/icons/dislike.png";
import disliked from "./../resources/icons/disliked.png";

export default function Post() {

    const { post, setPost } = useContext(UserContext);

    useEffect(() => {
        let queryStr = window.location.pathname;
        queryStr = queryStr.split("/")[2];
        console.log(queryStr);
        fetchPost(queryStr);
    }, []);

    async function fetchPost(queryStr) {

        try {
            let response = await fetch("http://localhost:8000/api/blog/" + queryStr);

            if (response.status !== 200) {
                console.log("error");
                return alert("Error while fetching")
            }
            response = await response.json();
            setPost(response);
        }
        catch (error) {
            console.log(error);
            return alert("error");
        }
    }
    return (
        <div className="post">
            <img src={"http://localhost:8000/static/" + post.image} alt="blog-image" id="post-image"></img>
            <div className="like-dislike">
                <h1>{post.title}</h1>
                <div><img src={post.dislike === 0 ? dislike : disliked} alt="dislike button" id="dislike-button"></img>
                <p>{post.dislike}</p>
                <img src={post.like === 0 ? like : liked} alt="like button" id="like-button"></img>
                <p>{post.like}</p></div>
            </div>
            <p className="author">{post.author} {post.time}</p>
            <p className="description">{post.description}</p>
        </div>
    )
}
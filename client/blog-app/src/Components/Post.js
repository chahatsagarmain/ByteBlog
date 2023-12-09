import "./../stylesheets/post.css"
import temp from "../resources/images/car.jpg";
import { useEffect } from "react";
import { UserContext } from "../context /UserContext";
import { useContext } from "react";

export default function Post(){

    const {post , setPost} = useContext(UserContext);

    useEffect(() => {
        let queryStr = window.location.pathname;
        queryStr = queryStr.split("/")[2];
        console.log(queryStr);
        fetchPost(queryStr);
    },[]);

    async function fetchPost(queryStr){

        try{
            let response = await fetch("http://localhost:8000/api/blog/" + queryStr);

        if(response.status !== 200){
            console.log("error");
            return alert("Error while fetching")
        }
        response = await response.json();
        setPost(response);
        }
        catch(error){
            console.log(error);
            return alert("error");
        }
    }
    return (
        <div className="post">
            <img src={"http://localhost:8000/static/" + post.image} alt="blog-image" id="post-image"></img>
            <h1>{post.title}</h1>
            <p>{post.author} {post.time}</p>
            <p>{post.description}</p>
        </div>
    )
}
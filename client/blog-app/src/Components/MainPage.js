import { useEffect } from "react";
import Card from "./Card";
import { useContext } from "react";
import { UserContext } from "../context /UserContext";

export default function MainPage() {
    const {posts , setPosts} = useContext(UserContext);
    
    useEffect(() => {
        fetchAllPosts();
    },[]);

    async function fetchAllPosts(){
        
        const options = {
            method : "GET",
            credentials : 'include',
            headers : {'Content-type':'application/json'}
        };

        let response = await fetch("http://localhost:8000/api/posts" , options).catch(err => console.log(err));

        if(response.status !== 200){
            console.log(response.status);
        }

        else{
            response = await response.json().catch(err => console.log(err));

            setPosts(response);

        }

    };  

    return (
        <div className="main">
            {posts && posts.map((value , idx) => {
                console.log(value , "map");
                return <Card key={idx} props={value}/>
            })}
            {!posts && <h1>Nothing to Show!</h1>}
        </div>
    );
}
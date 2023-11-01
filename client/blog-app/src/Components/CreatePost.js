import './../stylesheets/createpost.css';
import { UserContext } from '../context /UserContext';
import { useContext } from 'react';

export default function CreatePost() {
    
    const {post , setPost} = useContext(UserContext);

    function handleInputChange(event){
        const name = event.target.name;
        console.log(name);
        setPost({...post , [name] : event.target.value});
    }
    function sumbit(){
        console.log(post);
    }

    return (
        <div className="create-post">
            <h1 className='create-post-title'>Create Post</h1>
            <input 
                type="text" 
                placeholder="Title of Blog" 
                name="title" className='text' 
                onChange={handleInputChange}>    
            </input>
            <input 
                type="text" 
                placeholder="Summary of Blog" 
                name="summary" 
                className='text'
                >
            </input>
            <input 
                type="file" 
                placeholder="Put an Thumbnail" 
                name="image" 
                className='input-image'>
            </input>
            <textarea 
                name="description" 
                rows="10" 
                cols="70" 
                placeholder='Enter description'
                >
            </textarea>
            <button 
                name="sumbit" 
                onClick={sumbit}>
                Sumbit
            </button>
        </div>
    )
}


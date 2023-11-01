import './../stylesheets/createpost.css';
import { UserContext } from '../context /UserContext';
import { useContext } from 'react';



export default function CreatePost() {


    const { post, setPost } = useContext(UserContext);

    function handleInputChange(event) {
        const name = event.target.name;
        console.log(event.target.value);
        setPost({ ...post, [name]: event.target.value });
    }
    function submit(ev) {
        ev.preventDefault();
        submitPost();
    }

    async function submitPost() {
        
        const formData = new FormData();

        formData.append('title', post.title);
        formData.append('summary', post.summary);
        formData.append('description', post.description);
        formData.append('image', post.image);

        const options = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-type': 'application/json' },
            credentials: 'include'
        }

        const response = await fetch('http://localhost:8000/api/postblog', options).catch(error => console.log(error));
        console.log("sent");
        try {
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
            }
            else {
                alert('Error creating Post');
            }
        }

        catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="create-post">
            <h1 className='create-post-title'>Create Post</h1>
            <div className="create-post-form">
            <form encType="multipart/form-data">
                <input
                    type="text"
                    placeholder="Title of Blog"
                    name="title"
                    className='text'
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Summary of Blog"
                    name="summary"
                    className='text'
                    onChange={handleInputChange}
                />
                <input
                    type="file"
                    name="image"
                    className='input-image'
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    rows="10"
                    cols="70"
                    placeholder='Enter description'
                    onChange={handleInputChange}
                />
                <button
                    name="submit"
                    onClick={submit}
                >
                    Submit
                </button>
            </form>
            </div>
        </div>
    )
}


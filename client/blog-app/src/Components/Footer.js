import './../stylesheets/footer.css';

export default function Footer(){

    return (
        <div className="footer">
            <div className = "description">
                <p className = "description-title">
                    ByteBlog
                </p>
                <p className = "description-content">
                    This is a Fullstack project that i have created to showcase and polish my we development skills . The tech stack used is React for frontend with MongoDB , NodeJS , ExpressJS for the API part . 
                </p>
            </div>
            <div className = "Links">
                <p className = "links-title">Links</p>
                <table>
                    <tr>
                        <td>   
                            <img src = "./../resources/icons/instagram.png" alt = "Instagram Logo"></img>
                        </td>
                        <td>
                            <p>Instagram Link</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src = "./../resources/icons/instagram.png" alt = "Twitter Logo"></img>
                        </td>
                        <td>
                            <p>Twitter Link</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src = "./../resources/icons/instagram.png" alt = "Discord Logo"></img>
                        </td>
                        <td>
                            <p>Discord Link</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
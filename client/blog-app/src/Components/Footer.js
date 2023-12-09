import './../stylesheets/footer.css';
import instaicon from "./../resources/icons/instagram.png";
import twittericon from "./../resources/icons/twitter.png";
import discordicon from "./../resources/icons/discord.png";


export default function Footer(){

    function redirectLink(event){
        const link = event.target.id;
        console.log(link);
        window.location.href = "https://www." + link + ".com"

    }

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
                            <img src = {instaicon} 
                            alt = {"Instagram Logo"}
                            onClick={redirectLink}
                            id="instagram"></img>
                        </td>
                        <td>
                            <p>Instagram</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src = {twittericon} 
                            alt = "Twitter Logo"
                            id = "twitter"
                            onClick={redirectLink}></img>
                        </td>
                        <td>
                            <p>Twitter</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src = {discordicon} 
                            alt = "Discord Logo"
                            onClick={redirectLink}
                            id = "discord"></img>
                        </td>
                        <td>
                            <p>Discord</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
import profilePic from "./assets/dave.jpg"


function Card(){

    return (
        <div className="card">
            <img className = "card-image" src = {profilePic} alt = "profile" width={150} height={150}></img>
            <h2 className="card-title">Fame Dave</h2>
            <p className="card-body">I am a software engineer and i love to sing</p>

        </div>
    );
    

}

export default Card
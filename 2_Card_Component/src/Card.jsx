import profilePic from './assets/download.jpeg'
function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className='card-titless'>Nabeel</h2>
            <p className='card-text'>I am a software engineer who is learning React so to find a job.</p>
        </div>
    )
}

export default Card 
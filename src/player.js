import './players.css'
function Player({Name,runs}){
    return(
        <div  className="container">
            <h2> {Name} </h2>   
            <h2>{runs}</h2>
        </div>
    )
}
export default Player;

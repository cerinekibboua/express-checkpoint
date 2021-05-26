
import{ Component}from 'react'
import './App.css';
import Player from './player'
export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
    list: true,
    card: false,
    players: [],
    player: {}
    };
    }
    componentDidMount() {
      fetch("http://localhost:3001/players/list")
      .then(response => response.json())
      .then( responseJson=> {
      this.setState({ players:responseJson.data });
      },
      )}  
      
      

      render(){
        return(
        <div>
          {this.state.players.map((player)=>{
           return <Player  Name = {player.name} runs = {player.runs} > </Player>
          })}

          
        </div>
      
        )
      }
}

import { Link } from "react-router-dom";
import './index.css';

function Home() {
  return(
    <div className="wrapper-divs-home-buttons">      
      <Link to='starwars'><button className="starWars-home-button">Star Wars</button></Link>
      <Link to='form'><button className="form-home-button">Form</button></Link>
      <div className="stars"></div>
    </div>
  )
}

export default Home

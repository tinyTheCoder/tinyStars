import React,{Component} from 'react'
import ReactGA from "react-ga4";

class App extends Component {

  componentDidMount(){
    // ReactGA.initialize("your GA measurement id");
    ReactGA.initialize("G-R8THYHG60B");
  }

  render(){
     return (
    <h1>Google Alaytics 4</h1>
   
  )
  }
}

export default App;

import React,{Component} from 'react'
import ReactGA from "react-ga";

class App extends Component {

  componentDidMount(){
    // ReactGA.initialize("your GA measurement id");
    ReactGA.initialize("G-R8THYHG60B");
  }

  eventTrack = (category,action,label) =>{
    console.log('ga eventL: category, action ,label',category,action,label)
    ReactGA.event({
      category:category,
      action:action,
      label:label
    })
  }

  render(){
     return (
      <>
          <h1>Google Alaytics 4</h1>
          <button onClick={this.eventTrack("Main Page","Track Me Button","Button")} >TRACK ME</button>
      </>
   
  )
  }
}

export default App;

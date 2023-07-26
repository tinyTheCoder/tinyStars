import React,{Component} from 'react'
// import ReactGA from "react-ga";
import ReactGA from "react-ga4";
import { gtag, install } from 'ga-gtag';
// import toTrackMonitization from './analytics.js'

class App extends Component {

  componentDidMount(){
    ReactGA.initialize("G-KHQDLL6J28");
    install('G-KHQDLL6J28'); 
    // ReactGA.initialize("UA-277395046-1");
  }

  ga4MonitizationTrack = () =>{
    console.log('montization track for addToCart')
    gtag("event","add_to_cart",{
      currency:"USD",
      value:7,
      items:[
        {
          item_id : 109,
          item_name:"my first product - babe",
          price:106
        }
      ]
    })
  }


  // eventTrack = (category,action,label) =>{
  //   console.log('ga eventL: category, action ,label',category,action,label)
  //   ReactGA.event({
  //     category:category,
  //     action:action,
  //     label:label
  //   })
  // }

  
  loginEvent = () =>{
    gtag('event', 'loginEvent', { 'method': 'Google' });
  }

  render(){
     return (
      <>
          <h1>Google Alaytics 4</h1>
          <button onClick={()=>this.eventTrack("Main Page","Track Me Button Event","Button")} >TRACK ME</button>
          {/* <button onClick={()=>toTrackMonitization('addToCart')}>ADD TO CART</button> */}
          <button className='addtocart' onClick={()=>this.ga4MonitizationTrack()}>ADD TO CART</button>

          <button onClick={()=>this.loginEvent()} >LOGIN ME</button>
      </>
   
  )
  }
}

export default App;

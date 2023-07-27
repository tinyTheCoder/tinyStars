import React,{Component} from 'react'
// import ReactGA from "react-ga";
import ReactGA from "react-ga4";
import { gtag, install } from 'ga-gtag';
// import toTrackMonitization from './analytics.js'

class App extends Component {

  constructor(){
    super();
    this.state = {
      OSName : 'unknown OS '
    }
  }

  componentDidMount(){
    ReactGA.initialize("G-KHQDLL6J28");
    install('G-KHQDLL6J28'); 
    // ReactGA.initialize("UA-277395046-1");
  }

  toDetectPlatform = () =>{
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!==-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!==-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!==-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!==-1) OSName="Linux";

    // console.log('Your OS: '+OSName);
    this.setState({
      OSName : OSName
    })
  }

  customDimensions = () =>{
    let userId = 'm a user'
    gtag('set', 'dimension1', { 'userId': `${userId}` });
    // gtag('set', {'dimension1': 'userId'})
  }

  ga4MonitizationTrack = () =>{

    this.toDetectPlatform()
    console.log('montization track for addToCart')

    console.log('os name',this.state.OSName)

    gtag('set', 'dimension2',{'source': 'web'})
    gtag('set', 'dimension3',{'language': 'english'})




    const id = 1024
    const dollar_currency = "USD"
    gtag("event","add_to_cart",{
      currency: `${dollar_currency}`,
      value:7,
      items:[
        {
          item_id : `${id}`,
          item_name:"my first product - babe",
          price:106,
          quantity:1
        }
      ]
    })
  }


  ga4MonitizationTrackPurchase = () =>{
    console.log('montization track for purchase')

    const id = 1024
    const dollar_currency = "USD"
    gtag("event","purchase",{
      tax:34.85,
      currency: `${dollar_currency}`,
      items:[
        {
          item_id : `${id}`,
          item_name:"my first product - babe",
          price:106,
          quantity:1
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
          <div className='allButtons'>
          <button onClick={()=>this.eventTrack("Main Page","Track Me Button Event","Button")} >TRACK ME</button>
          {/* <button onClick={()=>toTrackMonitization('addToCart')}>ADD TO CART</button> */}
          <button className='addtocart' onClick={()=>this.ga4MonitizationTrack()}>ADD TO CART</button>

          <button onClick={()=>this.loginEvent()} >LOGIN ME</button>

          <button onClick={()=>this.customDimensions()}>Custom dimension</button>


          <button className='purchase' onClick={()=>this.ga4MonitizationTrackPurchase()}>PURCHASE</button>
      </div>
      </>
   
  )
  }
}

export default App;

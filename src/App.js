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
    gtag('config', 'G-KHQDLL6J28', {
      'user_id': 'my_user_100'
    });
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

    // console.log('os name',this.state.OSName)

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
          quantity:1,
          position:'order'
        }
      ]
    })

    gtag('event', 'click', { 
      'event_category': 'Product' ,
      'event_label':'addToCart'    
    });

  }


  ga4MonitizationTrackPurchase = () =>{
    console.log('montization track for purchase')

    const id = 1024
    const dollar_currency = "USD"
    gtag("event","purchase",{
      transaction_id: "T_12345",
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

    gtag('event', 'click', { 
      'event_category': 'Product' ,
      'event_label':'purchase'    
    });


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
    gtag('config', 'G-KHQDLL6J28',{ 'debug_mode': true });

    gtag('config', 'G-KHQDLL6J28', {
      'user_ID': 'my_user_100'
    });
    gtag('set', {'user_ID': 'my_user_100'});
    
    gtag('event', 'loginEvent', { 'method': 'Google' });

  }

  removeFromCart = () =>{
    console.log('montization track for remove from cart')

    const id = 1024
    const dollar_currency = "USD"
    gtag("event","remove_from_cart",{
      currency: `${dollar_currency}`,
      items:[
        {
          item_id : `${id}`,
          item_name:"my first product - babe",
          price:10,
          quantity:1
        }
      ]
    })

    let product_ar_title = 'arabic babe'

    gtag('event', 'click', { 
      'event_category': 'Product' ,
      'non_interaction': true,
      'event_label':product_ar_title
    });    

  }

  ga4MonitizationTrackPurchase2ndProduct = ()  =>{
    console.log('montization track for purchase 2nd product')

    const id = 1025
    const dollar_currency = "USD"
    gtag("event","purchase",{
      transaction_id: "T_12345",
      tax:0.25,
      currency: `${dollar_currency}`,
      items:[
        {
          item_id : `${id}`,
          item_name:"my second product - baby",
          price:1000,
          quantity:1
        }
      ]
    })

    gtag('event', 'click', { 
      'event_category': 'Product 2' ,
      'event_label':'purchase'    
    });

  }

  viewProducts = () =>{
    
    const id = 1024
    gtag("event","view_item",{
      currency: "USD",
      value:7,
      items:[
        {
          item_id : `${id}`,
          item_name:"my first product - babe",
          price:106,
          quantity:1,
          position:'order'
        }
      ]
    })

    gtag('event', 'click', { 
      'event_category': 'Product' ,
      'event_label':'view product'    
    });
  }

  beginCheckout = () =>{
    
    const id = 1024
    gtag("event","begin_checkout",{
      currency: "USD",
      value:7,
      items:[
        {
          item_id : `${id}`,
          item_name:"my first product - babe",
          price:106,
          quantity:1,
          position:'order'
        }
      ]
    })

    gtag('event', 'click', { 
      'event_category': 'Product' ,
      'event_label':'view product'    
    });
  }  


  reportLanguageArabic = ()  =>{

    
    gtag('event', 'Report language selection', { 
      // 'event_category': 'Product' ,
      'event_label':'my first product - babe',
      'report_language':'ar'    
    });

  }

  reportLanguageEnglish = ()  =>{

    
    gtag('event', 'Report language selection', { 
      // 'event_category': 'Product' ,
      'event_label':'my first product - babe',
      'report_language':'en'    
    });

  }

  render(){
     return (
      <>
          <h1 className='tittle' >Google Alaytics 4</h1>
          <div className='allButtons'>
          {/* <button className='tracking' id='t' onClick={()=>this.eventTrack("Main Page","Track Me Button Event","Button")} >TRACK ME</button> */}
          {/* <button onClick={()=>toTrackMonitization('addToCart')}>ADD TO CART</button> */}

          <button className='loginEvent'id="b" onClick={()=>this.loginEvent()} >LOGIN ME</button>
          <button className='viewProduct'id="v_p" onClick={()=>this.viewProducts()} >View PRODUCTS</button>


          <button className='addtocart' id="a" onClick={()=>this.ga4MonitizationTrack()}>ADD TO CART 😍</button>
          <button className='beginCheckout' id="b_c" onClick={()=>this.beginCheckout()}>BEGIN CHECKOUT</button>



          <button className='purchase' id='d' onClick={()=>this.ga4MonitizationTrackPurchase()}>PURCHASE</button>
          <button className='purchasetwo' id='d' onClick={()=>this.ga4MonitizationTrackPurchase2ndProduct()}>PURCHASE 2nd PRODUCT</button>

          <button className='removeFromeCart' id='r' onClick={()=>this.removeFromCart()}>REMOVE FROM CART</button>
          <button className='customDimensions' id='c' onClick={()=>this.customDimensions()}>Custom dimension</button>
      
      <button onClick={()=>this.reportLanguageArabic()}  className='reportLanguage' >Report Language selection ARABIC</button>
      <button onClick={()=>this.reportLanguageEnglish()}  className='reportLanguage' >Report Language selection ENGLISH</button>

      </div>
      </>
   
  )
  }
}

export default App;

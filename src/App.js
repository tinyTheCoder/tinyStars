import React,{Component} from 'react'
// import ReactGA from "react-ga";
import ReactGA from "react-ga4";


class App extends Component {

  componentDidMount(){
    ReactGA.initialize("G-KHQDLL6J28");
    // ReactGA.initialize("UA-277395046-1");
  }

  eventTrack = (category,action,label) =>{
    console.log('ga eventL: category, action ,label',category,action,label)
    ReactGA.event({
      category:category,
      action:action,
      label:label
    })
  }

  addItem=()=>{
    ReactGA.plugin.require("ec",{path:'/log',debug:true});
    const ga = ReactGA.ga;
  ga("ec: addItem", {
    id: "user123",
    name: "Product Name",
    price: "10.00",
    category: "Food",
    quantity: "1"
});
  }

  render(){
     return (
      <>
          <h1>Google Alaytics 4</h1>
          <button onClick={()=>this.eventTrack("Main Page","Track Me Button","Button")} >TRACK ME</button>
          {/* <button onClick={()=>this.addItem()}>ADD TO CART</button> */}
      </>
   
  )
  }
}

export default App;

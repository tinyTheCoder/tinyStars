// import {takeLatest} from 'redux-saga/effects'
import ReactGA from "react-ga";
// import ReactGA from "react-ga4";


function initGA(){
    ReactGA.initialize("G-KHQDLL6J28");
}

initGA();

function toTrackMonitization(event){
  ReactGA.plugin.require('ec', { path: '/log', debug: true });
  const ga = ReactGA.ga

  if(event === 'addToCart'){
    console.log('add to cart ')
    ga("ec:addItem",{
      id: "user123",
      name: "Product Name",
      price: "10.00",
      category: "Food",
      quantity: "1"
  });
  ga('ec:setAction','add')
  ga('send','event','Product','Click','addToCart')

}

}

export default toTrackMonitization
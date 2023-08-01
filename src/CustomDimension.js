import React,{Component} from "react";
import { gtag, install } from 'ga-gtag';

class CustomDimension extends Component{

    componentDidMount(){
        install('G-KHQDLL6J28'); 
    }

const 
    fireMe = () =>{
            install('G-KHQDLL6J28'); 
        console.log('fired')
        gtag('config', 'G-KHQDLL6J28',{ 'debug_mode': true });

        gtag('config', 'G-KHQDLL6J28', {
          'test_custom_dim': 'english'
        });

        gtag('config', 'G-KHQDLL6J28', {
            'test_id': 'my_user_100'
          });
    }


    render(){
        return(
            <>
            <h1>Custom Dimension</h1>
            <button onClick={()=>this.fireMe()} >Fire Custom Dimesnion </button>
            </>
        )
    }

}

export default CustomDimension
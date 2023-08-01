import React,{Component} from "react";
import ReactGA from 'react-ga4'


class CustomDimension extends Component{

    constructor(){
        super()
        this.state = {
            show:false,
            dob:''
        }
    }

    componentDidMount(){
        install('G-KHQDLL6J28'); 
    }

const 
openDOB = () =>{
    console.log('m DOB')
    this.setState({
        show : true
    })
    }

    handleChange = (e) =>{

        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            dob:e.target.value
        })

    }

    trackEvents = () =>{
        console.log('GA4 tracking')
        const ga = ReactGA.ga 
        yield call

    }


    render(){
        return(
            <>
            <h1>Custom Dimension</h1>
            <button onClick={()=>this.openDOB()} >Capture DOB</button>
            {this.state.show?

            <div>
                <input name="dob" value={this.state.dob} onChange={(e)=>this.handleChange(e)} />
                <button onClick={()=>this.trackEvents()} >Submit Form</button>


            </div>
            :null}
            </>
        )
    }

}

export default CustomDimension
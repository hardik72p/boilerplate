import React, { Component } from 'react';
import LoaderConnect from '../../common_components/loader';
import { Line } from 'react-chartjs-2';

class Dashboard extends Component{
    constructor(props){
      super(props)
      this.state={
        email:"",
        error:{}
      }
    }

    render(){
        return(
            <div> 
                Dashboard
               </div>
        )
    }

}
export default LoaderConnect(Dashboard);
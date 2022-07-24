import React from "react";
import './HornedBeast.css'
class Horned extends React.Component{
    render(){
        return(
            <div>
             <h2>{this.props.title}</h2>
              <img src={this.props.imgurl} alt="phote"></img>
              <p>{this.props.description}</p>
            </div>
        )
    }
}


export default Horned;
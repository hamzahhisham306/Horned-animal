import React  from "react";
import Horned from './HornedBeast';

class Main extends React.Component{
    render(){
        return(
         <div>
             <Horned title={this.props.title} imgurl={this.props.imgurl} description={this.props.description}/>
         </div>    
        )
    }
}

export default Main;
import React from 'react';
import HornedBeast from './HornedBeast ';
import  './Main.css';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clickFavarite:0
        }
    }
    render(){
        return(
            < >
              <HornedBeast key={this.props.id} title={this.props.title} imgurl={this.props.imgurl} description={this.props.description} favority={this.props.clickFavarite}/>
            </>
        )
    }
}


export default Main;
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './horemd.css'
import Modales from "./SelectedBeast";

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clickFavarite:0,
            select:false,
        }
    }
    handlerClick=()=>{
        this.setState({clickFavarite:this.state.clickFavarite+1})
    }
    handlerBesat=()=>{
      this.setState({
        select:!this.state.select
      })
    }
    render(){
        return(
    
     <Card>
      <Card.Img variant="top" src={this.props.imgurl} onClick={this.handlerBesat} className="img"/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <Button variant="primary" onClick={this.handlerClick}>Click to be more favority</Button>
        <h1>{this.state.clickFavarite}💜</h1>
      </Card.Body>
      <Modales handlerClick={this.handlerClick} clickFavarite={this.state.clickFavarite} select={this.state.select} handle={this.handlerBesat} src={this.props.imgurl} title={this.props.title} description={this.props.description}
     />
    </Card>
        )
    }
}


export default HornedBeast;
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './horemd.css'

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clickFavarite:0
        }
    }
    handlerClick=()=>{
        this.setState({clickFavarite:this.state.clickFavarite+1})
    }
    render(){
        return(
    
     <Card  >
      <Card.Img variant="top" src={this.props.imgurl}  className="img"/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <Button variant="primary" onClick={this.handlerClick}>Click to be more favority</Button>
        <h1>{this.state.clickFavarite}💜</h1>
      </Card.Body>
    </Card>
        )
    }
}


export default HornedBeast;
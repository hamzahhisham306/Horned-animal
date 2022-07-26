import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class Modales extends React.Component {
 constructor(props){
    super(props);
    this.state={
        show:false
    }
 }

   handleClose = () =>{
    this.props.handle();
   }
   handleShow = () => {
    this.props.handle();
   }
   handlerIncremint=()=>{
    this.props.handlerClick();
   }
render(){
  return (
    <>
    
      <Modal show={this.props.select} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
     <Card>
      <Card.Img variant="top" src={this.props.src} onClick={this.handlerBesat} className="img"/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <Button variant="primary" onClick={this.handlerIncremint}>Click to be more favority</Button>
        <h1>{this.props.clickFavarite}💜</h1>
      </Card.Body>
    </Card>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
}

export default Modales;
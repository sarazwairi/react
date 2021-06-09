import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {


  render() {
    return (

      <div>

      <Modal show={this.props.show} onHide={this.props.handlClose} >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.details.title}</Modal.Title>
        </Modal.Header>


        <Modal.Body>
        <Card.Img onClick={this.displayAnimal} variant="top" src={this.props.details.image_url} alt={this.props.details.title} title={this.props.details.title}/>
          {/* <p> {this.props.displayAnimal}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handlClose}>
            close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}
    
export default SelectedBeast;
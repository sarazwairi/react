import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export class SelectedBeast extends Component {

  render() {
    return (


        <Modal show={this.props.show} onHide={this.props.handlClose} >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.all.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <img src={this.props.images} alt={this.props.all.title}/>
            </div>
            <div>
              {this.props.all.description}
            </div>
        </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handlClose}>
                close</Button>
            </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
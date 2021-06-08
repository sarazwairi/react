import React from 'React';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component{
    renser(){
        return(
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.selectedAnimal.description}</Modal.Body>
                    <Card.Img style={{width:'400px'}}variant="top" src={this.props.selectedAnimal.image_url}/>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>CLOSE</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default SelectedBeast;
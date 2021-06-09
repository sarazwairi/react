import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class Formanimal extends React.Component {

    new=horns=>this.props.newState(horns);
    filterAnimal=(event)=>{
        event.preventDefault();
        this.props.filterImg(event);
    }
    render() {
        return(
    
            <Form onSubmit={this.filterAnimal}>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>How Many Horne?</Form.Label>
                    <Form.Control as="select" custom onChange={this.new}>
                        <option value='all'>all</option>
                        <option value='1'>one</option>
                        <option value='2'>two</option>
                        <option value='3'>three</option>
                        <option value='100'>wow</option>
                    </Form.Control>
                    <Button variant="primary" type="submit">
              Filter
            </Button>
                </Form.Group>
            </Form>
        
        );
    }
}

export default Formanimal;
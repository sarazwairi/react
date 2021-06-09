import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


class HornedBeast extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            horns : 0
        }
    }

    incrementNumOfHorns = () => {
        this.setState ({
            horns : this.state.horns+1
        });
        this.props.showModal(this.props.title);
    }
    
    render(){
        return(
            <div>

        <Card style={{ width: '18rem' }}
         onClick={this.incrementNumOfHorns} >
            <Card.Img variant="top" src={this.props.url} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                      <Card.Text>{this.props.description}</Card.Text>
                      <Card.Text>{this.props.keyword}</Card.Text>
                          <Button variant="primary">😸horns: {this.state.horns}</Button>
                 </Card.Body>
                </Card>

            </div>
        )
    }
}

export default HornedBeast;

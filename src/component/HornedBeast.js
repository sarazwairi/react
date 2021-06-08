import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numberOfpets:0,
        }
    }
    increaseNumberofclicks=()=>{
        this.setState({
            numberOfpets:this.state.numberOfpets+1,
        })
    }
    displayanimal=()=>{
        this.props.displayanimal(this.props.Title)
    }

    render(){
        return(
            // <h2>{this.props.title}</h2><img src={this.props.imageUrl}alt={this.props.title}title={this.props.title}/><p>{this.props.descreption}</p>
            <div>
             <Card style={{ width: '18rem' }}>
             <Card.Img onClick={this.displayanimal} variant="top" src={this.props.imageUrl} />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
             {this.props.descreption}
             </Card.Text>
             <Button onClick={this.increaseNumberofclicks} variant="primary">😻Vote{this.state.numberOfpets}</Button>
             </Card.Body>
             </Card>
             </div>
        )
    }
}
export default HornedBeast;
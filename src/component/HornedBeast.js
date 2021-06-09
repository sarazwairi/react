import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          hearts: 0
        };
      }
      incrementHearts = () => {
        this.setState({
          hearts: this.state.hearts + 1
        });
      };
      displayAnimal=()=>{
        this.props.viewAnimal(this.props);
      }
      render() {
        return (
          <div>
          < Card className="cardimg" style={{color:'whitesmoke', backgroundColor:'black',width: '30.4rem' ,height:'40rem',borderColor:'black ',padding:'0.2rem'}}>
              <Card.Img onClick={this.props.displayAnimal} variant="top" src={this.props.imageUrl} alt={this.props.title} name={this.props.description} style={{ width: '30rem' ,height:'25rem'}} />
              <Card.Body>
                  <Card.Title onClick={this.incrementHearts} > <p>💓{this.state.hearts}</p></Card.Title>
                  <Card.Text>
                      <h2>{this.props.title}</h2>
                      <p> {this.props.description}</p>
                  </Card.Text>
                  
              </Card.Body>
          </Card>
         
      </div>
        );
      }
    }
export default HornedBeast;
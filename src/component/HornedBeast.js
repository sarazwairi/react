import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";


class HornedBeast extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          value: 0,
        };
      }
      incrementHearts = () => {
        this.setState({
          value: this.state.value + 1
        });
      };
    
  selectClick = () => {
    this.props.selectClick(this.props);
    this.incrementHearts();
  };
      
      render() {
        return (
          <div>
          < Card className="cardimg" style={{color:'whitesmoke', backgroundColor:'black',width: '30.4rem' ,height:'40rem',borderColor:'black ',padding:'0.2rem'}}>
              <Card.Img onClick={this.props.selectClick} variant="top" src={this.props.images} alt={this.props.title} name={this.props.description} style={{ width: '30rem' ,height:'25rem'}} />
              <Card.Body>
                  <Card.Title onClick={this.incrementHearts} > <p>💓{this.state.value}</p></Card.Title>
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
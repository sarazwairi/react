/* eslint-disable */
import React from 'react';
import HornedBeast from './HornedBeast';
// import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {

    render() {
        return (
            <div>
                <CardGroup>
                    {this.props.Data.map((element, index) => {
                        return(
                        <HornedBeast
                            imageUrl={element.image_url}
                            title={element.title}
                            description={element.description}
                            viewAnimal={this.props.viewAnimal} 
                            key={index}
                            />)
                    }
                    )
                    }
                </CardGroup>
            </div>)
}
}
export default Main;
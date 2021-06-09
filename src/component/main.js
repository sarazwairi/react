/* eslint-disable */
import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {


     
    render() {
       
        

        return (

            <main>
                <section>
                
                <CardGroup >
                    {this.props.Data.map(item => (
                        <HornedBeast
                            imageUrl={item.image_url}
                            title={item.title}
                            description={item.description}
                            selectClick={this.props.selectClick}
                        />
                    ))}
</CardGroup>
                </section>
            </main>
        )
    }
}
export default Main;
import React from 'react';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';


class Main extends React.Component{
    render(){
        return(
            <div className='img'>
                <CardGroup>

                {this.props.Data.map(item=>{
                    return(
                        <HornedBeast
                        title={item.title}
                        imageUrl={item.image_url}
                        descreption={item.description}
                        />
                    )
                })
                }

            </CardGroup>
            </div>
        )
    }
}
export default Main;
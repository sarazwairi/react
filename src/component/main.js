import React from 'react';
import HornedBeast from './HornedBeast'
import HornedData from './data.json';
import CardGroup from 'react-bootstrap/CardGroup'

class Main extends React.Component{
    render(){

   
        return(
          <div><CardGroup>
            {HornedData.map((i)=>{
              return(
              < HornedBeast showModal={this.props.showModal}  url={i.image_url} title={i.title} description={i.description} horns={i.horns} 
              />
                )})}
         </CardGroup></div>

        )
    }
}

export default Main;

import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
// import CardGroup from 'react-bootstrap/CardGroup';
import Forms from "./Forms";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: this.props.Data,
        }
    }
    result = (value) => {
        let newFilteredData = [];
        this.props.Data.forEach((beast) => {
            switch(value) {
                case "1":
                    if (beast.horns === 1) {
                        newFilteredData.push(beast);
                    }
                    break;
                case "2":
                    if (beast.horns === 2) {
                        newFilteredData.push(beast);
                    }
                    break;
                case "3":
                    if (beast.horns === 3) {
                        newFilteredData.push(beast);
                    }
                    break;
    
                case "100":
                    if (beast.horns === 100) {
                        newFilteredData.push(beast);
                    }
                    break;
                default:
                    newFilteredData.push(beast);
            }
        })  
        this.setState({
            filteredData : newFilteredData,
          })
    }
    render() {

        return (
            <div>
                <Forms result={this.result}/>
                <CardColumns style={{display: 'flex', flexWrap: 'wrap' }}>
                    {this.state.filteredData.map((beasts)=>{
                    return(

                <HornedBeast
                    title={beasts.title}
                    images={beasts.image_url}
                    // title={beasts.title}
                    description={beasts.description}
                    selectClick={this.props.selectClick}
                    />
                    );
                    })}
                    </CardColumns>
                    </div>
                    );
    }
}
export default Main;
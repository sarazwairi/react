import React from 'react';
import Header from './component/header';
import Main from './component/main';
import SelectedBeast from './component/SelectedBeast'
import Footer from './component/footer';
import Data from './component/data.json';

class App extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          displayModal: false,
          Data: Data,
          beastData: Data,
          selectedBeast: {}
        }
      }
    
      showModal = (name) => {
    
        const selectedBeast = Data.find(beast => beast.title === name);
        console.log(selectedBeast);
    
        this.setState({selectedBeast, displayModal:true});
      }
    
      hideModal = () => {
        this.setState({displayModal: false});
      }

    render(){
        return(
            <div>
                <Header />
                <Main showModal={this.showModal}/>
                <SelectedBeast displayModal={this.state.displayModal} hideModal={this.hideModal} selectedBeast={this.state.selectedBeast} />
                <Footer/>
            </div>
        )
    }
}

export default App;


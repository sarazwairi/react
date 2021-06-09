import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import Data from './component/data.json';
import SelectedBeast from './component/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor() {
    super();
    this.state={
      e:{},
      show:false,
    };
  }

  selectClick = (newBeast) => {
    this.setState({
      show:true,
      e:newBeast,
    });
  }

  handleClose = () => {
    this.setState({
      show:false,
    })
  };
  


  render() {
    return (
      <div>
        <Header/>
        <Main Data={Data}
        selectClick={this.selectClick}/>
          <Footer />
        <SelectedBeast
          show={this.state.show}
          all={this.state.e}
          handleClose={this.handleClose}/>
      </div>
    )
  }
}


export default App;

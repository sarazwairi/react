import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import Main from "./component/main";
import Data from "./component/Data.json";
import SelectedBeast from "./component/SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

  constructor() {
    super();
    this.state={
      new:{},
      show:false,
    };
  }

  selectClick = (newBeast) => {
    this.setState({
      new:newBeast,
      show:true,
    });
  };

  handleClose = () => {
    this.setState({
      show:false,
    });
  };
  


  render() {
    return (
      <div>
        <Header/>
        <Main Data={Data}
        selectClick={this.selectClick}/>
          <Footer />
        <SelectedBeast
          all={this.state.new}
          show={this.state.show}
          close={this.handleClose}/>
      </div>
    );
  }
}


export default App;

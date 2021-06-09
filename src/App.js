import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import Data from './component/data.json';
import SelectedBeast from './component/SelectedBeast';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      src: "",
      description: "",
    };
  }
  selectClick = (e) => {
    this.setState({
      show: !this.state.show,
      src: e.target.src,
      title: e.target.alt,
     description: e.target.name
    });
    console.log(this.state.show);
    console.log(this.state.src);
    console.log(this.state.discription);

  }

 


  handleClose = () => {
    this.setState({ show: !this.state.show });
  };




  render() {
    return (
      <div>
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          src={this.state.src}
          description={this.state.description}
          title={this.state.title}
        />
        <Header />
        <Main Data={Data} selectClick={this.selectClick} />
        <Footer />
      </div>
    )
  }
}


export default App;

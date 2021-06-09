import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import Data from './component/data.json';
import SelectedBeast from './component/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Data:Data,
      show: false,
      description: "",
      horns:"",
    };
  }

  filterImg=(event)=>{
    if(this.state.horns !== 'all'){
      this.setState({Data:Data.filter(element=>element.horns === Number(this.state.horns))});
    }else{
      this.setState({Data : Data});
    }
  }
  newState=creatures => this.setState({horns : creatures.target.value});

  selectClick = (e) => {
    this.setState({
      show: !this.state.show,
      details:e
    });
  }
 



  handleClose = () => {
    this.setState({ show: !this.state.show ,
      details:{}
    });
}
  
   


  render() {
    return (
      <div>
        <Header
        filterImg={this.filterImg}
        horns={this.state.horns}
        newState={this.newState}/>
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          src={this.state.src}
          description={this.state.description}
          title={this.state.title}
        />
        <Main Data={this.state.Data} selectClick={this.selectClick} filterImg={this.filterImg} />
        <Footer />
      </div>
    )
  }
}


export default App;

import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import Data from './component/data.json'
import SelectedBeast from './component/SelectedBeast'


class App extends React.Component{

constructor(props){
  super(props);
  this.state={
    show:false,
    selectedAnimal:{},
    Data:Data,
  }
}

handleShow=()=>{
  this.setState({
    show:true,
  })
}
handleClose=()=>{
  this.setState({
    show:false,
  })
}
displayanimal=(title)=>{
  const selectedAnimal=Data.find(animal=>{
    if(animal.title===title){
      return animal;
    }
  })
  this.setState({
    show:true,
    selectedAnimal:selectedAnimal,
  })
}
  render(){  
    return(
      <div>
        <Header/>
        <Main 
        Data={this.state.Data}
        handleShow={this.handleShow}
        displayanimal={this.displayanimal}/>
        <SelectedBeast
        handleClose={this.handleClose}
        show={this.state.show}
        selectedAnimal={this.state.selectedAnimal}
        />
        <Footer/>
      </div>
    )
  }
}

export default App;

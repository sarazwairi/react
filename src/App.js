import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import Data from './component/data.json'


class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main Data={Data}/>
        <Footer/>
      </div>
    )
  }
}

export default App;

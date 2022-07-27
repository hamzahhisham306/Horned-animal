import './App.css';

import Footer from './Footer';
import Header from './Header';
import FormJs from './Form';
import React from 'react';
class  App extends React.Component {
   
 render(){


  return (

    <div className="App">
      
      <Header/>
      <FormJs />
      
       <Footer/>

    </div>
    
  );
}
}

export default App;

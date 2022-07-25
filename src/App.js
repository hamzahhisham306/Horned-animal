import './App.css';
import Button from 'react-bootstrap/Button';
import data from './data.json';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

function App() {
  const datajson=data.map((dataj)=>{
    return <Main key={dataj._id} title={dataj.title} imgurl={dataj.image_url} description={dataj.description} />;
  })

  console.log(Button)
  return (

    <div className="App">
      <Header/>
      <div className='ports'>
       {datajson}
       </div>
       <Footer/>
    </div>
    
  );
}

export default App;

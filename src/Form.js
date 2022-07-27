import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import Main from './Main';

class  FormJs extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            select:'All'
            
        }
    }
    handleSubmit=(e)=>{
     e.preventDefault();
     this.setState({
        select: e.target.value
     });
     
    }

    render(){
        let filter=[]
        if(this.state.select==='All'){
         filter=data.map((data)=><Main key={data._id} title={data.title} imgurl={data.image_url} description={data.description}/>)
        }
        else{
         filter=data.filter(d=>d.horns===Number(this.state.select)).map((data)=><Main key={data._id} title={data.title} imgurl={data.image_url} description={data.description}/>);
        }
        console.log(filter);

  return (
      <div>
    <Form.Select  name='selectValue' onChange={this.handleSubmit}>
      <option value="All" id='All'>All</option>
      <option value="1" id='One'>1</option>
      <option value="2" id='Two'>2</option>
      <option value="3" id='Three'>3</option>
    </Form.Select>
    <div className='ports'>
    {filter}

       </div>
    </div>
  );
}
}
export default FormJs;
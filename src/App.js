import React from 'react';
import {useState} from 'react';
import {DeleteOutlined ,PlusCircleOutlined} from '@ant-design/icons';
import './App.css';
// import Data from './components/card/Data';
import Appointment from './components/pages/Appointment';
import Button from './components/card/Button';

function App() {
const[inputData,setInputData]=useState({
 file:'', name:"",age:"",phone:"",contact:"",time:"",date:""});
 const[record,setRecord]=useState([]);
 console.log(record);
 const handleChange=(e)=>{
  const{name,value}=e.target;
  const image = name === "pic" && e.target.files[0];
  setInputData({...inputData,[name]:name === "pic" ? window.URL.createObjectURL(image):value});
  // console.log(inputData);

 }

 function submit(event){
  event.preventDefault();
  setRecord([...record,inputData]);

 }
 function dataDelete(id){
  // console.log(id)
  const m=[...record];
  m.splice(id,1);
  setRecord(m);
 }

// console.log(Data);
  return (
    <>
    <div className='container' style={{marginTop:90}}>
    {/* <div className="App"> */}
    <div className='heading' >
      <h1 style={{textAlign:'center',marginBottom:40,position:'relative'}}>Appointmet Card UI 
<button type="button" className="btn btn-primary text-center" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color:'blue',marginLeft:15,backgroundColor:'white',height:60,width:60,textAlign:'center',border:0,borderRadius:0}}>
<PlusCircleOutlined style={{top:20,fontSize:40 }}  />
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel" style={{fontSize:30}}>Fill Data</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" style={{fontSize:20,textAlign:'start'}}>
        <form onSubmit={submit}>
        <label htmlFor='file'>File:</label>
        <input type='file' name='pic' onChange={handleChange} required></input><br/><br/>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' onChange={handleChange} placeholder='name' required></input><br/><br/>
          <label htmlFor='age'>Age:</label>
          <input type='text' placeholder='age' name='age' onChange={handleChange} required></input><br/><br/>
          <label htmlFor='gender'>Gender:</label>
          <label htmlFor='male' >Male</label>
          <input type='radio' value='male' name='gender' onChange={handleChange} ></input>
          <label htmlFor='female'>Female</label>
          <input type='radio' value='female' name='gender' onChange={handleChange} ></input><br/><br/>
          <label htmlFor='phone'>Phone:</label>
          <input type='phone' placeholder='+9' name='phone' onChange={handleChange}  pattern="[9][0-9]{9}" minLength={10} maxLength={10}  required></input><br/><br/>
          <label htmlFor='time'>Time:</label>
          <input type='time' name='time' onChange={handleChange} required></input><br/><br/>
          <label htmlFor='date'>Date:</label>
          <input type='date' name='date' onChange={handleChange} required></input><br/><br/>
          <Button text='Add Data' type='submit' style={{backgroundColor:'blue',color:'white',margin:'auto', borderRadius:10}}/>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div></h1>
      </div>
      <Appointment/>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop:10}}>
        {
          record.map((ele,id)=>{
            return(
              <>
              <div className="col">
    <div className="card" style={{height:200,width:400}}>
      <div className='image' style={{position:'relative'}}>
      <img src={ele.pic} className="card-img-top" alt="" style={{width:60,height:60,borderRadius:'50%',position:'absolute',top:10,left:10}}/>
      <h4 style={{position:'absolute',top:10,left:80}}>{ele.name}</h4>
      <span style={{position:'absolute',top:40,left:80}}>{ele.age}<span style={{marginLeft:5}}>years,</span><span>{ele.gender}</span></span>
       <button onClick={()=>{dataDelete(id)}}  style={{position:'absolute',top:20,right:10,color:'blue',fontWeight:'bold',fontSize:30,border:0,backgroundColor:'white'}}><DeleteOutlined style={{color:'red'}} /></button>

      </div>
      <div className="card-body" style={{marginTop:90,position:'relative'}}>
      <span>{ele.phone}</span>
        <h6 className="card_title" style={{color:'blue'}}>contact</h6>
      <span>{ele.time}<span style={{marginLeft:10}}>{ele.date}</span></span>
      <span style={{position:'absolute',bottom:20,right:10,fontWeight:'bold',color:'#00FA9A'}}>Consult</span>
      </div>
    </div>
  </div>
              </>
            )
          })
        }

      </div>
      
    </div>
    </>
  );
}

export default App;

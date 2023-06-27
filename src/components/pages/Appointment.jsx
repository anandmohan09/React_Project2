import { useState } from 'react';
import React from 'react';
import Data from '../card/Data';
import { DeleteOutlined } from '@ant-design/icons';


function Appointment(){
    const[profile,setProfile]=useState(Data);

    function deleteCard(index){
        // console.log(index);
        const t=[...profile];
        t.splice(index,1);
        setProfile(t);
      
      }
    return(
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        profile.map((curElement,index)=>{
          return(
            <>
            <div className="col">
    <div className="card" style={{height:200,width:400}}>
      <div className='image' style={{position:'relative'}}>
      <img src={curElement.imgsrc} className="card-img-top" alt="" style={{width:60,height:60,borderRadius:'50%',position:'absolute',top:10,left:10}}/>
      <h4 style={{position:'absolute',top:10,left:80}}>{curElement.name}</h4>
      <p style={{position:'absolute',top:40,left:80}}>{curElement.age}</p>
       <button onClick={()=>{deleteCard(index)}} style={{position:'absolute',top:20,right:10,color:'blue',fontWeight:'bold',fontSize:30,border:0,backgroundColor:'white'}}><DeleteOutlined style={{color:'red'}} /></button>

      </div>
      <div className="card-body" style={{marginTop:90,position:'relative'}}>
      <span>{curElement.phone}</span>
        <h6 className="card_title" style={{color:'blue'}}>{curElement.contact}</h6>
      <span>{curElement.time}<span style={{marginLeft:10}}>{curElement.date}</span></span>
      <span style={{position:'absolute',bottom:20,right:10,fontWeight:'bold',color:'#00FA9A'}}>Consult</span>
      </div>
    </div>
  </div>
            </>
          )

        })
      }
      </div>

        </>
    )
}

export default Appointment;
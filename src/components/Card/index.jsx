import React from 'react';
import {DeleteOutlined} from '@ant-design/icons';
import Buttons from '../Button';

const Cards = ({imgSrc,name,age,phone,contact,time,date,title ,onClick,datakey}) => {
   debugger
    
  return (
    <div className="col" key={datakey}>
    <div className="card" style={{height:200,width:400}}>
      <div className='image' style={{position:'relative'}}>
     {imgSrc  && <img src={imgSrc} className="card-img-top" alt="" style={{width:60,height:60,borderRadius:'50%',position:'absolute',top:10,left:10}}/>}
    {name &&  <h4 style={{position:'absolute',top:10,left:80}}>{name}</h4>}
     {age && <p style={{position:'absolute',top:40,left:80}}>{age}</p>}
      {onClick &&( <Buttons  style={{position:'absolute',top:20,right:10,color:'blue',fontWeight:'bold',fontSize:30,border:0,backgroundColor:'white'}}    onClick={onClick}>{onClick}<DeleteOutlined style={{color:'red'}} /></Buttons>)}
      </div>
      <div className="card-body" style={{marginTop:90,position:'relative'}}>
      {phone &&<span>{phone}</span>}
       {contact && <h6 className="card_title" style={{color:'blue'}}>{contact}</h6>}
      {time &&<span>{time}</span>} {date &&<span style={{marginLeft:10}}>{date}</span>}
     {title && <span style={{position:'absolute',bottom:20,right:10,fontWeight:'bold',color:'#00FA9A'}}>{title}</span>}
      </div>
    </div>
  </div>
  );
};

export default Cards;
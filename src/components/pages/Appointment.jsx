import { useState } from 'react';
import React from 'react';
import Data from '../Data';
import Cards from '../Card';
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
          debugger
          return(
            <>
          <Cards datakey={index+1}
          imgSrc={curElement.imgsrc}
          name={curElement.name}
          age={curElement.age}
          phone={curElement.phone}
          contact={curElement.contact}
          time={curElement.time}
          date={curElement.date}
          title='consult'
          onClick={ deleteCard}
          
          />
            </>
          )

        })
      }
      </div>

        </>
    )
}

export default Appointment;
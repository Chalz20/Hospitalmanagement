import React from 'react';
import { useState } from 'react';
import Form from "react-bootstrap/Form";

const Consumables = () => {

  const [items,setItems] = useState([]);

  //*Function that adds input fields*
  const Add =() =>{ 
    const i = [...items,[]]; 
    setItems(i) 
    //console.log(item)    
  }
    return ( 
        <div className='container'>
            <h5 className='muted'>Fill item and amount used:</h5>
            <div className='row'>
                <div className='col-lg-7'>
                      <Form.Select aria-label="Lab tests">
                         <option>--Select Item--</option>
                         <option value="1">Syringe</option>
                         <option value="2">Drips</option>
                      </Form.Select>
                    </div>
    
                    <div className='col-lg-2'>
                      <Form.Control  placeholder="Amount"/>
                    </div>
    
                    <div className='col-lg-2'>
                       <button className='btn btn-primary' onClick={Add}>Add</button>
                    </div>
            </div>
            {/*Section that adds input fields*/}
            {items.map((item,index)=>{
              return(
                <div key={index} className='row mt-3'>
                  <div className='col-lg-7'>
                      <Form.Select aria-label="Lab tests">
                         <option>--Select Item--</option>
                         <option value="1">Syringe</option>
                         <option value="2">Drips</option>
                      </Form.Select>
                    </div>
    
                    <div className='col-lg-2'>
                      <Form.Control placeholder="Amount"/>
                    </div>
    
                    <div className='col-lg-2'>
                       <button className='btn btn-primary' onClick={Add}>Add</button>
                    </div>
            </div>
              )
            })}

        </div>
     );
}
 
export default Consumables;
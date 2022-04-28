import React, { useState } from 'react';
import './Content.css'


const Content = () =>{
      
      const [startConq, setstartConq] = useState(0);
      const [currentConq, setcurrentConq] = useState(0);
      const [necessaryConq, setnecessaryConq] = useState(0);



  return (
    <div className='card text-white bg-primary  content-block p-3'>
        <form className='form-control bg-primary content-form'>
            <div className='justify-content-around row text-center'>
                  <div className='col-3'>
                        <h6>Start conq</h6>
                       <input className='form-control  text-center'/>
                  </div>
                  <div className='col-3'>
                        <h6>Current conq</h6>
                        <input className='form-control text-center'/>
                  </div>
                  <div className='col-3'>
                      <h6>Necessary conq</h6>
                        <input className='form-control text-center'/>
                  </div>
                  <div className='col-3 align-self-center submit-button'>
                      <button type='button' className='btn btn-dark'>Submit</button>
                  </div>
            </div>
            <div className='row justify-content-center text-center mt-3'>
                  <div className='col-3'>
                        <span>2x2 bracket</span>
                       <input disabled className='form-control text-center'/>
                  </div>
            </div>
            <div className='row justify-content-center text-center mt-3'>
                  <div className='col-3'>
                        <span>3x3 bracket</span>
                       <input disabled className='form-control text-center disable'/>
                  </div>
            </div>
        </form>    
    </div>
  );
};
export default Content;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Content.css'


const Content = () =>{
      const {register, handleSubmit} = useForm();
      const [startConq, setstartConq] = useState(0);
      const [currentConq, setcurrentConq] = useState(0);
      const [necessaryConq, setnecessaryConq] = useState(0);



      const onSubmit = (data) => {
         setstartConq(data.startConq)
         setcurrentConq(data.currentConq)
         setnecessaryConq(data.necessaryConq)
      }
      let totalConq2s = Math.ceil(((+necessaryConq + +startConq)-currentConq)/40)
      let totalConq3s = Math.ceil(((+necessaryConq + +startConq)-currentConq)/60)
           
  return (
    <div className='card text-white bg-primary  content-block p-3'>
        <form onSubmit={handleSubmit(onSubmit)} className='form-control bg-primary content-form'>
            <div className='justify-content-around row text-center'>
                  <div className='col-3'>
                        <h6>Start conq </h6>
                       <input {...register("startConq")}className='form-control  text-center'/>
                  </div>
                  <div className='col-3'>
                        <h6>Current conq </h6>
                        <input {...register("currentConq")}className='form-control text-center'/>
                  </div>
                  <div className='col-3'>
                      <h6>Necessary conq</h6>
                        <input {...register("necessaryConq")}className='form-control text-center'/>
                  </div>
                  <div className='col-3 align-self-center submit-button'>
                      <button type='submit' value="submit" className='btn btn-dark'>Submit</button>
                  </div>
            </div>
            <div className='row justify-content-center text-center mt-3'>
                  <div className='col-3'>
                        <span>2x2 bracket</span>
                       <input disabled className='form-control text-center' value={totalConq2s}/>
                  </div>
            </div>
            <div className='row justify-content-center text-center mt-3'>
                  <div className='col-3'>
                        <span>3x3 bracket</span>
                       <input disabled className='form-control text-center disable'value={totalConq3s}/>
                  </div>
            </div>
        </form>    
    </div>
  );
};
export default Content;
import React from 'react';
import './App.css'
import { websiteName,description,imageurl,button1,button2 } from './config';
import{shopName,mobiledes,mobileimageurl,btn1,btn2}from'./config2';


function App() {
  return (

    <div>
      <h1 className='text-4xl my-5 mx-10'>{websiteName}</h1>
      <p className='text-sm mx-10 my-5'>{description}</p>
      <img src={imageurl}  height="400" className='h-[300px] object-cover block mx-auto'/>

      <div className='flex justify-center'>
        <button className='bg-orange-500 m-5 p-1 text-white rounded md'>{button1}</button>
        <button  className='bg-orange-500 m-5 p-1 text-white rounded md' >{button2}</button>
      </div>
    </div>

  
  );
}

export default App;
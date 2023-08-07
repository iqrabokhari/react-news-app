import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {  techno} from '../Features/showSlice';

const Technology= () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(techno()); // Dispatch the action when the component mounts
  }, [dispatch]); // Make sure to add dispatch as a dependency

  const data = useSelector((state) => {
    console.log('Data from the selector:', state.app);
    // Return the data you want to use in your component
    return state.app;
  });

  return (
    <div >
   

      <h1 style={{textAlign:"center"}}>TECHNOLOGY</h1>
      <br></br>
      {data.data.map((article)=>(
        
        

      <div className='contain' key={article.title}>
           
     
      <h1  className='title' >{article.title} 
      {(article.author!=null)?<p style={{fontSize:"18px"}}>by {article.author}</p>:<p></p> }</h1>
      <div style={{display:"flex"}}>

      <div >
         <p style={{fontSize:"20px",marginLeft:"20px",marginright:"50%",fontFamily:"sans-serif"}}>{article.description} <br></br> <p style={{fontSize:"15px"}}>date published:{article.publishedAt}</p></p>
        
         <a style={{color:"black",marginLeft:"5%"}} href={article.url}>read more..</a>   
        
         </div>

      <div>
      { (article.urlToImage!=null)?<img alt='' style={{marginleft:"2px"}} className='image' src={article.urlToImage}></img>:<p></p> }
      </div>  
  </div>




      
         </div>
         
      ))}

   <div className='btm'>
   
<footer>&copy;  <p>Copyright 2023</p>
  
  <a style={{color:"white",textAlign:"center"}} href="reactnews@example.com">reactnews@example.com</a>
 

</footer>



















   </div>
    </div>
   
    
  );
};

export default Technology;

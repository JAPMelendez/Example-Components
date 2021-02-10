/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import styles from "./Dogs.module.css";
import axios from 'axios';

const DogsScreen = () => {
  const [image, setimage] = useState('')
  const [numbers, Setnumbers] = useState([]);
  const [imageArray, SetImageArray] = useState([]);
  

  const handleRandom = () =>{
    axios({
      method:'GET',
      url: process.env.REACT_APP_APIDOG,
    })
    .then(function (response){
      setimage(response.data.message);
      SetImageArray([...imageArray, response.data.message]);
      Setnumbers([...numbers, {contador: numbers.length+1, url: response.data.message}]);
    })
  }

  
  useEffect(()=>{
    console.log(numbers);
  },[numbers]
  )


  return (
    
    <section className={styles.section}>
      <h1>DogsScreen</h1>
      <h3>First task</h3>
      <p>
        {" "}
        Use this
        <a target="_blank" href="https://dog.ceo/dog-api/">
          Link
        </a>{" "}
        and create a view that give you a random dog when you press the button
        random
      </p>
      <p className={styles.paragraph_considerations}>
        Considerations, the image need to be fit in the green square
      </p>
     
      <div className={styles.content}>
        <div className={styles.img_content}>
        <img src={image} alt="Perritos" className={styles.imgdog}/> 

        </div>
        <button onClick = {handleRandom} >put your random button here</button>
      </div>
      <div>
        
      </div>

      esto funciona
      {
        numbers.map((num)=>{
          return (<p key = {num.contador}> Perrito N°{num.contador} 
          <img src={num.url} alt="Perritos" className={styles.imgdog}></img>
         </p>)
        })
      }

    </section>
  );
};

export default DogsScreen;

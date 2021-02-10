/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import styles from "./Dogs.module.css";
import axios from 'axios';

const DogsScreen = () => {
  const [image, setimage] = useState('')
  const handleRandom = () =>{
    axios({
      method:'GET',
      url: process.env.REACT_APP_APIDOG,
    })
    .then(function (response){
      setimage(response.data.message);
    })
  }
  
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
        <img src={image} alt="Girl in a jacket" className={styles.imgdog}/> 

        </div>
        <button onClick = {handleRandom}  >put your random button here</button>
      </div>
    </section>
  );
};

export default DogsScreen;

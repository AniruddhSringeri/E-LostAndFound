import React, { useState } from 'react';
import ImageUploader from "react-images-upload";

export default function StepThree(props){
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
    console.log(pictures)
  };
  return (
    <div>
      
      <ImageUploader
        {...props}
        withIcon={true}
        name = "pictures"
        onChange={props.handleChange}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        style={{width:"30rem"}}
      />
    </div>
  );
}

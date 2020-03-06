import React, { useState } from "react";
import axios from "axios";

const PhotoComp = props => {
  axios
    .get("https://api.nasa.gov/planetary/apod")
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });

  const [] = useState();

  return (
    <div>
      <div>
        <h1 className="photo-title">{props.title}</h1>
        <p className="photo-date">{props.date}</p>
        <img>{}</img>
        <p className="photo-explanation">{props.explanation}</p>
        <span className="photo-hdurl">{props.hdurl}</span>
        <span className="photo-url">{props.url}</span>
        <p className="photo-copyright">{props.copyright}</p>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default PhotoComponent;

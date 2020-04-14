import React, { useState } from "react";

const PhotoComponent = props => {
  console.log(props);
  return (
    <div>
      <div>
        <h1 className="photo-title">{props.photoData.title}</h1>
        <p className="photo-date">{props.photoData.date}</p>
        <img src={props.photoData.url} alt="photo of the day" />
        <p className="photo-explanation">{props.photoData.explanation}</p>
        <p className="photo-hdurl">{props.photoData.hdurl}</p>
        <p className="photo-url">{props.photoData.url}</p>
        <p className="photo-copyright">{props.photoData.copyright}</p>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default PhotoComponent;

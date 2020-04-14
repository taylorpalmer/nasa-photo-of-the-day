import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import PhotoComponent from "./PhotoComponent";

function App() {
  const [photoObject, setPhotoObject] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=OCVarQ3lP3Fo8QcsqsFnFqbFpS7QrhmO4Y7XyqZI"
      )
      .then(response => {
        console.log(response.data);
        setPhotoObject(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoComponent photoData={photoObject} />
    </div>
  );
}

export default App;

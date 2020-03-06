import React, { useEffect } from "react";

import "./App.css";
import PhotoComponent from "./PhotoComponent";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoComponent />
    </div>
  );
}

export default App;

import React from "react";
import Pic from "./images/pic.webp";

function App() {
  return (
    <div>
      <img
        src={Pic}
        alt="Container"
        className="img-responsive"
        style={{ marginTop: "-20px", width: "1300px" }}
      />
    </div>
  );
}

export default App;



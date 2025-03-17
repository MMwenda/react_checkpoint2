import React from "react";
import Player from "./Player";
import footballers from "./footballers"; // Import footballers array

const PlayersList = () => {
  return (
    <div className="container-fluid mt-4">
        <h1 className="text-center text-danger fs-1 fst-italic text-decoration-underline">My Top 6</h1>
  <div className="row justify-content-center gap-2">
    {footballers.map((footballer) => (
      <div key={footballer.name} className="col-md-4 col-sm-6 col-12 d-flex justify-content-center"> 
      {/* a key is needed to uniquely identify each element in the list */}
        <Player {...footballer} /> 
      </div>
    ))}
  </div>
</div>

  );
};

export default PlayersList;

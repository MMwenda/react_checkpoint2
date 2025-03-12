import React from "react";
import Player from "./Player";
import players from "./players"; // Import players array

const PlayersList = () => {
  return (
    <div className="container-fluid mt-4">
        <h1 className="text-center text-white fs-1 fst-italic text-decoration-underline">My Top 6</h1>
  <div className="row justify-content-center gap-2">
    {players.map((player) => (
      <div key={player.name} className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
        <Player {...player} /> 
      </div>
    ))}
  </div>
</div>

  );
};

export default PlayersList;

import React from "react";
import { actors } from "../data";

const actor = actors.map((actor) => {
  return (
    <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie, id) => <li key={id}>{movie}</li>)}
      </ul>
    </div>
  )
})
return <div>
  <h1>Actors Page</h1>
  {actor}
</div>;


export default Actors;
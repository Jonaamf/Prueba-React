import React from "react";

function Card ({ nombre, cancion }){

  return (
    <>
      <div>{nombre}</div>
      <div>{cancion}</div>
    </>
  );
};

export default Card;
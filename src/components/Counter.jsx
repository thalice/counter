import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Le compteur est à: {count}</p>
      <button
        onClick={() => {
          setCount(parseInt(count) + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(parseInt(count) - 1);
        }}
      >
        -1
      </button>

      <input
        name="countNumber"
        type="number"
        value={count}
        onChange={event => {
          setCount(event.target.value);
        }}
      />
    </div>
  );
}

export default Counter;

//value=La valeur de l'input correspond à count+setCount,c'est ca qu'on doit ecrire.
//onChange=listen to the even, and use the setCount method to feed it with the

//Créer un input non contrôlé type number =on entre un nb
//Créer un useState entre cet input/les clicks de setCount et la modification du <p>
//=>le click doit increm/decre sur la valeur de l'input

//<input value={previous} onChange={() => setPrevious(count)}></input>
//Le parseInt se fait dans le setCount pour permettre de faire le calcul math mais pas ds l'input,
//pcq even.target.value est déjà un numéro

/**
 * e ===
 * {
 * target.value === 'whatever is written in the input field right now' to be stored
 * target.name === 'countNumber'(target=the value of the input")
 * }
 *
 * ====> the string to what you write in the input
 */

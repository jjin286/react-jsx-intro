"use strict";

function Person({ name, age, hobbies }) {

  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>{age >= 18 ? 'Please go vote!' : 'you must be 18'}</h3>
      <p>{name.slice(0, 6)}</p>
      <ul>
        {hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>
    </div>
  );
}

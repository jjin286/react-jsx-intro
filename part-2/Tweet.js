"use strict";

function Tweet({username, name, date, message}){
  return (
    <div className="tweet">
      <h1>{name}</h1>
      <h3>@{username}</h3>
      <p>{message}</p>
      <p>{date}</p>
    </div>
  )
}
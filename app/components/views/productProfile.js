import React  from 'react'

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="user-profile">
      <img src={props.image} />
      <div className="details">
        <h1>{props.title}</h1>
        <p>Price: <strong>{props.price}</strong></p>
        <p>Type: <strong>{props.type}</strong></p>
        <p>ID: <strong>{props.id}</strong></p>
        <p>href: <strong>{props.href}</strong></p>
      </div>
    </div>
  );
}

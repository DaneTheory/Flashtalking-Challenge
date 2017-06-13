import React  from 'react'
import { Link } from 'react-router'

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">
      {props.products.map(product => {
        return (
          <div key={product.id} className="data-list-item">
            <div className="details">

              <Link className="details--image" to={'/products/' + product.id}>{<img src={product.image} />}</Link>

              <Link className="details--title" to={'/products/' + product.id}>{product.title}</Link>

              <Link className="details--price" to={'/products/' + product.id}>{product.price}</Link>

            </div>
          </div>
        );

      })}

    </div>
  );
}

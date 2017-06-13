import React  from 'react'
import { Link } from 'react-router'


// http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php?category=
// Using "Stateless Functional Components"
export default function(props) {

  return (
    <div className="product--Type">
      {props.productType.map(pType => {
        return (
          <div key={pType.id} className="product--item">
            <div className={pType.type}>

              <div className="product--title">
                {pType.title}
              </div>
            </div>
          </div>
        );

      })}

    </div>
  );
}

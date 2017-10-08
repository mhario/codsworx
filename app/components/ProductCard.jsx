import React from 'react';
import { Link } from 'react-router';
import { priceString } from 'APP/app/utils';

export const ProductCardView = (props) => {
  return (
    <div key={props.product.id} className="col-md-6 col-xs-12">
      <div className="clearfix product-card floaty-bit">
        <Link to={'/products/' + props.product.id}>
          <div className="col-xs-6 image-col">
            <span className="image-helper"></span>
            <img src={props.product.images[0]} />
          </div>
          <div className="card-header">
            <h1>{ props.product.name }</h1>
          </div>
        </Link>
        <div className="text-container col-xs-6">
          <p className="weak">{ props.product.category.join(' / ') }</p>
          <p>{ props.product.description }</p>
          <p>${ priceString(props.product.price) }</p>
          {
            (props.product.inventory > 0)
            ? <button className="btn btn-primary floaty-bit"
                onClick={() => { props.addToCart(props.product.id); } }>
                  Add to Cart
              </button>
            : <button className="btn btn-disabled" disabled="true">Out of Stock</button>
          }
        </div>
      </div>
    </div>
  );
};

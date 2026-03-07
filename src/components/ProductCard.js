import React from "react";
import { Link } from "react-router-dom";

/*
 Props:
  - product: object {id,name,price,image,category}
  - onAdd: function(product)
*/
function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-image-link">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-category">{product.category}</p>
        <p className="card-price">₹{product.price}</p>
        <button className="btn" onClick={() => onAdd(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
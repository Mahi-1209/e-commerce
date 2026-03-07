import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

/*
 Simple product details page.
 We look up the product by id from the products "database".
*/
function ProductDetails({ onAdd }) {
  const { id } = useParams();
  const pid = Number(id);
  const product = products.find(p => p.id === pid);

  if (!product) {
    return (
      <div className="page">
        <h2>Product not found</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="page product-details">
      <div className="details-left">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details-right">
        <h2>{product.name}</h2>
        <p className="detail-category">{product.category}</p>
        <p className="detail-price">₹{product.price}</p>
        <p className="detail-desc">
          This is a sample product description to show how product details look. For your project,
          you can add more fields like rating, features, specifications, etc.
        </p>

        <button className="btn" onClick={() => onAdd(product)}>Add to Cart</button>
        <div style={{marginTop:12}}>
          <Link to="/">← Back to products</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
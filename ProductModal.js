import React from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  if (!product) {
    return null; 
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Product Details</h2>
        <p><strong>Title:</strong> {product.title}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductModal;

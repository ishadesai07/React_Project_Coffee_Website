import React, { useState } from "react";
import "./ProductTable.css";

const ProductTable = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Hot Coffee", price: "$10", description: "A warm, comforting brewed coffee..", category: "Category A",image: "/images/c1.jpg"  },
    { id: 2, title: "Espresso", price: "$20", description: "A strong, concentrated coffee shot.", category: "Category B",image: "/images/c2.png" },
    { id: 3, title: "Drinking Chocolate", price: "$30", description: " A creamy, indulgent chocolate drink.", category: "Category A",image: "/images/c3.webp"  },
    { id: 4, title: "Dark Rosted Beans", price: "$40", description: "Bold, smoky coffee with low acidity.", category: "Category C",image: "/images/c4.webp" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const handleView = (product) => {
    setSelectedProduct(product);
    setIsUpdateMode(false);
    setShowModal(true);
  };

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setIsUpdateMode(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleSave = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product
    );
    setProducts(updatedProducts);
    setShowModal(false);
  };

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (product) => selectedCategory === "All" || product.category === selectedCategory
    );

  return (
    <div className="product-table-container">
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-dropdown"
        >
          <option value="All">All</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          <option value="Category C">Category C</option>
        </select>
      </div>
      <p><strong>Our Available Products!!</strong></p>

      <table className="product-table">
      <thead>
  <tr>
    <th>Image</th> 
    <th>Product Title</th>
    <th>Product Price</th>
    <th>Product Description</th>
    <th>Product Category</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  {filteredProducts.map((product) => (
    <tr key={product.id}>
      <td>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "50px", height: "50px", borderRadius: "5px" }}
        />
      </td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td>
        <button className="view" onClick={() => handleView(product)}>
          View
        </button>
        <button className="update" onClick={() => handleUpdate(product)}>
          Update
        </button>
        <button
          className="delete"
          onClick={() => alert(`Deleted: ${product.title}`)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
   </tbody>
    </table>


      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isUpdateMode ? "Update Product" : "Product Details"}</h2>
            <p>
              <strong>Title:</strong>{" "}
              {isUpdateMode ? (
                <input
                  type="text"
                  name="title"
                  value={selectedProduct.title}
                  onChange={(e) =>
                    setSelectedProduct((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />
              ) : (
                selectedProduct.title
              )}
            </p>
            <p>
              <strong>Price:</strong>{" "}
              {isUpdateMode ? (
                <input
                  type="text"
                  name="price"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct((prev) => ({
                      ...prev,
                      price: e.target.value,
                    }))
                  }
                />
              ) : (
                selectedProduct.price
              )}
            </p>
            <button onClick={handleCloseModal}>Close</button>
            {isUpdateMode && <button onClick={handleSave}>Save</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;

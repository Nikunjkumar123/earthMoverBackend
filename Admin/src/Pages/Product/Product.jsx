import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1,
      category: "TRACTOR",
      name: "POWER STEERING KIT, SONALIKA RX-47",
      machineName: "machine 1",

      popular: false,
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      category: "TRACTOR",
      name: "POWER STEERING KIT, INT-DI XP PLUS (RANE MAKE), D-CYL",
      machineName: "machine 2",
      popular: false,
      image: "path/to/image2.jpg",
    },
    {
      id: 3,
      category: "JCB",
      name: "ORING BOX",
      machineName: "machine 3",
      popular: true,
      image: "path/to/image3.jpg",
    },
    {
      id: 4,
      category: "TRACTOR",
      name: "VALVE OIL SEAL",
      machineName: "machine 4",
      popular: false,
      image: "path/to/image4.jpg",
    },
    {
      id: 5,
      category: "TRACTOR",
      name: "SPINDLE KIT",
      machineName: "machine 5",
      popular: false,
      image: "path/to/image5.jpg",
    },
  ];

  const handleActive = (id) => {
    console.log(`Product ${id} activated!`);
  };

  const handleEdit = (id) => {
    console.log(`Editing product with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log(`Deleting product with ID: ${id}`);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Products</h2>
        <Link to={"/add-products"} className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i> Add Product
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Machine Name</th>
              <th>Company Name</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className={product.popular ? "table-success" : ""}>
                <td>{product.id}</td>
                <td>{product.category}</td>
                <td className="fw-semibold">{product.name}</td>
                <td className="fw-semibold">{product.machineName}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </td>
                <td className="d-flex gap-2">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleActive(product.id)}
                  >
                    <i className="bi bi-check-circle"></i> Active
                  </button>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => handleEdit(product.id)}
                  >
                    <i className="bi bi-pencil-square"></i> Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    <i className="bi bi-trash3"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;

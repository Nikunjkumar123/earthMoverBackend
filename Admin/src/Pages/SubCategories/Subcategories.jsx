import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Subcategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Fetch subcategories from the API
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4040/admin/v1/categories");
      const allSubCategories = response.data.categories.flatMap((category) =>
        category.subCategories.map((subCategory) => ({
          ...subCategory,
          categoryId: category._id, // Add categoryId to each subCategory
        }))
      );
      setSubCategories(allSubCategories);
    } catch (err) {
      setError(`Error fetching subcategories: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleEdit = (categoryId, subCategoryId) => {
    navigate(`/edit-subcategories/${categoryId}/${subCategoryId}`);
  };

  const handleDelete = async (categoryId, subCategoryId) => {
    if (window.confirm("Are you sure you want to delete this subcategory?")) {
      try {
        const response = await axios.delete(
          `http://localhost:4040/admin/v1/categories/edit-update/${categoryId}/${subCategoryId}`
        );
        if (response.status === 200) {
          setSubCategories((prev) =>
            prev.filter((subCategory) => subCategory._id !== subCategoryId)
          );
        }
      } catch (err) {
        console.error("Error deleting subcategory:", err);
        setError(`Error deleting subcategory: ${err.message}`);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Subcategories</h2>
      <Link to="/add-subcategories" className="btn btn-primary">
        + Add Sub Categories
      </Link>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      <table className="table table-bordered table-hover mt-4">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Sub Category</th>
            <th>Machine Name</th>
            <th>Company Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.length > 0 ? (
            subCategories.map((subCategory, index) => (
              <tr key={subCategory._id}>
                <td>{index + 1}</td>
                <td>{subCategory.Category}</td>
                <td>{subCategory.MachineName}</td>
                <td>{subCategory.CompanyName}</td>
                <td>
                  <img
                    src={subCategory.Image}
                    alt={subCategory.Category}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(subCategory.categoryId, subCategory._id)}
                    >
                      <i className="bi bi-pencil-square"></i> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(subCategory.categoryId, subCategory._id)}
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No subcategories available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Subcategories;

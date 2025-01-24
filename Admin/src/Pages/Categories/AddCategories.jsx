import React, { useState } from "react";
import axios from "axios";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!category && !image) {
      setError("Both category name and image are required.");
      return;
    }

    const formData = new FormData();
    formData.append("category", category); // Ensure this key matches the backend
    formData.append("image", image);

    try {
      // Sending form data (category name and image) via a POST request
      const response = await axios.post("http://localhost:4040/admin/v1/categories", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure this is set for file uploads
        },
      });

      setCategory(""); // Clear category name input
      setImage(null); // Clear image input
      setError(""); // Clear any error messages
      setSuccess("Category added successfully!"); // Show success message

      console.log("Response:", response.data);
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="container mt-2">
      <div className="card shadow">
        <div className="card-header bg-light">
          <h4>Add Category</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Category Name
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                placeholder="Enter category name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>

            {/* Show success or error message */}
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <button type="submit" className="btn btn-primary w-100">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;

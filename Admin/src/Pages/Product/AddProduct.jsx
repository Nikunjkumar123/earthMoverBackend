import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    category: '',
    subCategory: '',
    productName: '',
    image: null,
    isMostSelling: false,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your submission logic here
  };

  return (
    <div className="container mt-4">
      <h3>Product Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Categories</label>
          <select
            id="category"
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Category1">Category 1</option>
            <option value="Category2">Category 2</option>
            <option value="Category3">Category 3</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="subCategory" className="form-label">Machine Name</label>
          <select
            id="subCategory"
            name="subCategory"
            className="form-select"
            value={formData.subCategory}
            onChange={handleChange}
          >
            <option value="">Select Sub Categories</option>
            <option value="SubCategory1">Sub Category 1</option>
            <option value="SubCategory2">Sub Category 2</option>
            <option value="SubCategory3">Sub Category 3</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Company Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="form-control"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            id="isMostSelling"
            name="isMostSelling"
            className="form-check-input"
            checked={formData.isMostSelling}
            onChange={handleChange}
          />
          <label htmlFor="isMostSelling" className="form-check-label">Most Selling Products</label>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;

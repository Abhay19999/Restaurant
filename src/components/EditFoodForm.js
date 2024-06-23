// EditFoodForm.js

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const EditFoodForm = ({ foodItem, onEdit }) => {
  const [updatedFoodItem, setUpdatedFoodItem] = useState({ ...foodItem });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFoodItem({ ...updatedFoodItem, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/edit-dish/${foodItem.id}`, updatedFoodItem);
      onEdit(); // Notify the parent component about the edit
    } catch (error) {
      console.error('Error editing food item:', error);
    }
  };

  return (
    <form onSubmit={handleEditSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={updatedFoodItem.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          value={updatedFoodItem.category}
          onChange={handleInputChange}
        />
      </div>
      {/* Add other fields as needed */}
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default EditFoodForm;

// MenuCard.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import EditFoodForm from './EditFoodForm';

function MenuCard({ menuData }) {
  const [editMode, setEditMode] = useState(null);

  const handleEdit = (id) => {
    setEditMode(id);
    

  };

  const handleEditCancel = () => {
    setEditMode(null);
  };

  const handleEditSubmit = () => {
    setEditMode(null);
    // You might want to fetch the updated menuData here or refresh the data
    window.location.reload();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete-dish/${id}`);
      // Reload the window after successful deletion
      window.location.reload();
    } catch (error) {
      console.error('Error deleting food item:', error);
    }
  };

  return (
    <div>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <div key={id} className="card-container">
              <div className="card">
                <img src={process.env.PUBLIC_URL + image} alt="food" className="card-media" />
                <div className="container">
                  <h2>{name}</h2>
                  <span className="card-description">{description}</span>
                </div>
                {editMode === id ? (
                  <EditFoodForm foodItem={curElem} onEdit={handleEditSubmit} />
                ) : (
                  <>
                    <button className="btn btn-primary" onClick={() => handleEdit(id)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(id)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default MenuCard;

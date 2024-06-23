import React, { useState } from 'react';
import AddFoodForm from './AddFoodForm'; // Adjust the path as per your project structure
import fetchData from './MenuApi';

const Navbar = ({ filterItem, menuList }) => {
  const [showForm, setShowForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleAddButtonClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => (
            <button
              className={`btn-group_item ${activeCategory === curElem ? 'active' : ''}`}
              onClick={() => {
                filterItem(curElem);
                setActiveCategory(curElem);
              }}
              key={curElem}
            >
              {curElem}
            </button>
          ))}
          <button className="btn btn-success" onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
      </nav>

      {showForm && <AddFoodForm onAdd={() => handleFormClose()} />}
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const useMenuData = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/all-dishes');
        setMenu(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return menu;
};

export default useMenuData;

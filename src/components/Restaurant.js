import React, {useState,useEffect} from 'react';
import "./style.css";
import useMenuData from "./MenuApi"
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const Resturant = () => {
    const menu = useMenuData();
    const [menuData, setMenuData] = useState(menu);
    const [menuList, setMenuList] = useState([]);
  
    useEffect(() => {
      const uniqueList = [...new Set(menu.map((curElem) => curElem.category)), "All"];
      setMenuList(uniqueList);
      setMenuData(menu);
    }, [menu]);
  
    const filterItem = (category) => {
      if (category === 'All') {
        setMenuData(menu);
        return;
      }
      const updatedList = menu.filter((curElem) => curElem.category === category);
      setMenuData(updatedList);
    }
    
  
    return (
      <div>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard key={menuData.id} menuData={menuData} />
      </div>
    );
  };
  
  export default Resturant;
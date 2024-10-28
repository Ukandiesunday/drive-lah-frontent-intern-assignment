import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { handleRetrieveItem, handleStoreItem } from "../../helpers/storage";
import "./sidebar.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(
    handleRetrieveItem("activeItem") || "Location"
  );

  const [visitedItems, setVisitedItems] = useState(() => {
    const stored = handleRetrieveItem("visitedItems");
    return stored ? JSON.parse(stored) : [];
  });

  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  console.log(activeRoute);
  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const navItems = [
    { path: "/location", content: "location" },
    { path: "/about", content: "about" },
    { path: "/features", content: "features" },
    { path: "/rules", content: "rules" },
    { path: "/pricing", content: "pricing" },
    { path: "/promotion", content: "promotion" },
    { path: "/pictures", content: "pictures" },
    { path: "/insurance", content: "insurance" },
    { path: "/subscription", content: "subscription" },
    { path: "/device", content: "device" },
    { path: "/easy-access", content: "easy access" },
  ];

  const handleItemClick = (item) => {
    if (activeItem !== item) {
      if (activeItem && !visitedItems.includes(activeItem)) {
        setVisitedItems((prev) => [...prev, activeItem]);
      }
      setActiveItem(item);
    }
  };

  useEffect(() => {
    handleStoreItem("activeItem", activeItem);
    handleStoreItem("visitedItems", JSON.stringify(visitedItems));
  }, [activeItem, visitedItems]);

  return (
    <div className="sidebar">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              onClick={() => handleItemClick(item.path)}
              className={`nav-item ${
                item.path === activeRoute ? "active" : ""
              }`}
            >
              <span>{item.content}</span>
              {visitedItems.includes(item.path) &&
                activeRoute !== item.path && <FaCheck className="check-icon" />}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

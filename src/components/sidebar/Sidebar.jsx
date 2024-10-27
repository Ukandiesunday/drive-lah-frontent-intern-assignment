import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { handleRetrieveItem, handleStoreItem } from "../../helpers/storage";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(
    handleRetrieveItem("activeItem") || "Location"
  );

  const [visitedItems, setVisitedItems] = useState(() => {
    const stored = handleRetrieveItem("visitedItems");
    return stored ? JSON.parse(stored) : [];
  });

  const navItems = [
    "location",
    "about",
    "features",
    "rules",
    "pricing",
    "promotion",
    "pictures",
    "insurance",
    "subscription",
    "device",
    "easy access",
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
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={item}
              onClick={() => handleItemClick(item)}
              className={`nav-item ${item === activeItem ? "active" : ""}`}
            >
              <span>{item}</span>

              {visitedItems.includes(item) && activeItem !== item && (
                <FaCheck className="check-icon" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

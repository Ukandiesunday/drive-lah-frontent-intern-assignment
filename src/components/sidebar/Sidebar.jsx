import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa"; // Still using the FontAwesome icon
import { handleRetrieveItem, handleStoreItem } from "../../helpers/storage";
import "./sidebar.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(
    handleRetrieveItem("activeItem") || "Location"
  );

  const [visitedItems, setVisitedItems] = useState(() => {
    const stored = handleRetrieveItem("visitedItems");
    return stored ? JSON.parse(stored) : [];
  });

  const navItems = [
    "Location",
    "About",
    "Features",
    "Rules",
    "Pricing",
    "Promotion",
    "Pictures",
    "Insurance",
    "Subscription",
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
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            className={`nav-item ${item === activeItem ? "active" : ""}`}
          >
            <span>{item}</span>

            {visitedItems.includes(item) && activeItem !== item && (
              <FaCheck className="check-icon" />
            )}
          </li>
        ))}
      </ul>
      <div className="extra-section">
        <div className="extra-text">Device</div>
        <div className="extra-text">Easy Access</div>
      </div>
    </div>
  );
};

export default Sidebar;
import React from "react";

import "./notfound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <div>
          <img className="not-found-img" src="/notfound.jpeg" alt="not found" />
        </div>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;

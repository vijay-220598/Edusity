import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 Edusity. All rights reserved.</p>
      <ul>
        <li>
          <Link to="/terms&condition">Terms&Condition</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </div>
  );
};

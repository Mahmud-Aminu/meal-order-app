import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column-1 */}

          {/* column 3 */}
          <div className="col">
            <h4>Quick Links</h4>
            <ul className="list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Chop inc</h4>
            <ul className="list">
              <li>+2345879544</li>
              <li>chopinc@example.com</li>
              <li>No. 21 opp. Rafindadi street Katsina, Nigeria</li>
              <li></li>
            </ul>
          </div>
        </div>
        <hr className="separator" />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Chop inc | Terms and condition |
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

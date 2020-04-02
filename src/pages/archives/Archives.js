import React from "react";
import "./styles.css";
import * as Constants from "../../config/Constants";
import YearDropdown from "../../components/dropdowns/year";
import SortDropdown from "../../components/dropdowns/sort";
export default function Archives() {
  return (
    <>
      <div className="header">
        <h1>Archives</h1>
      </div>
      <div className="dropdown-container">
       <YearDropdown/>
       <SortDropdown/>
      </div>
      <div class="archives-container">
        {Constants.Archives_Data.map(data => (
          <div class="archives-item">
            <img src={data.img} alt="item" />
          </div>
        ))}
      </div>
    </>
  );
}

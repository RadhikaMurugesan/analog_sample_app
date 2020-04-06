import React from "react";
import "./style.css";

export default function Dropdown(props) {
  return (
    <div className="dropdown">
      <span
        className="btn btn-default dropdown-toggle dropdown-input"
        data-toggle="dropdown"
      >
        {props.dropDownValue}
        <i
          className="fa fa-angle-down down-arrow"
        ></i>
      </span>
      <ul className="dropdown-menu">
        {props.dropDownContent.map((item) => {
          if (item.submenu) {
            return (
              <li class="dropdown-submenu">
                <a href="#" style={{ color: "#009FBD" }}>
                  {item.option}
                </a>
                <ul className="dropdown-menu">
                  {item.submenu.map((submenuitem) => (
                    <li>
                      <a
                        href="#"
                        style={{ color: "#009FBD" }}
                        onClick={(e) => props.changeValue(e.target.text)}
                      >
                        {submenuitem.option}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return (
            <li>
              <a href="#" style={{ color: "#009FBD" }} onClick={(e) => props.changeValue(e.target.text)}>
                {item.option}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";

const DropdownMenu = ({ icon, update, label }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenDropdown(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="dropdown-menu_container" ref={menuRef}>
      <button
        onClick={() => setOpenDropdown(!openDropdown)}
        type="button"
        title={label}
        className={`${update ? "update" : ""} dashboard-header_button `}
      >
        {icon}
      </button>

      <ul className={`dropdown-menu ${openDropdown ? "open" : ""}`}>
        <li className="dropdown-menu_item">Create a new ticket</li>
        <li className="dropdown-menu_item">Create a new message to admin</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;

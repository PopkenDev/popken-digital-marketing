"use client";

import { RiAddFill, RiSendPlaneFill } from "@remixicon/react";
import { useState, useEffect, useRef } from "react";

const DropdownMenu = ({ icon, update, label }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenDropdown(false);
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
        <li className="dropdown-menu_item">
          <RiAddFill className="dropdown-menu_item_icon" />
          Maak ticket
        </li>
        <li className="dropdown-menu_item">
          <RiSendPlaneFill className="dropdown-menu_item_icon" />
          Bericht naar admin
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;

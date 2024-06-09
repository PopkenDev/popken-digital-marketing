"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  RiInbox2Fill,
  RiDashboardFill,
  RiPieChart2Fill,
  RiSettings5Fill,
  RiLogoutBoxRLine,
} from "@remixicon/react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    name: "Herman Popken",
    email: "popkendev@outlook.com",
  });
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-container"
      >
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <div className="hamburger-bar"></div>
        </div>
      </button>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar_container">
          <div className="user-profile_container">
            <figure>
              <Image
                src="/images/dashboard/herman-profile-img.jpg"
                alt="profile-img"
                height={300}
                width={300}
                className="user-profile_img"
              />
            </figure>
            <h3 className="user-profile_name">{user.name}</h3>
            <p className="user-profile_email">{user.email}</p>
          </div>
          <nav className="sidebar-nav">
            <ul className="sidebar-nav_list">
              <li className="sidebar-nav_list-item">
                <RiDashboardFill className="sidebar-nav_list-item-icon" />
                Dashboard
              </li>
              <li className="sidebar-nav_list-item">
                <RiInbox2Fill className="sidebar-nav_list-item-icon" />
                Inbox
              </li>
              <li className="sidebar-nav_list-item">
                <RiPieChart2Fill className="sidebar-nav_list-item-icon" />
                Analytics
              </li>
              <li className="sidebar-nav_list-item">
                <RiSettings5Fill className="sidebar-nav_list-item-icon" />
                Settings
              </li>
            </ul>
          </nav>
          <div>
            <button className="logout-btn">
              <RiLogoutBoxRLine className="logout-btn-icon" />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HamburgerMenu;

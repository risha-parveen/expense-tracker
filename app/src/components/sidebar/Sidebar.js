import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BiHomeAlt, BiUser, BiTrendingUp } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <BiHomeAlt color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
  {
    title: "Expense",
    path: "/expense",
    icon: <BiTrendingUp color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
  {
    title: "Account",
    path: "/account",
    icon: <BiUser color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
];

function Sidebar({ activity }) {
  let currentPath = null;
  const location = useLocation();
  useState(() => {
    currentPath = location.pathname.slice(1);
  }, []);
  return (
    <div className="main-sidebar" id={activity}>
      <ul className="side-menu-items">
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link
                to={item.path}
                onClick={() => {
                  console.log(currentPath);
                }}
              >
                {item.icon}
                <span className="span-text">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

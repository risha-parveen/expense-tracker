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

let currentPath = null;

function Sidebar({ activity }) {
  const location = useLocation();
  useState(() => {
    currentPath = location.pathname.slice(1);
  }, []);

  let id = null;
  return (
    <div className="main-sidebar" id={activity}>
      <ul className="side-menu-items">
        {SidebarData.map((item, index) => {
          id = "non-colored";
          if (currentPath === item.title.toLowerCase()) id = "colored";
          return (
            <Link key={index} to={item.path}>
              <li className={item.cName} id={id}>
                {item.icon}
                <span className="span-text">{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

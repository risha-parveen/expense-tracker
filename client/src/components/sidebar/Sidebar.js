import React from "react";
import "./Sidebar.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillSignal } from "react-icons/ai";
import Home from "../../pages/home/Home";

const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiFillHome color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
  {
    title: "Expense",
    path: "#",
    icon: <AiFillSignal color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
  {
    title: "Account",
    path: "/",
    icon: <FaUserAlt color="white" fontSize="1.5rem" />,
    cName: "sidebar-text",
  },
];

function Sidebar({}, ref) {
  return (
    <div ref={ref} className="main-sidebar">
      <ul className="side-menu-items">
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
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

const forwardSidebar = React.forwardRef(Sidebar);

export default forwardSidebar;

import React from "react";
import "./side-bar.css";

// Define a interface para cada item do menu
interface MenuItem {
  title: string;
  iconClass: string;
  link: string;
}

// Cria a lista de itens do menu com tipagem
const menuItems: MenuItem[] = [
  { title: "Home", iconClass: "bx bxs-home", link: "#" },
  { title: "About", iconClass: "bx bxs-info-circle", link: "#" },
  { title: "Services", iconClass: "bx bx-task", link: "#" },
  { title: "Contact", iconClass: "bx bxs-contact", link: "#" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="nav-link">
                <span className="item-icon">
                  <i className={item.iconClass}></i>
                </span>
                <span className="item-txt">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

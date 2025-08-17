"use client"

import type React from "react"
import "./side-bar.css"

interface Category {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  count: number
}

interface SidebarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  categories: Category[]
}

const iconMap: Record<string, string> = {
  all: "bx bxs-home",
  text: "bx bxs-brain",
  image: "bx bxs-image",
  chat: "bx bxs-chat",
  analytics: "bx bxs-bar-chart-alt-2",
  code: "bx bxs-code-alt",
  audio: "bx bxs-music",
  pesquisa: "bx bx-search",
  estudo: "bx bxs-book",
  componente: "bx bxs-component",
  curso: "bx bxs-graduation",
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onCategoryChange, categories }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className={selectedCategory === category.id ? "active" : ""}
              onClick={() => onCategoryChange(category.id)}
            >
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                <span className="item-icon">
                  <i className={iconMap[category.id] || "bx bx-category"}></i>
                </span>
                <span className="item-txt">{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

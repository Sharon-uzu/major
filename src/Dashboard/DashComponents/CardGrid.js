import React, { useState, useRef, useEffect } from "react";
import img from '../../Assets/grid.png'
const cardsData = [
  {
    id: 1,
    image: img,
    title: "Living Room",
    description: "Sofa exclusive ",
  },
  {
    id: 2,
    image: img,
    title: "Living Room",
    description: "Sofa exclusive ",
  },
  {
    id: 3,
    image: img,
    title: "Living Room",
    description: "Sofa exclusive ",
  },
  {
    id: 4,
    image: img,
    title: "Living Room",
    description: "Sofa exclusive ",
  },
  {
    id: 5,
    image: img,
    title: "Living Room",
    description: "Sofa exclusive",
  },
  {
    id: 6,
    image: img,
    title: "Living Room",
    description: "Sofa exclusive",
  },
  {
    id: 7,
    image: img,
    title: "Living Room",
    description: "Sofa exclusive",
  },
  {
    id: 8,
    image: img,
    title: "Living Room",
    description: "Sofa exclusive",
  },
];

export default function CardGrid() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRefs = useRef({});

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        openMenuId &&
        menuRefs.current[openMenuId] &&
        !menuRefs.current[openMenuId].contains(event.target)
      ) {
        setOpenMenuId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  const handleMenuToggle = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleEdit = (id) => {
    alert(`Edit card ${id}`);
    setOpenMenuId(null);
  };

  const handleDelete = (id) => {
    alert(`Delete card ${id}`);
    setOpenMenuId(null);
  };

  return (
    <div className="card-grid">
      {cardsData.map(({ id, image, title, description }) => (
        <div key={id} className="card">
          <div className="card-menu-wrapper" ref={(el) => (menuRefs.current[id] = el)}>
            <button
              className="card-menu-button"
              onClick={() => handleMenuToggle(id)}
              aria-label="Open menu"
            >
              &#8942;
            </button>
            {openMenuId === id && (
              <div className="card-menu-popup">
                <button className="card-menu-item" onClick={() => handleEdit(id)}>
                  Edit
                </button>
                <button className="card-menu-item" onClick={() => handleDelete(id)}>
                  Delete
                </button>
              </div>
            )}
          </div>

          <img src={image} alt={title} className="card-image" />
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      ))}
    </div>
  );
}

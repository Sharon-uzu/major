import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV, FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const statusIcons = {
  paid: <FaCheckCircle className="status-icon paid" />,
  pending: <FaClock className="status-icon pending" />,
  rejected: <FaTimesCircle className="status-icon rejected" />,
};

const tableData = [
  { id: "001", datetime: "2025-10-10 14:32", customer: "John Doe", purchased: "Laptop", amount: "$1200", status: "paid" },
  { id: "002", datetime: "2025-10-12 09:15", customer: "Jane Smith", purchased: "Phone", amount: "$800", status: "pending" },
  { id: "003", datetime: "2025-10-13 17:45", customer: "Mike Johnson", purchased: "Headphones", amount: "$150", status: "rejected" },
  { id: "004", datetime: "2025-10-14 12:10", customer: "Alice Brown", purchased: "Tablet", amount: "$400", status: "paid" },
  { id: "005", datetime: "2025-10-15 15:50", customer: "Bob Green", purchased: "Monitor", amount: "$220", status: "pending" },
  { id: "006", datetime: "2025-10-16 11:30", customer: "Carol White", purchased: "Keyboard", amount: "$80", status: "paid" },
  // Add more as needed
];

export default function ResponsiveTable() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRefs = useRef({});

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

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

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleOptionClick = (id, option) => {
    alert(`${option} clicked for ID: ${id}`);
    setOpenMenuId(null);
  };

  // Calculate data to show on current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  // Pagination controls
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setOpenMenuId(null);
  };

  return (
    <div className="table-wrapper">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date &amp; Time</th>
            <th>Customer</th>
            <th>Purchased</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map(({ id, datetime, customer, purchased, amount, status }) => (
            <tr key={id}>
              <td data-label="ID">{id}</td>
              <td data-label="Date & Time">{datetime}</td>
              <td data-label="Customer">{customer}</td>
              <td data-label="Purchased">{purchased}</td>
              <td data-label="Amount">{amount}</td>
              <td data-label="Status" className={`status-cell ${status}`}>
                <div>
                  {statusIcons[status]} <span className="status-text">{status}</span>
                </div>
              </td>
              <td className="options-cell" ref={(el) => (menuRefs.current[id] = el)}>
                <button
                  className="menu-button"
                  onClick={() => toggleMenu(id)}
                  aria-label="Options"
                >
                  <FaEllipsisV />
                </button>
                {openMenuId === id && (
                  <div className="options-popup">
                    <button
                      className="option-item"
                      onClick={() => handleOptionClick(id, "Edit")}
                    >
                      Edit
                    </button>
                    <button
                      className="option-item"
                      onClick={() => handleOptionClick(id, "Delete")}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>

        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    name: "Alpha",
    type: "Premium",
    value: "$100",
    usage: "75%",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    status: "Active",
  },
  {
    id: 2,
    name: "Beta",
    type: "Basic",
    value: "$50",
    usage: "30%",
    startDate: "2025-02-01",
    endDate: "2025-09-30",
    status: "Expired",
  },
  {
    id: 3,
    name: "Gamma",
    type: "Trial",
    value: "$0",
    usage: "10%",
    startDate: "2025-10-01",
    endDate: "2025-11-01",
    status: "Inactive",
  },
  // Add more dummy rows here for pagination testing
  {
    id: 4,
    name: "Delta",
    type: "Enterprise",
    value: "$200",
    usage: "90%",
    startDate: "2025-05-01",
    endDate: "2025-11-30",
    status: "Active",
  },
  {
    id: 5,
    name: "Epsilon",
    type: "Standard",
    value: "$75",
    usage: "60%",
    startDate: "2025-03-01",
    endDate: "2025-10-30",
    status: "Expired",
  },
  {
    id: 6,
    name: "Zeta",
    type: "Trial",
    value: "$0",
    usage: "5%",
    startDate: "2025-09-01",
    endDate: "2025-10-15",
    status: "Inactive",
  },
  // Add more rows if needed
];

const StatusIcon = ({ status }) => {
  if (status === "Active") return <span className="status-icon active" />;
  if (status === "Expired") return <span className="status-icon expired" />;
  return <span className="status-icon inactive">⚠️</span>;
};

const StatusTable = () => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const menuRef = useRef(null); // ✅ Ref for tracking the menu

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenuId(null);
    }
  };

useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      setOpenMenuId(null);
    }
  };

  return (
    <div className="status-table-wrapper">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Value</th>
            <th>Usage</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.name}</td>
              <td>{entry.type}</td>
              <td>{entry.value}</td>
              <td>{entry.usage}</td>
              <td>{entry.startDate}</td>
              <td>{entry.endDate}</td>
              <td className="status-cell">
                <div>
                  <StatusIcon status={entry.status} />
                  <span className="status-text">{entry.status}</span>
                </div>
              </td>
              <td className="action-cell">
                <div ref={menuRef}>
                  <button
                    className="action-button"
                    onClick={() => toggleMenu(entry.id)}
                  >
                    ⋮
                  </button>
                  {openMenuId === entry.id && (
                    <div className="action-menu">
                      <div className="menu-item">Edit</div>
                      <div className="menu-item">Delete</div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, idx) => {
          const pageNum = idx + 1;
          return (
            <button
              key={pageNum}
              className={`pagination-button ${
                currentPage === pageNum ? "active" : ""
              }`}
              onClick={() => goToPage(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          className="pagination-button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StatusTable;

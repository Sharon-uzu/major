import React, { useState } from "react";
import DashHeader from "../DashComponents/DashHeader";
import Sidebar from "../DashComponents/Sidebar";
import { IoFilterSharp } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";


const orders = [
  {
    id: "ORD001",
    datetime: "2025-10-16 14:23",
    customer: "John Doe",
    purchased: {
      name: "Wireless Headphones",
      rating: 4,
      level: "Excellent",
    },
    description: "Noise-cancelling, over-ear headphones with Bluetooth 5.0.",
    status: "Published",
  },
  {
    id: "ORD002",
    datetime: "2025-10-15 09:45",
    customer: "Jane Smith",
    purchased: {
      name: "Smart Watch",
      rating: 3,
      level: "Fair",
    },
    description: "Water-resistant, heart rate monitor smart watch.",
    status: "Deleted",
  },
  {
    id: "ORD003",
    datetime: "2025-10-14 11:20",
    customer: "Alice Johnson",
    purchased: {
      name: "Bluetooth Speaker",
      rating: 2,
      level: "Poor",
    },
    description: "Compact portable speaker with deep bass.",
    status: "Published",
  },
  {
    id: "ORD004",
    datetime: "2025-10-13 08:00",
    customer: "Bob Williams",
    purchased: {
      name: "Noise-Cancelling Earbuds",
      rating: 5,
      level: "Excellent",
    },
    description: "High-performance wireless earbuds.",
    status: "Deleted",
  },
  {
    id: "ORD005",
    datetime: "2025-10-13 08:00",
    customer: "Bob Williams",
    purchased: {
      name: "Noise-Cancelling Earbuds",
      rating: 5,
      level: "Excellent",
    },
    description: "High-performance wireless earbuds.",
    status: "Deleted",
  },
  {
    id: "ORD006",
    datetime: "2025-10-13 08:00",
    customer: "Bob Williams",
    purchased: {
      name: "Noise-Cancelling Earbuds",
      rating: 5,
      level: "Excellent",
    },
    description: "High-performance wireless earbuds.",
    status: "Deleted",
  },
];


const StarRating = ({ rating }) => {
  // Display stars up to 5
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
};




function Review() {

    const [activeTab, setActiveTab] = useState("All Reviews");
    const [searchTerm, setSearchTerm] = useState("");

    const tabs = ["All Reviews", "Published", "Deleted"];
    const getLevelByRating = (rating) => {
        if (rating >= 4) return "Excellent";
        if (rating === 3) return "Fair";
        return "Poor";
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const filteredOrders = orders.filter((order) => {
  if (activeTab === "All Reviews") return true;
  return order.status === activeTab;
});

const filteredAndSearchedOrders = filteredOrders
  .filter(({ customer, description, purchased }) =>
    [customer, description, purchased.name]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

    const totalPages = Math.ceil(filteredAndSearchedOrders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedOrders = filteredAndSearchedOrders.slice(startIndex, startIndex + itemsPerPage);



  return (
    <div className="dashboard">
        <Sidebar/>

        <main>
            <div className="main-c">
                <DashHeader/>

                <div className="overview-cards">

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Total Review</h4>
                      <div>
                        <h3>2,500</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Approved Reviews</h4>
                      <div>
                        <h3>500</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Active Reviews</h4>
                      <div>
                        <h3>520</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Pending Reviews</h4>
                      <div>
                        <h3>500</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                </div>

                   <div className="tab-container">
                        <ul className="tab-list">
                            {tabs.map((tab) => (
                            <li
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`tab-item ${activeTab === tab ? "active-tab" : ""}`}
                            >
                                {tab}
                            </li>
                            ))}
                        </ul>

                        <div className="right-controls">
                            <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                            />
                            <button className="filter-button"><IoFilterSharp /> Filter</button>
                            <button className="filter-button"><LuRefreshCcw /> Refresh</button>

                        </div>
                    </div>


                    {/* table */}

                        <div className="review-table-wrapper">
                            <table className="orders-table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date & Time</th>
                                    <th>Customer</th>
                                    <th>Purchased</th>
                                    <th>Details</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    
                                    {paginatedOrders.map(({ id, datetime, customer, purchased, description }) => {
                                        const level = getLevelByRating(purchased.rating);
                                        return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{datetime}</td>
                                            <td>{customer}</td>
                                            <td>
                                            <div className="purchased-info">
                                                <div className="product-name">{purchased.name}</div>
                                            </div>
                                            </td>
                                            <td>
                                                <div className="details-cell">
                                                    <div className="rating-level">
                                                    <StarRating rating={purchased.rating} />
                                                    <span className="numeric-rating">{purchased.rating.toFixed(1)}</span>
                                                    <div className={`level level-${level.toLowerCase()}`}>{level}</div>
                                                    </div>
                                                    <div className="description">{description}</div>
                                                </div>
                                            </td>

                                            
                                            <td className="actions-cell">
                                                <div>
                                                    <button className="btn archive-btn">Archive</button>
                                                    <button className="btn approve-btn">Approve</button>
                                                </div>
                                            </td>
                                        </tr>
                                        );
                                    })}
                                </tbody>

                            </table>

                            <div className="pagination">
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="pagination-btn"
                                >
                                    Prev
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`pagination-btn ${currentPage === i + 1 ? "active" : ""}`}
                                    >
                                    {i + 1}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="pagination-btn"
                                >
                                    Next
                                </button>
                            </div>

                        </div>

            </div>
        </main>

       
        
    </div>
  );
}

export default Review;

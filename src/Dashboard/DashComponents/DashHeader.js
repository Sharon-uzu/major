import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdNotifications } from 'react-icons/md';
import img from '../../Assets/Avatar [1.1].png'

const DashHeader = () => {
  const [period, setPeriod] = useState('7'); // '7' or '30'

  const getDateRange = () => {
    const now = new Date();
    const start = new Date();
    start.setDate(now.getDate() - (period === '7' ? 7 : 30));
    return `${start.toLocaleDateString()} - ${now.toLocaleDateString()}`;
  };

  return (
    <div className="dashboard-heading">
      {/* Left Side */}
      <div className="dashboard-left">
        <img
          className="profile-pic"
          src={img}
          alt="profile"
        />
        <div className="user-info">
          <div className="user-name">John Doe</div>
          <div className="user-email">john.doe@example.com</div>
        </div>
      </div>

      {/* Right Side */}
      <div className="dashboard-right">
        <MdSearch className="icon" title="Search" />
        <MdNotifications className="icon" title="Notifications" />

        <select
          className="period-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          aria-label="Select period"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last month</option>
        </select>

        <div className="date-range">{getDateRange()}</div>

        <Link to="/add-product" className="add-product-btn">
         + Add Product
        </Link>
      </div>
    </div>
  );
};

export default DashHeader;

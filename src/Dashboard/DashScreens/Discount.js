import DashHeader from "../DashComponents/DashHeader";
import Sidebar from "../DashComponents/Sidebar";
import { FaFilter } from "react-icons/fa";
import StatusTable from "../DashComponents/StatusTable";

function Discount() {
  return (
    <div className="dashboard">
            <Sidebar/>

        <main>
            <div className="main-c">
                <DashHeader/>

                <div className="overview-cards discount-cards">

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Total Discount</h4>
                      <div>
                        <h3>₦200500</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Total Usage</h4>
                      <div>
                        <h3>500</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Active Discount</h4>
                      <div>
                        <h3>520</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Total Savings</h4>
                      <div>
                        <h3>₦200500</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Expiring Soon</h4>
                      <div>
                        <h3>20</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                </div>


                <div className="search-filter-bar">
                    {/* Search Bar */}
                    <div className="search-box">
                        <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        />
                    </div>
                    {/* right Controls */}
                    <div className="filter-controls">
                        <select className="filter-select">
                        <option value="7days">Last 7 Days</option>
                        <option value="1month">Last 1 Month</option>
                        </select>

                        <select className="filter-select">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        </select>

                        <button className="filter-button">
                        <FaFilter />
                        <span className="filter-label">Filter</span>
                        </button>
                    </div>

                    <StatusTable/>
                    
                    </div>

            </div>
        </main>

       
        
    </div>
  );
}

export default Discount;

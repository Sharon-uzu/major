import CardGrid from "../DashComponents/CardGrid";
import DashHeader from "../DashComponents/DashHeader";
import Sidebar from "../DashComponents/Sidebar";
import { FaFilter } from "react-icons/fa";

function Products() {
  return (
    <div className="dashboard">
            <Sidebar/>

        <main>
            <div className="main-c">
                <DashHeader/>

                <div className="overview-cards">

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Total Revenue</h4>
                      <div>
                        <h3>₦200500</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Total Products</h4>
                      <div>
                        <h3>500</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Active listings</h4>
                      <div>
                        <h3>520</h3>
                        <span>+73%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Total Sales</h4>
                      <div>
                        <h3>₦200500</h3>
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


                    <CardGrid/>
                    
                    </div>

            </div>
        </main>

       
        
    </div>
  );
}

export default Products;

import BalanceGraph from "../DashComponents/BalanceGraph";
import DashHeader from "../DashComponents/DashHeader";
import Sidebar from "../DashComponents/Sidebar";


function Overview() {
  return (
    <div className="dashboard">
            <Sidebar/>

        <main>
            <div className="main-c">
                <DashHeader/>

                <div className="overview-cards">

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

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Total Orders</h4>
                      <div>
                        <h3>305</h3>
                        <span>+23%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Active Products</h4>
                      <div>
                        <h3>200</h3>
                        <span>+70%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                  <div className="over1">
                    <div className="over1-c">
                      <h4>Registered users</h4>
                      <div>
                        <h3>500</h3>
                        <span>+33%</span>
                        <b>vs prev</b>
                      </div>
                    </div>
                  </div>

                </div>

                <BalanceGraph/>
            </div>
        </main>

       
        
    </div>
  );
}

export default Overview;

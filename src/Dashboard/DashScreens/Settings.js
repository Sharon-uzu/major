import DashHeader from "../DashComponents/DashHeader";
import Sidebar from "../DashComponents/Sidebar";
import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import img from '../../Assets/Avatar [1.1] (1).png'
import BrowserTable from "../DashComponents/BrowserTable";
import Integration from "../DashComponents/Integration";

const tabs = [
  'Profile',
  'Privacy & Security',
  'Integrations',
  'Appearance',
  'Store Settings',
  'Product Settings',
  'Payment & Billing',
  'Shipping & Delivery',
];



function renderTabContent(tab) {
  switch (tab) {
    case 'Profile':
      return (
        <div className="tab-section">
          <div className="prof-manage">
            <div className="account">
              <h3>Account Settings</h3>
              <p>Manage and collaborate on your account settings</p>
            </div>

            <div className="prof-btns">
              <button>Discard</button>
              <button className="save">Save Changes</button>
            </div>

          </div>

          <div className="prof-settings">
            <div className="profs-l">
              <h4>Profile Photo</h4>
              <p>Min 400x400px, PNG or JPEG formats.</p>
            </div>
            <div className="profs-r r-img">
              <img src={img} alt="images"/>
              <button>Change</button>
            </div>
          </div>


          <div className="prof-settings">
            <div className="profs-l">
              <h4>Full Name</h4>
              <p>Your name will be visible to your contacts.</p>
            </div>
            <div className="profs-r">
              <input type="text" value='James Brown'/>
              <HiPencil className='prof-i'/>
            </div>
          </div>


          <div className="prof-settings">
            <div className="profs-l">
              <h4>Email Address</h4>
              <p>Business email address recommended.</p>
            </div>
            <div className="profs-r">
              <input type="text" value='james@gmail.com'/>
              <HiPencil className='prof-i'/>
            </div>
          </div>

          <div className="prof-settings">
            <div className="profs-l">
              <h4>Phone Number</h4>
              <p>Business phone number recommended.</p>
            </div>
            <div className="profs-r">
              <input type="text" value='+234 987 654 34567'/>
              <HiPencil className='prof-i'/>
            </div>
          </div>


        </div>
      );

    case 'Privacy & Security':
      return (
        <div className="tab-section">
          <div className="prof-manage">
            <div className="account">
              <h3>Privacy & Security</h3>
              <p>Customize your privacy and security settings</p>
            </div>

            <div className="prof-btns">
              <button>Discard</button>
              <button className="save">Save Changes</button>
            </div>

          </div>

          <div className="prof-settings">
            <div className="profs-l">
              <h4>Change Password</h4>
              <p>Update password for enhanced account security.</p>
            </div>
            <div className="profs-r r-img">
              <button>Change Password</button>
            </div>
          </div>

          <div className="prof-settings">
            <div className="profs-l">
              <h4>Backup Codes</h4>
              <p>Generate backup codes for your 2FA device.</p>
            </div>
            <div className="profs-r r-img">
              <button>Generate Codes</button>
            </div>
          </div>

          <div className="prof-settings">
            <div className="profs-l">
              <h4>2FA-Authentication</h4>
              <p>Add an extra layer of protection to your account.</p>
            </div>
            <div className="profs-r r-img">
              <button>Manage Authentication</button>
            </div>
          </div>

          <div className="prof-manage">
            <div className="account">
              <h3>Active Sessions</h3>
              <p>Monitor and manage all your active devices.</p>
            </div>

            <div className="prof-btns">
              <button className="log">Log out all sessions</button>
            </div>

          </div>

          <BrowserTable/>

        </div>
      );

    case 'Integrations':
      return (
        <div className="tab-section">
          <div className="prof-manage">
            <div className="account">
              <h3>Integrations</h3>
              <p>Connect and sync with essential tools and platforms</p>
            </div>

            <div className="prof-btns">
              <button>Discard</button>
              <button className="save">Save Changes</button>
            </div>

          </div>

          <Integration/>
        </div>
      );

    // Add similar content blocks for the rest...
    default:
      return <div className="tab-section">Content for {tab}</div>;
  }
}

function Settings() {

    const [activeTab, setActiveTab] = useState(tabs[0]);


  return (
    <div className="dashboard">
            <Sidebar/>

        <main>
            <div className="main-c">
                <DashHeader/>

              {/* settings tabs */}

                <div className="settings-container">
                  <div className="tabs">
                    {tabs.map(tab => (
                      <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="tab-content">
                    {/* <h2>{activeTab}</h2> */}
                    {renderTabContent(activeTab)}
                  </div>
                </div>
                
            </div>
        </main>

       
        
    </div>
  );
}

export default Settings;

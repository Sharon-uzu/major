// Tabs.js
import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Integration = () => {
  const [activeTab, setActiveTab] = useState('social');

  const renderContent = () => {
    switch (activeTab) {
      case 'social':
        return <div className="tab-integration-content">
                    <div className="prof-settings">
                        <div className="profs-l">
                            <div className='prof-icons'>
                                <FaFacebook className='ps-i'/>
                            </div>
                            <div>
                                <h4>2FA-Authentication</h4>
                                <p>Add an extra layer of protection to your account.</p>
                            </div>
                        </div>
                            
                        <div className="profs-r r-img">
                            <button>Manage Authentication</button>
                        </div>
                    </div>

                    <div className="prof-settings">
                        <div className="profs-l">
                            <div className='prof-icons'>
                                <RiInstagramFill className='ps-i'/>
                            </div>
                            <div>
                                <h4>Instagram</h4>
                                <p>Share your products and stories directly to Instagram Shopping</p>
                            </div>
                        </div>
                            
                        <div className="profs-r r-img">
                            <button>Connect</button>
                        </div>
                    </div>

                    <div className="prof-settings">
                        <div className="profs-l">
                            <div className='prof-icons'>
                                <FaTwitter className='ps-i'/>
                            </div>
                            <div>
                                <h4>X(Twitter)</h4>
                                <p>Share updates and engage with customers on X (Twitter)</p>
                            </div>
                        </div>
                            
                        <div className="profs-r r-img">
                            <button>Connect</button>
                        </div>
                    </div>

                    <div className="prof-settings">
                        <div className="profs-l">
                            <div className='prof-icons'>
                                <FaTiktok className='ps-i'/>
                            </div>
                            <div>
                                <h4>TikTok</h4>
                                <p>Create and manage TikTok shop listings and ad campaigns</p>
                            </div>
                        </div>
                            
                        <div className="profs-r r-img">
                            <button>Connect</button>
                        </div>
                    </div>

                    <div className="prof-settings">
                        <div className="profs-l">
                            <div className='prof-icons'>
                                <IoLogoWhatsapp className='ps-i'/>
                            </div>
                            <div>
                                <h4>WhatsApp</h4>
                                <p>Enable customer messaging and order updates via WhatsApp</p>
                            </div>
                        </div>
                            
                        <div className="profs-r r-img">
                            <button>Connect</button>
                        </div>
                    </div>
                </div>;
      case 'api':
        return <div className="tab-integration-content">🔗 API Settings configuration goes here.</div>;
      case 'connections':
        return <div className="tab-integration-content">🧩 Connection management options go here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-integration">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'social' ? 'active' : ''}`}
          onClick={() => setActiveTab('social')}
        >
          Social Media
        </button>
        <button
          className={`tab ${activeTab === 'api' ? 'active' : ''}`}
          onClick={() => setActiveTab('api')}
        >
          API Settings
        </button>
        <button
          className={`tab ${activeTab === 'connections' ? 'active' : ''}`}
          onClick={() => setActiveTab('connections')}
        >
          Connections
        </button>
      </div>
      <div className="tab-integration-body">{renderContent()}</div>
    </div>
  );
};

export default Integration;

import React, { useState } from "react";
import DashHeader from "../DashComponents/DashHeader";
import Sidebar from "../DashComponents/Sidebar";


function Announcement() {

    const [activeTab, setActiveTab] = useState("notification");


  return (
    <div className="dashboard">
        <Sidebar/>

        <main style={{backgroundColor: '#fcfcfc'}}>
            <div className="main-c">
                <DashHeader/>

                    <div className="ann-wrapper">
                        {/* Tabs */}
                        <div className="ann-tabs-header">
                            <div
                            className={`ann-tab ${activeTab === "notification" ? "active" : ""}`}
                            onClick={() => setActiveTab("notification")}
                            >
                            Notification
                            </div>
                            <div
                            className={`ann-tab ${activeTab === "blog" ? "active" : ""}`}
                            onClick={() => setActiveTab("blog")}
                            >
                            Blog
                            </div>
                        </div>

                        {/* Content */}
                        <div className="ann-tab-content">
                            {activeTab === "notification" ? (
                            <div className="ann-tab-pane">
                                <div className="ann-notification">
                                    <div className="ann-not-c">
                                        <p>Recipient</p>
                                        <select>
                                            <option value={null}>Select</option>
                                            <option value="subscribers">Subscribers</option>
                                            <option value="customers">Customers</option>
                                        </select>

                                        <div className="all">
                                            <input type="checkbox"/>
                                            <h5>Select all</h5>
                                        </div>

                                        <p>Message</p>
                                        <textarea placeholder="Type your message here..."></textarea>
                                        <div className="ann-btn">
                                            <button className="send-btn">Send Notification</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ) : (
                            <div className="ann-tab-pane">
                                <div className="ann-notification">
                                    <div className="ann-not-c">
                
                                        <p>Blog Post</p>
                                        <textarea placeholder="Type your message here..."></textarea>
                                        <div className="ann-btn">
                                            <button className="send-btn">Post Blog</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>


                

            </div>
        </main>

       
        
    </div>
  );
}

export default Announcement;

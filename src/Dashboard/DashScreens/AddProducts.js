import React, { useState } from "react";
import DashHeader from "../DashComponents/DashHeader";
import Sidebar from "../DashComponents/Sidebar";
import StepTabs from "../DashComponents/StepTabs";

const steps = [
  { number: 1, title: 'Start', content: 'Welcome to the process. Let\'s begin.' },
  { number: 2, title: 'Details', content: 'Please provide your information here.' },
  { number: 3, title: 'Review', content: 'Check all your inputs before proceeding.' },
  { number: 4, title: 'Confirm', content: 'Are you sure you want to submit?' },
  { number: 5, title: 'Finish', content: 'All done! Thank you.' },
];


function AddProducts() {



  return (
    <div className="dashboard">
        <Sidebar/>

        <main style={{backgroundColor: '#fcfcfc'}}>
            <div className="main-c">
                <DashHeader/>

                <StepTabs/>

            </div>
        </main>

       
        
    </div>
  );
}

export default AddProducts;

import React from 'react';
import Resume from '../components/resume.component';
import './resume.page.css'; // Import the CSS file for the page

const ResumePage = () => {
  return (
    <div>
      <div className="resume-container full-width">
        <iframe 
          title="My Resume"
          src="https://docs.google.com/document/d/e/2PACX-1vSuBoKlqyT4T_fEyOiLAbTFK-kDSCxpcVX0Eumr1shxKDCJJyWSQtjqMsRplCH5uM0psQ_GwB3zMXUP/pub?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          scrolling="yes"
        />
      </div>
      <div className="resume-container mobile-only">
        <Resume />
      </div>
    </div>
  );
};

export default ResumePage;

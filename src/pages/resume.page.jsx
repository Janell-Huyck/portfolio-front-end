import React from 'react';
import './resume.page.scss'; // Import the SCSS file for the page

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
      <iframe 
          title="My Resume"
          src="https://docs.google.com/document/d/e/2PACX-1vRhjrqNJHIMAqTHcKOiwpskLUlivyo9tXPQTG_Ea6nqY5kQzU1jec20Lp8yyfK2kQyrflUT0s1Wvpm2/pub?embedded=true"
          width="100%"
          height="1800"
          frameBorder="0"
          scrolling="yes" 
          ></iframe>
      </div>
    </div>
  );
};

export default ResumePage;

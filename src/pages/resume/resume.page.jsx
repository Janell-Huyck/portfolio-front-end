import React from 'react';
import { ResumePageContainer, ResumeFullWidth, ResumeMobileWidth} from './resume.styles.jsx';

const ResumePage = () => {
  return (
    <ResumePageContainer>
      <ResumeFullWidth>
        <iframe 
          title="My Resume"
          src="https://docs.google.com/document/d/e/2PACX-1vSuBoKlqyT4T_fEyOiLAbTFK-kDSCxpcVX0Eumr1shxKDCJJyWSQtjqMsRplCH5uM0psQ_GwB3zMXUP/pub?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          scrolling="yes"
        />
      </ResumeFullWidth>
      <ResumeMobileWidth>
        <iframe 
          title="My Resume"
          src="https://docs.google.com/document/d/e/2PACX-1vRhjrqNJHIMAqTHcKOiwpskLUlivyo9tXPQTG_Ea6nqY5kQzU1jec20Lp8yyfK2kQyrflUT0s1Wvpm2/pub?embedded=true"
          width="100%"
          height="1800"
          frameBorder="0"
          scrolling="yes" 
        />
      </ResumeMobileWidth>
    </ResumePageContainer>
  );
};

export default ResumePage;

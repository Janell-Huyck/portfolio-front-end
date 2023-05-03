import React from 'react';
import Accordion from './accordion.component';

const Resume = () => {
  return (
    <div className="resume">
      <Accordion title="Languages">
        <ul>
          <li>Ruby</li>
          <li>Python</li>
          <li>JavaScript</li>
        </ul>
      </Accordion>
      <Accordion title="Skills">
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Microsoft Azure</li>
          <li>RubyMine</li>
          <li>PyCharm</li>
          <li>VSCode</li>
          <li>Active Record</li>
        </ul>
      </Accordion>
      <Accordion title="Education">
        <ul>
          <li>Full Stack Web Development, Kenzie Academy, Indianapolis, IN (2020)</li>
          <li>Nursing, Wake Technical College, Raleigh, NC</li>
          <li>BS - Biology, University of Wyoming, Laramie, WY (Phi Beta Kappa)</li>
        </ul>
      </Accordion>
      <Accordion title="Experience">
        <ul>
          <li>Software Engineer Contractor, Robert Half, remote (May 2022 - Feb 2023)</li>
          <li>Junior Software Engineer, Spring, remote (Sept 2020 - May 2022)</li>
          <li>SE Student Coach, Kenzie Academy, Indianapolis, IN (Sept 2019 - July 2020)</li>
        </ul>
      </Accordion>
    </div>
  );
};

export default Resume;

import styled from 'styled-components';

export const ResumePageContainer = styled.div`
    @media (min-width: 991.98px) {
      margin-left: 310px;
      width: calc(100% - 310px);
  }
  `;
  
  export const ResumeFullWidth = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;

        iframe {
          height: 100vh; /* Set the height of the iframe to 100% of the viewport height */
        }
    }
  `;
  
  export const ResumeMobileWidth = styled.div`
    display: none;
    @media screen and (max-width: 767px) {
      display: block;
      iframe {
        height: 100vh; /* Set the height of the iframe to 100% of the viewport height */
      }
    }
  `;

  
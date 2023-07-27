import styled from 'styled-components';

// .see-links {
//     display: flex;
//     flex-direction: column;
//     align-items: stretch;
//     justify-content: space-between;
//     flex-shrink: 1;
// }

// .card-img-top {
//     object-fit: scale-up;
//     min-height: calc(var(--vh, 1vh) * 60);
//     max-height: calc(var(--vh, 1vh) * 60);
//     width: 100%;
// }

// .card-footer {
//     min-height: calc(var(--vh, 1vh) * 30);
//     max-height: calc(var(--vh, 1vh) * 30);
//     align-items: center;
//     justify-content: space-between;
// }

// .project-card {
//     font-size: 0.6vw;
// }

// .project-title {
//     font-size: 1.5rem;
//     min-height: calc(var(--vh, 1vh) * 10);
//     max-height: calc(var(--vh, 1vh) * 10);
// }

// .project-button {
//     font-size: 0.8vw !important;
//     width: 100%;
//     margin-bottom: 0.1rem;
// }

// .project-description {
//     font-size: 1rem;

// }


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;

  padding: 1rem;
  margin: 20px 2rem;

  border: 1px solid #ccc;
  border-radius: 4px;

  height: 500px;
  width: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background-color: #fff;

    @media (max-width: 600px) {
        width: 90%;
    }

    
`;

export const CardImage = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

export const CardTitle = styled.h2`
  margin-bottom: 20px;
`;

export const CardText = styled.p`
  margin-bottom: 20px;
`;

export const CardButton = styled.button`
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: var(--tertiary-color);
  color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

export const CardButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: space-around;
    flex-wrap: wrap;

    margin-top: auto;
    width: 100%;
`;
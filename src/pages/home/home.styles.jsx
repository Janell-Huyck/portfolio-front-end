import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    min-height: calc(var(--vh, 1vh) * 80);
    width: 100%;
    padding: 1rem;
    margin: 0 auto;

    p {
        font-size: 1.5rem;
    }

    @media (min-width: 991.98px) {
        margin-left: 310px;
        width: calc(100% - 310px);
    }
`;

export const Headshot = styled.img`
    width: 100%;
    max-width: 300px; /* limit the size of the headshot */
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #fff;
    transition: all 0.3s ease-in-out;
    margin-bottom: 2rem;
    color: #fff;
`;

export const NameTitleLocation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


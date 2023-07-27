import styled from 'styled-components';

export const ProjectsPageContainer = styled.div`
    @media (min-width: 991.98px) {
        margin-left: 310px;
        width: calc(100% - 310px);
    }
`;

export const CenteredContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    h1 {
        font-size: 2rem;
        margin: 1rem;
    }
`;


export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;

    @media (min-width: 600px) {
        width: 80%;
    }
`;


import styled from 'styled-components';

export const FooterLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: calc(var(--vh, 1vh) * 10);
    justify-content: space-around;
    align-items: center;
    margin-top: auto;
    margin-bottom: 0;

    @media (min-width: 991.98px) {
        margin-left: 310px;
        width: calc(100% - 310px);
    }
`;
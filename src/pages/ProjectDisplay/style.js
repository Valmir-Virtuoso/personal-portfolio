import styled from 'styled-components';

export const Container = styled.main`

    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        margin-top: 50px;
        color: #3e497a;
        font-size: 35px;
    } 

    img {
        width: 700px;
        border-radius: 10px;
    }

    p {
        font-size: 40px;
        color: #3e497a;
    }

    svg {
        font-size: 60px;
        color: #3e497a;
    }

    @media (max-width: 600px) {

        img {
            width: 300px;
        }

    }

    @media (min-width: 600px) {

        img {
            width: 400px;
        }

    }

    @media (min-width: 900px) {

        img {
            width: 600px;
        }

    }

`;
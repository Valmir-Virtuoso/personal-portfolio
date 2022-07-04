import styled from 'styled-components';

export const Container = styled.main`

    width: 100%;
    align-items: center;

    font-family: "Arial", sans-serif;
    color: #3E497A;

    .about {

        width: 100%;
        height: calc(100vh - 100px);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        background-color: #21325E;
        color: #F0F0F0;

        h2 {

            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 80px;
            color: #E9D35B;
            height: 50px;

        }

        .prompt {

            width: 40%;
            font-size: 30px;

        }

        svg {

            font-size: 60px;
            margin: 5px;
            color: white;
            opacity: 0.5;

            :hover {

                transition: all 0.2s;
                opacity: 1;

            }

        }
        

    }

    .skills {

        text-align: center;

        font-size: 35px;
        width: 100%;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h1 {

            color: #3E497A;

        }

        .list {

            list-style: none;
            width: 60%;

            text-align: center;

            span {

                font-size: 20px;

            }

        }

    }

    @media (max-width: 600px) {

        .about {

            h2 {
                font-size: 40px;
            }

            .prompt {

                margin-top: 10px;
                font-size: 20px;
                width: 80%;

            }

        }

        .skills {

            text-align: center;

            h2 {

                font-size: 30px;

            }

            .list {

                padding: 0;

            }

        }

    }

`;
import styled from 'styled-components';

export const Container = styled.main`

    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {

        color: #3E497A;

    }

    .projectList {
        width: 70vw;
        height: auto;

        display: flex;
        justify-content: center;

        place-items: center;
    }

    .projectItem {

        border-radius: 15px;

        width: 300px;
        height: 300px;

        margin: 40px;

        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
        text-align: center;

        h1 {
            
            font-size: 25px;

        }

        
        .bgImage {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            
            width: 100%;
            height: 200px;
            
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        :hover {
            box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
            transition: 0.3s ease-in;
            cursor: pointer;
        }
    }

    @media (max-width: 1300px) {
        .projectList {
            grid-template-columns: 1fr 1fr;
        }
    }
  
    @media (max-width: 800px) {
        .projectList {
            grid-template-columns: 1fr;
        }
    }
    
    @media (max-width: 800px) {
        .projectList {
            
            width: 100%;

            .projectItem {
                width: 300px;
                height: 300px;
            }

        }
        
    }

`;
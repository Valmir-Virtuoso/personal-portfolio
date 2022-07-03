import styled from 'styled-components';

export const NavBarStyled = styled.header`

    width: 100%;
    height: 100%;
    background-color: #21325E;
    color: red;

    .navBar-toggleButton {

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        svg {

            font-size: 3.1rem;

        }

        button {

            margin-right: 20px;
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;

        }

    }

    .navBar-links {

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        a {

            color: white;
            text-decoration: none;
            margin: 20px;
            font-size: 1.55rem;

        }

    }

    #open {

        height: 100vh;

        .navBar-links {

            flex-direction: column;
            justify-content: flex-start;
            margin-top: 100px;

        }

        a {

            width: 100%;
            text-align: center;

        }
        
    }

    
    @media only screen and (max-width: 900px) {
        
        a {
            
            width: 70px;
            
        }
        
    }   
    
    @media only screen and (max-width: 600px) {

        .navBar-toggleButton {

            display: flex;
        }

        #close a {

            display: none;

        }

    } 
    
    @media only screen and (min-width: 600px) {

        .navBar-toggleButton {

            display: none;
        }

        .hiddenLinks {

            display: none;

        }

        #opem {

            height: 100px;

        }

        #opem .navBar-links{

            flex-direction: row;

        }

    } 
    
`
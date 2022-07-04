import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Container } from './style';


const Home = () => {

    return (

        <Container>

            <div className="about">

                <h2>Olá Meu Nome é Valmir</h2>
                <div className="prompt">

                    <p>Um desenvolvedor front-end estudando sobre o back-end e criando coisas próprias.</p>
                    <a href="https://github.com/Valmir-Virtuoso" target="_blank" rel="noreferrer">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/valmirvirtuoso/" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </a>

                </div>

            </div>

            <div className="skills">

                <h1>Skills</h1>
                <ol className="list">

                    <li className="item">

                        <h2>Front-End</h2>
                        <span>
                            ReactJS, Angular, Redux, HTML, CSS, Context-API, MaterialUI, Yarn, TailwindCSS, StyledComponents, TypeScript
                        </span>

                    </li>

                    <li className="item">

                        <h2>Back-End</h2>
                        <span>

                            NodeJS, ExpressJS, PostgreSQL, TypeScript

                        </span>

                    </li>

                    <li className="item">

                        <h2>Languages</h2>
                        <span>

                            JavaScript, TypeScript

                        </span>

                    </li>

                </ol>

            </div>

        </Container>

    );

}

export default Home;
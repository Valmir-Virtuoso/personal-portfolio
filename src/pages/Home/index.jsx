import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import './styles.css';

const Home = () => {

    return (

        <div className="home">

            <div className="about">

                <h2>Olá Meu Nome é Valmir</h2>
                <div className="prompt">

                    <p>Um desenvolvedor front-end estudando sobre o back-end e criando coisas próprias.</p>
                    <GitHubIcon />
                    <LinkedInIcon />
                    <EmailIcon />

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

        </div>

    );

}

export default Home;
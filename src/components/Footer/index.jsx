import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './styles.css';

const Footer = () => {

    return (

        <footer>

            <div className="footer-social-media">

                <GitHubIcon />
                <LinkedInIcon />

            </div>
            
            <p>Feito por Valmir Mendes Virtuoso Filho</p>

        </footer>

    );

}

export default Footer;
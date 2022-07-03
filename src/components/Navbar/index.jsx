import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder'
import { useEffect, useState } from "react";
import './styles.css';

const NavBar = () =>  {

    const  [expandNavBar, setExpandNavBar] = useState(false);

    //Fecha a o menu mobile quando trocar de pagina.
    const location = useLocation();

    useEffect(() => {

        setExpandNavBar(false);

    }, [location]);

    return (

        <div className="navbar" id={expandNavBar ? "open" : "close"}>

            <div className="toggleButton">

                <button onClick={() => setExpandNavBar(!expandNavBar)}>
                    <ReorderIcon />
                </button>

            </div>

            <div className="links">

                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>

            </div>

        </div>

    );

}

export default NavBar;
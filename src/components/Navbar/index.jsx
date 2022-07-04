import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder'
import { useEffect, useState } from "react";
import './styles.css';

const NavBar = () =>  {

    const  [expandNavBar, setExpandNavBar] = useState(false);

    //Fecha a o menu mobile quando trocar de pagina.
    const location = useLocation();

    console.log(location)

    useEffect(() => {

        setExpandNavBar(false);

    }, [location]);

    return (

        <header className="navbar" id={expandNavBar ? "open" : "close"}>

            <div className="toggleButton">

                <button onClick={() => setExpandNavBar(!expandNavBar)}>
                    <ReorderIcon />
                </button>

            </div>

            <div className="links">

                <Link to="/" className={location.pathname === "/" ? "test" : ""}>Home</Link>
                <Link to="/projects" className={location.pathname === "/projects" ? "test" : ""}>Projects</Link>
                <Link to="/experience" className={location.pathname === "/experience" ? "test" : ""}>Experience</Link>

            </div>

        </header>

    );

}

export default NavBar;
import { Routes as Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Experience from "../pages/Experience";
import Home from "../pages/Home";
import ProjectDisplay from "../pages/ProjectDisplay";
import Projects from "../pages/Projects";

const Routes = () => {

    return (

        <Router>

            <NavBar />
            <Switch>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/project/:id" element={<ProjectDisplay />}/>
                <Route path="/experience" element={<Experience />}/>
            </Switch>
            <Footer />
            
        </Router>

    );

}

export default Routes;
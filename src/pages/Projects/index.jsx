import ProjectItem from "../../components/ProjectItens";
import { ProjectList } from "../../helpers/ProjectList";

import './styles.css';

const Projects = () => {

    return (

        <main className="projects">

            <h1> Meus Projetos </h1>
            <div className="projectList">

                {

                    ProjectList.map((project, index) => {

                        return <ProjectItem key={index} id={index} name={project.name} image={project.image}/>

                    })

                }

            </div>

        </main>

    );

}

export default Projects;
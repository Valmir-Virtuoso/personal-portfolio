import ProjectItem from "../../components/ProjectItens";
import { ProjectList } from "../../helpers/ProjectList";
import { Container } from "./style";

const Projects = () => {

    return (

        <Container>

            <h1> Meus Projetos </h1>
            <div className="projectList">

                {

                    ProjectList.map((project, index) => {

                        return <ProjectItem key={index} id={index} name={project.name} image={project.image}/>

                    })

                }

            </div>

        </Container>

    );

}

export default Projects;
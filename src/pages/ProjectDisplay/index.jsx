import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
import InsertLinkIcon from '@material-ui/icons/InsertLink';

import { Container } from "./style";

const ProjectDisplay = () => {

    const  { id } = useParams();
    const project = ProjectList[id];

    return (

        <Container>

            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>

                <strong>Skills:</strong> {project.skills}

            </p>
            <a href={project.link} target="_blank" rel="noreferrer">
                <InsertLinkIcon />
            </a>

        </Container>

    );

}

export default ProjectDisplay
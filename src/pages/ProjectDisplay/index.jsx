import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
import GitHubIcon from '@material-ui/icons/GitHub';

import './styles.css';

const ProjectDisplay = () => {

    const  { id } = useParams();
    const project = ProjectList[id];

    return (

        <div className="project">

            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>

                <strong>Skills:</strong> {project.skills}

            </p>
            <a href={project.link} target="_blank">
                <GitHubIcon />
            </a>

        </div>

    );

}

export default ProjectDisplay
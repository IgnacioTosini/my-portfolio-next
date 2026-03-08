import { Project } from '@/types/project';
import { ProjectCard } from '../ProjectCard/ProjectCard'
import './_projectsGrid.scss';

interface Props {
    projects: Project[];
}

export const ProjectsGrid = ({ projects }: Props) => {
    return (
        <div className='projectsGrid'>
            {projects.map(project => (
                <div key={project.id} data-projects-anim='card' data-projects-page-anim='card'>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    )
}



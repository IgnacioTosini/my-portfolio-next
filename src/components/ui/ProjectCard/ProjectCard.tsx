import { Project } from '@/types/project'
import Image from 'next/image';
import Link from 'next/link';
import { ProjectLinks } from '../ProjectLinks/ProjectLinks';
import './_projectCard.scss'

interface Props {
    project: Project;
}

export const ProjectCard = ({ project }: Props) => {
    const mediaVersion = new Date(project.updatedAt).getTime();
    const firstImageUrl = project.images[0]?.url;
    const imageUrlWithVersion = firstImageUrl
        ? `${firstImageUrl}${firstImageUrl.includes("?") ? "&" : "?"}v=${mediaVersion}`
        : "/placeholder.png";

    return (
        <div className='projectCard'>
            <Link href={`/projects/${project.slug}`} className='projectLink'>
                <Image src={imageUrlWithVersion} alt={project.images[0]?.alt || project.title} width={400} height={300} className='projectImage' />
                <div className='projectContent'>
                    <h3 className='projectTitle'>{project.title}</h3>
                    {project.technologies.length > 0 && (
                        <div className='projectTechnologies'>
                            {project.technologies.map(tech => (
                                <span key={tech.id} className='projectTechnology'>{tech.name}</span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
            <ProjectLinks githubUrl={project.githubUrl ?? undefined} demoUrl={project.demoUrl ?? undefined} />
        </div>
    )
}

import { prisma } from '@/lib/prisma'
import { ProjectsClient } from './ProjectsClient'
import './_projects.scss'

export const Projects = async () => {
  const projects = await prisma.project.findMany({
    where: { featured: true },
    include: { technologies: true, images: true },
    orderBy: { createdAt: 'desc' },
  })
  return <ProjectsClient projects={projects} />
}

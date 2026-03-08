import { Metadata } from "next";
import { getProjects } from "@/actions/project/getProjects";
import ProjectsClient from "@/components/project/ProjectsClient/ProjectsClient";
import './_projectsPage.scss'

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio of personal and professional projects.",
    alternates: {
        canonical: "/projects",
    },
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="projectsPage">
      <ProjectsClient projects={projects} />
    </div>
  );
}
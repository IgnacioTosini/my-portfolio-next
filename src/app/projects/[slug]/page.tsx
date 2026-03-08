import { Metadata } from 'next';
import { getSiteUrl } from '@/utils/site-url';
import { getProjectBySlug } from '@/actions/project/getProjectBySlug';
import ProjectGallery from '@/components/project/ProjectGallery/ProjectGallery';
import './_projectPage.scss';

const siteUrl = getSiteUrl();

interface Props {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ tech?: string | string[] }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const slug = (await params).slug
    const project = await getProjectBySlug(slug);
    const url = `${siteUrl}/projects/${slug}`;

    return {
        title: project?.title ?? 'Proyecto no encontrado',
        description: project?.description ?? '',
        alternates: {
            canonical: `/projects/${slug}`,
        },
        robots: project
            ? undefined
            : {
                index: false,
                follow: false,
            },
        openGraph: {
            title: project?.title ?? 'Proyecto no encontrado',
            description: project?.description ?? '',
            url,
            images: project?.images.map((img) => img.url) ?? []
        },
        twitter: {
            card: "summary_large_image",
            title: project?.title ?? 'Proyecto no encontrado',
            description: project?.description ?? '',
            images: project?.images.map((img) => img.url) ?? [],
        }
    }
}

export default async function ProjectPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const { tech } = await searchParams;
    const project = await getProjectBySlug(slug)
    const selectedTech = Array.isArray(tech) ? tech[0] : tech;
    return (
        <div className="projectPage">
            <ProjectGallery project={project!} selectedTechParam={selectedTech} />
        </div>
    );
}
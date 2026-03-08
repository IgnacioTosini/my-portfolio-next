"use client";

import { IoLogoGithub } from 'react-icons/io';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';
import { useLanguage } from '@/providers/LanguageProvider';
import './_projectLinks.scss';

interface Props {
    githubUrl?: string;
    demoUrl?: string;
}

export const ProjectLinks = ({ githubUrl, demoUrl }: Props) => {
    const { t } = useLanguage();

    return (

        <div className='projectLinks'>
            {githubUrl && (
                <a href={githubUrl} className='projectLink' target="_blank" rel="noopener noreferrer"><IoLogoGithub /> {t('projectLinks.github')}</a>
            )}
            {demoUrl && (
                <a href={demoUrl} className='projectLink demo' target="_blank" rel="noopener noreferrer"><LuSquareArrowOutUpRight /> {t('projectLinks.demo')}</a>
            )}
        </div>
    )
}

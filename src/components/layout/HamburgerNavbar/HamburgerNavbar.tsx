import Link from 'next/link';
import type { MouseEvent } from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { useLanguage } from '@/providers/LanguageProvider';
import './_hamburgerNavbar.scss';

type HamburgerNavbarProps = {
    id: string;
    isOpen: boolean;
    onSectionClick: (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
    onLinkClick: () => void;
    onProjectsLinkClick: () => void;
};

export const HamburgerNavbar = ({ id, isOpen, onSectionClick, onLinkClick, onProjectsLinkClick }: HamburgerNavbarProps) => {
    const { locale, setLocale, t } = useLanguage();

    return (
        <div id={id} className={`hamburgerNavbar ${isOpen ? 'open' : ''}`}>
            <Link href="/#about" onClick={(event) => onSectionClick(event, 'about')}>{t('navigation.about')}</Link>
            <Link href="/#tech" onClick={(event) => onSectionClick(event, 'tech')}>{t('navigation.tech')}</Link>
            <Link href="/#projects" onClick={(event) => onSectionClick(event, 'projects')}>{t('navigation.projects')}</Link>
            <Link href="/projects" onClick={onProjectsLinkClick}>{t('navigation.allProjects')}</Link>
            <button
                type="button"
                className="languageToggle"
                onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
                aria-label={locale === 'es' ? t('navigation.switchToEn') : t('navigation.switchToEs')}
            >
                {locale === 'es' ? t('locale.en') : t('locale.es')}
            </button>
            <div className="contactIcons">
                <a href="https://github.com/ignaciotosini" className="icon" aria-label={t('navigation.githubProfile')} target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ignacio-tosini/" className="icon" aria-label={t('navigation.linkedinProfile')} target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin size={24} />
                </a>
            </div>
        </div>
    )
}

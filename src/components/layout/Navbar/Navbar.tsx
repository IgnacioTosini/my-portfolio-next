'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { HamburgerNavbar } from '@/components/layout/HamburgerNavbar/HamburgerNavbar'
import { useLanguage } from '@/providers/LanguageProvider'
import { animateNavbar } from './animations/navbarAnimations'
import './_navbar.scss'

export const Navbar = () => {
    const pathname = usePathname()
    const { locale, setLocale, t } = useLanguage()
    const navbarRef = useRef<HTMLElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768
            setIsMobile(mobile)

            if (!mobile) {
                setIsMenuOpen(false)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const closeMobileMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false)
        }
    }

    const scrollSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (!section) {
            return
        }

        const isMobileViewport = window.innerWidth <= 768

        section.scrollIntoView({
            behavior: 'smooth',
            block: isMobileViewport ? 'start' : 'center',
        })

        window.history.replaceState(null, '', `/#${sectionId}`)
    }

    const handleSectionNavigation = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        closeMobileMenu()

        if (pathname === '/') {
            event.preventDefault()
            scrollSection(sectionId)
        }
    }

    useEffect(() => {
        const hashSection = window.location.hash.replace('#', '')
        if (!hashSection) {
            return
        }

        // Wait a frame so the destination section is mounted before scrolling.
        requestAnimationFrame(() => {
            scrollSection(hashSection)
        })
    }, [pathname])

    useEffect(() => {
        if (!navbarRef.current) return

        return animateNavbar(navbarRef.current)
    }, [isMobile])

    return (
        <nav className="navbar" ref={navbarRef}>
            <Link href="/#home" onClick={(event) => handleSectionNavigation(event, 'home')} scroll={false} data-navbar-anim="brand"><h1><span>IT</span>.dev</h1></Link>

            {isMobile ? (
                <>
                    <button
                        type="button"
                        className="hamburgerButton"
                        data-navbar-anim="hamburger"
                        aria-label={t('navigation.toggleMenu')}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <RxHamburgerMenu size={26} />
                    </button>

                    <HamburgerNavbar
                        id="mobile-navigation"
                        isOpen={isMenuOpen}
                        onSectionClick={handleSectionNavigation}
                        onLinkClick={closeMobileMenu}
                    />
                </>
            ) : (
                <div className="links">
                    <Link href="/#about" onClick={(event) => handleSectionNavigation(event, 'about')} data-navbar-anim="link">{t('navigation.about')}</Link>
                    <Link href="/#tech" onClick={(event) => handleSectionNavigation(event, 'tech')} data-navbar-anim="link">{t('navigation.tech')}</Link>
                    <Link href="/#projects" onClick={(event) => handleSectionNavigation(event, 'projects')} data-navbar-anim="link">{t('navigation.projects')}</Link>
                    <Link href="/projects" data-navbar-anim="link">{t('navigation.allProjects')}</Link>
                    <button
                        type="button"
                        className="languageToggle"
                        data-navbar-anim="link"
                        onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
                        aria-label={locale === 'es' ? t('navigation.switchToEn') : t('navigation.switchToEs')}
                    >
                        {locale === 'es' ? t('locale.en') : t('locale.es')}
                    </button>
                    <div className="contactIcons">
                        <a className="link" href="https://github.com/ignaciotosini" target="_blank" rel="noopener noreferrer" data-navbar-anim="icon" aria-label={t('navigation.githubProfile')}>
                            <IoLogoGithub size={24} />
                        </a>
                        <a className="link" href="https://www.linkedin.com/in/ignacio-tosini/" target="_blank" rel="noopener noreferrer" data-navbar-anim="icon" aria-label={t('navigation.linkedinProfile')}>
                            <IoLogoLinkedin size={24} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

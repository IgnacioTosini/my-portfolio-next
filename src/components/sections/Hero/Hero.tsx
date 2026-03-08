"use client";

import { FaCloudDownloadAlt } from "react-icons/fa"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Title } from "@/components/ui/Title/Title";
import { useLanguage } from "@/providers/LanguageProvider";
import { animateHero } from "./animations/heroAnimations";
import './_hero.scss';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!heroRef.current) return;

    return animateHero(heroRef.current);
  }, []);

  return (
    <div className="hero" id="home" ref={heroRef}>
      <div className="heroContent">
        <div data-hero-anim="title">
          <Title text={t('hero.intro')} />
        </div>
        <h1 data-hero-anim="heading">Ignacio <span>Tosini</span></h1>
        <h2 className="heroSubtitle" data-hero-anim="subtitle">{t('hero.role')}</h2>
        <p className="heroDescription" data-hero-anim="description">{t('hero.description1')}</p>
        <p className="heroDescription" data-hero-anim="description">{t('hero.description2')}</p>
        <div className="links">
          <a className="link" href="https://github.com/ignaciotosini" target="_blank" rel="noopener noreferrer" data-hero-anim="link">
            <IoLogoGithub size={24} className='icon' />
            {t('hero.github')}
          </a>
          <a className="link" href="https://www.linkedin.com/in/ignacio-tosini/" target="_blank" rel="noopener noreferrer" data-hero-anim="link">
            <IoLogoLinkedin size={24} className='icon' />
            {t('hero.linkedin')}
          </a>
          <a className="link" href="#" data-hero-anim="link">
            <FaCloudDownloadAlt size={24} className='icon' />
            {t('hero.downloadCv')}
          </a>
        </div>
      </div>
      <Image src="/dibujoFoto.webp" alt={t('hero.profileImageAlt')} width={300} height={400} className="heroImage" data-hero-anim="image" />
    </div>
  )
}

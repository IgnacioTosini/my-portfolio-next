"use client";

import { useEffect, useRef } from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { useLanguage } from '@/providers/LanguageProvider';
import { animateFooter } from './animations/footerAnimations';
import './_footer.scss';

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  useEffect(() => {
    if (!footerRef.current) return;

    return animateFooter(footerRef.current);
  }, []);

  return (
    <div className='footer' ref={footerRef}>
      <p data-footer-anim='text'>{t('footer.copyright').replace('{year}', String(year))}</p>
      <div className="contactIcons">
        <a href="https://github.com/ignaciotosini" target="_blank" rel="noopener noreferrer" className='icon' data-footer-anim='icon'>
          <IoLogoGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/ignacio-tosini/" target="_blank" rel="noopener noreferrer" className='icon' data-footer-anim='icon'>
          <IoLogoLinkedin size={24} />
        </a>
      </div>
    </div>
  )
}

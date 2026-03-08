"use client";

import { useEffect, useRef } from 'react';
import { Title } from '@/components/ui/Title/Title';
import { useLanguage } from '@/providers/LanguageProvider';
import { animateAbout } from './animations/aboutAnimations';
import './_about.scss';

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!aboutRef.current) return;

    return animateAbout(aboutRef.current);
  }, []);

  return (
    <div className='about' id='about' ref={aboutRef}>
      <div data-about-anim='title'>
        <Title text={t('about.title')} subTitle={t('about.subtitle')} />
      </div>
      <div className='aboutContent' data-about-anim='content'>
      <p className='aboutDescription' data-about-anim='description'>
        {t('about.paragraph1')}
      </p>

      <p className='aboutDescription' data-about-anim='description'>
        {t('about.paragraph2')}
      </p>
      </div>
    </div>
  )
}

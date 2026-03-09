"use client";

import { FaCloudDownloadAlt } from "react-icons/fa"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Title } from "@/components/ui/Title/Title";
import { useLanguage } from "@/providers/LanguageProvider";
import { animateHero } from "./animations/heroAnimations";
import './_hero.scss';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageButtonRef = useRef<HTMLButtonElement>(null);
  const timeoutIdsRef = useRef<number[]>([]);
  const [showProfilePhoto, setShowProfilePhoto] = useState(false);
  const [isImageSpinning, setIsImageSpinning] = useState(false);
  const { t } = useLanguage();

  const spinHeroImage = (duration = 0.9, onFinish?: () => void) => {
    if (!heroImageButtonRef.current) {
      onFinish?.();
      return;
    }

    setIsImageSpinning(true);

    const spinTimeline = gsap.timeline();

    spinTimeline
      .to(heroImageButtonRef.current, {
        rotateY: "+=360",
        duration,
        ease: "power2.inOut",
      })
      .call(() => {
        setShowProfilePhoto((previous) => !previous);
      }, [], duration * 0.7)
      .call(() => {
        setIsImageSpinning(false);
        onFinish?.();
      }, [], duration);
  };

  useEffect(() => {
    if (!heroRef.current || !heroImageButtonRef.current) return;

    const timeoutIds = timeoutIdsRef.current;
    const imageButton = heroImageButtonRef.current;
    const cleanupHeroAnimation = animateHero(heroRef.current, {
      onEntryComplete: () => {
        const firstExtraSpinTimeout = window.setTimeout(() => {
          spinHeroImage(1.2);
        }, 420);

        const secondExtraSpinTimeout = window.setTimeout(() => {
          spinHeroImage(1.55, () => {
            // Keep the hero settled with the first image after the intro sequence.
            setShowProfilePhoto(false);
          });
        }, 2400);

        timeoutIds.push(firstExtraSpinTimeout, secondExtraSpinTimeout);
      },
    });

    return () => {
      cleanupHeroAnimation();
      gsap.killTweensOf(imageButton);
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  const handleHeroImageToggle = () => {
    if (isImageSpinning) return;

    spinHeroImage();
  };

  return (
    <div className="hero" id="home" ref={heroRef}>
      <div className="heroContent">
        <div data-hero-anim="title">
          <Title text={t('hero.intro')} />
        </div>
        <h1 data-hero-anim="heading">Ignacio <span>Tosini</span></h1>
        <h2 className="heroSubtitle" data-hero-anim="subtitle">{t('hero.role')}</h2>
        <p className="heroDescription" data-hero-anim="description">{t('hero.description1')}</p>
        <div className="links">
          <a className="link" href="https://github.com/ignaciotosini" target="_blank" rel="noopener noreferrer" data-hero-anim="link">
            <IoLogoGithub size={24} className='icon' />
            {t('hero.github')}
          </a>
          <a className="link" href="https://www.linkedin.com/in/ignacio-tosini/" target="_blank" rel="noopener noreferrer" data-hero-anim="link">
            <IoLogoLinkedin size={24} className='icon' />
            {t('hero.linkedin')}
          </a>
          <a
            className="link"
            href="/CurriculumIgnacioTosini.pdf"
            download="CurriculumIgnacioTosini.pdf"
            data-hero-anim="link"
          >
            <FaCloudDownloadAlt size={24} className='icon' />
            {t('hero.downloadCv')}
          </a>
        </div>
      </div>
      <button
        type="button"
        ref={heroImageButtonRef}
        className={`heroImageButton ${isImageSpinning ? 'is-spinning' : ''}`}
        onClick={handleHeroImageToggle}
        data-hero-anim="image"
        aria-label={t('hero.profileImageAlt')}
      >
        <Image
          src={showProfilePhoto ? "/perfil.jpeg" : "/dibujoFoto.png"}
          alt={t('hero.profileImageAlt')}
          width={300}
          height={400}
          className="heroImage"
        />
      </button>
    </div>
  )
}

"use client";

import { useRef } from "react";
import { Title } from '@/components/ui/Title/Title'
import { ContactForm } from './ContactForm/ContactForm'
import { useLanguage } from "@/providers/LanguageProvider";
import './_contactSection.scss'

export default function ContactSection() {
  const contactRef = useRef<HTMLDivElement | null>(null)
  const { t } = useLanguage();

  return (
    <div ref={contactRef} className='contactSection' id={'contact'}>
      <Title text={t("contact.title")} subTitle={t("contact.subtitle")} />
        <p>{t("contact.description")}</p>
      <ContactForm />
    </div>
  )
}

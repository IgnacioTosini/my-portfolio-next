'use client'

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { LuSend } from "react-icons/lu";
import { toast } from "react-toastify";
import { useLanguage } from "@/providers/LanguageProvider";
import { trackEvent } from "@/utils/analytics";
import './_contactForm.scss'

type Inputs = {
    name: string;
    email: string;
    message: string;
}

export const ContactForm = () => {
    const { t } = useLanguage();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();
    const [sending, setSending] = useState(false)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            setSending(true)

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await res.json()

            if (!res.ok || !result.ok) {
                throw new Error(result.error || t("contactForm.sendErrorFallback"))
            }

            trackEvent('form_submit', {
                form_name: 'contact_form',
                location: 'contact_section',
            })

            toast.success(t("contactForm.successToast"))
        } catch {
            toast.error(t("contactForm.errorToast"))
        } finally {
            setSending(false)
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
            <div className="field">
                <label>{t("contactForm.nameLabel")}</label>
                <input
                    {...register("name", { required: t("contactForm.nameRequired") })}
                    placeholder={t("contactForm.namePlaceholder")}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className="field">
                <label>{t("contactForm.emailLabel")}</label>
                <input
                    {...register("email", {
                        required: t("contactForm.emailRequired"),
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: t("contactForm.emailInvalid")
                        }
                    })}
                    placeholder={t("contactForm.emailPlaceholder")}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="field">
                <label>{t("contactForm.messageLabel")}</label>
                <textarea
                    {...register("message", { required: t("contactForm.messageRequired") })}
                    placeholder={t("contactForm.messagePlaceholder")}
                />
                {errors.message && <span className="error">{errors.message.message}</span>}
            </div>

            <button type="submit" disabled={sending}>
                <span>{sending ? t("contactForm.sending") : t("contactForm.submit")}</span>
                <LuSend className='icon' />
            </button>
        </form>
    )
}

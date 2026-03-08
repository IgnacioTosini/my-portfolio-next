import { Technology } from '@/types/technology';
import { icons } from '@/lib/icons';
import './_techBadge.scss'

interface Props {
    tech: Technology;
}

export const TechBadge = ({ tech }: Props) => {
    const Icon = icons[tech.iconName as keyof typeof icons];
    return (
        <span className="techBadge">
            {Icon && <Icon />}
            {tech.name}
        </span>
    )
}

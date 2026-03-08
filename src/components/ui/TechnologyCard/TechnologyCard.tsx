import { Technology } from '@/types/technology';
import { icons } from '@/lib/icons';
import './_technologyCard.scss';

interface Props {
    technology: Technology;
}

export const TechnologyCard = ({ technology }: Props) => {
    const Icon = icons[technology.iconName as keyof typeof icons];
    return (
        <div className="technologyCard">
            {Icon && <Icon size={32} />}
            <p>{technology.name}</p>
        </div>
    )
}

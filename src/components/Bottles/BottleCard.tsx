import { NavLink } from 'react-router-dom';
import { Heart } from '@phosphor-icons/react';

import Button from '../common/Button';

type Props = {
  name: string;
  index: number;
  country: string;
  description: string;
};

const BottleCard = ({ index, name, country, description }: Props) => (
  <article className="flex gap-2">
    <div className="bg-secondary size-bottle" />
    <div className="flex flex-col gap-2 size-bottle-text overflow-hidden">
      <NavLink to={'/bottles/' + index} className="text-nav text-primary">
        {name}
      </NavLink>
      <p>Pays d'origine: {country}</p>
      <p>{description}</p>
      <div className="flex w-full justify-end gap-2">
        <button>
          <Heart size={25} className="favorite" />
        </button>
        <Button asNavLink href={'/bottle/' + index}>
          Voir les détails
        </Button>
      </div>
    </div>
  </article>
);

export default BottleCard;

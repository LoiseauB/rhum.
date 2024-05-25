import { NavLink, useNavigate } from 'react-router-dom';
import { Heart } from '@phosphor-icons/react';

import Button from '../common/Button';
import { addLike, deleteLike } from '../../utils/Likes';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import {
  deleteFavorite,
  setOneFavorite,
} from '../../store/features/favoriteSlice';
import { useEffect, useState } from 'react';
import LikeButton from '../common/LikeButton';

type Props = {
  name: string;
  index: number;
  country: string;
  category: string;
};

const BottleCard = ({ index, name, country, category }: Props) => (
  <article className="flex gap-2">
    {/* <div className="bg-secondary size-bottle" /> */}
    <div className="flex flex-col gap-2 size-bottle-text overflow-hidden">
      <NavLink to={'/bottles/' + index} className="text-nav text-primary">
        {name}
      </NavLink>
      <p>Pays d'origine: {country}</p>
      <p>Catégorie: {category}</p>
      <div className="flex w-full justify-end gap-2">
        <LikeButton bottleId={index} />
        <Button asNavLink href={'/bottles/' + index}>
          Voir les détails
        </Button>
      </div>
    </div>
  </article>
);

export default BottleCard;

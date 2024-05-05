import { useParams } from 'react-router-dom';
import { Heart } from '@phosphor-icons/react';

import Note from '../../components/Note';
import { rumBottles } from '../../config/bottles';

const BottleShow = () => {
  const { id } = useParams();
  const index = Number(id);
  if (id && !isNaN(index)) {
    const { name, description, country } = rumBottles[index];
    const note = 4;
    return (
      <>
        <section className="py-3 flex gap-2">
          <div className="bg-secondary size-bottle" />
          <div className="flex flex-col gap-2 size-bottle-text overflow-hidden">
            <h1 className="text-nav text-primary">{name}</h1>
            <p>Pays d'origine: {country}</p>
            <p>{description}</p>
            <div className="flex w-full justify-between gap-2">
              <Note note={note} />
              <button>
                <Heart size={20} className="favorite" />
              </button>
            </div>
          </div>
        </section>
        <hr className="my-4" />
      </>
    );
  }
  return <p>Oups cette bouteille n'existe pas...</p>;
};

export default BottleShow;

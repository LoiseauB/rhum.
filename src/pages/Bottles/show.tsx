import { useParams } from 'react-router-dom';
import { Heart } from '@phosphor-icons/react';

import Note from '../../components/Note';
import { rumBottles, rumComments } from '../../config/bottles';

const BottleShow = () => {
  const { id } = useParams();
  const index = Number(id);
  if (id && !isNaN(index)) {
    const { name, description, country } = rumBottles[index];
    const note = 4;
    const category = 'Ambré';
    return (
      <>
        <section className="py-3 flex gap-2">
          <div className="bg-secondary size-bottle" />
          <div className="flex flex-col gap-2 size-bottle-text overflow-hidden">
            <div className="flex gap-4">
              <h1 className="text-nav text-primary">{name}</h1>
              <button>
                <Heart size={25} className="favorite" />
              </button>
            </div>
            <p>
              Pays d'origine: <strong>{country}</strong>
            </p>
            <p>
              Catégorie: <strong>{category}</strong>
            </p>
            <p>{description}</p>
            <div className="flex w-full justify-between gap-2">
              <Note note={note} />
            </div>
          </div>
        </section>
        <hr className="my-4" />
        <section>
          <h2 className="text-lg m-b-3">Commentaires</h2>
          <ul className="w-full flex flex-col items-center py-3">
            {rumComments.map(({ pseudo, comment }, index) => (
              <li
                key={'comm' + index}
                className="my-2 border p-2 comments-w bg-secondary-15">
                <p className="font-bold text-secondary m-b-1">{pseudo}</p>
                <p>{comment}</p>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
  return <p>Oups cette bouteille n'existe pas...</p>;
};

export default BottleShow;

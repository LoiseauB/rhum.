import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Star } from '@phosphor-icons/react';

import Button from '../../components/common/Button';
import Note from '../../components/Note';
import { rumBottles, rumComments } from '../../config/bottles';

const BottleShow = () => {
  const { id } = useParams();
  const index = Number(id);
  const [userNote, setUserNote] = useState<number>();
  const [userComment, setUserComment] = useState<string>();
  const handleNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userNote);
    setUserNote(undefined);
  };
  const handleComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userComment);
    setUserComment('');
  };
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
            <form onSubmit={e => handleNote(e)}>
              <label>
                Noter ce rhum:
                <select
                  name="note"
                  value={userNote}
                  onChange={e => setUserNote(Number(e.target.value))}
                  className="text-lg border p-1 m-2">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <Star size={20} weight="fill" color="gold" />
              </label>
              <Button>Confirmer la note</Button>
            </form>
          </div>
        </div>
      </section>
      <hr className="my-4" />
      <section>
        <h2 className="text-lg m-b-3">Commentaires</h2>
        <form onSubmit={e => handleComment(e)}>
          <label>
            Laisser un commentaire:
            <br />
            <textarea
              name="comment"
              value={userComment}
              onChange={e => setUserComment(e.target.value)}
              className="border comments-input text-md p-1"
            />
          </label>
          <Button>Envoyer</Button>
        </form>
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
};

export default BottleShow;

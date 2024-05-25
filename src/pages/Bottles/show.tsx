import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Star } from '@phosphor-icons/react';

import Button from '../../components/common/Button';
import Note from '../../components/Note';
import { BottleType } from '../../types/bottles';
import { categories } from '../../config/categories';
import LikeButton from '../../components/common/LikeButton';

const BottleShow = () => {
  const { id } = useParams();
  const index = Number(id);
  const [bottle, setBottle] = useState<BottleType>();
  const [userNote, setUserNote] = useState<number>();
  const [userComment, setUserComment] = useState<string>();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_HOST}/bottle/${index}`)
      .then(response => response.json())
      .then(data => setBottle(data.bottle))
      .catch(error => console.error(error));
  }, [index]);
  const handleNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userNote);
    setUserNote(1);
  };
  const handleComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userComment);
    setUserComment('');
  };
  if (bottle)
    return (
      <>
        <section className="py-3 flex gap-2">
          {/* <div className="bg-secondary size-bottle" /> */}
          <div className="flex flex-col gap-2 size-bottle-text overflow-hidden">
            <div className="flex gap-4">
              <h1 className="text-primary text-xl font-bold font-title">
                {bottle.name}
              </h1>
              <LikeButton bottleId={bottle.id} />
            </div>
            <p>
              Pays d'origine: <strong>{bottle.country}</strong>
            </p>
            <p>
              Catégorie: <strong>{categories[bottle.categoryId - 1]}</strong>
            </p>
            <p>{bottle.description}</p>
            <div className="flex w-full justify-between gap-2">
              <Note note={bottle.avgRating} />
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
          <h2 className="text-lg m-b-3">
            {bottle.comments.length} Commentaires
          </h2>
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
            {bottle.comments.map(({ id, comment, user, userId }) => (
              <li
                key={'comm' + id}
                className="my-2 border p-2 comments-w bg-secondary-15">
                <p className="font-bold text-secondary m-b-1">{user.pseudo}</p>
                <p>{comment}</p>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
};

export default BottleShow;

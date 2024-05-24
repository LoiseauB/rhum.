import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Button from '../../components/common/Button';
import { useAppSelector } from '../../store/hook';
import { userType } from '../../types/user';
import { userFavorites } from '../../types/userFavorites';

const UserProfile = () => {
  const { isAuthenticate } = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticate) {
      navigate('/login');
    }
  }, [isAuthenticate, navigate]);
  const [user, setUser] = useState<userType>();
  const [favorites, setFavorites] = useState<userFavorites[]>();
  useEffect(() => {
    if (isAuthenticate) {
      fetch(`${import.meta.env.VITE_API_HOST}/user`, {
        method: 'GET',
        credentials: 'include',
      })
        .then(response => response.json())
        .then(data => {
          setUser(data.user);
          setFavorites(data.userFavorites);
        })
        .catch(error => console.error(error));
    }
  }, [isAuthenticate]);

  return (
    <>
      <section className="my-4 border box-shadow p-3 flex justify-center">
        <div>
          <h1 className="text-title text-primary text-xl my-4">Mon profile</h1>
          <p>
            <b className="text-accent">pseudo:</b> {user?.pseudo}
          </p>
          <p>
            <b className="text-accent">email:</b> {user?.email}
          </p>
          <div className="m-t-2 flex gap-2">
            <Button asNavLink href="/profile/edit">
              Éditer
            </Button>
            <button className="text-secondary">supprimer mon compte</button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-title text-primary text-xl my-4">Mes favoris</h2>
        {favorites && !!favorites.length && (
          <ul>
            {favorites.map(({ name, id }, index) => (
              <li key={'fav' + index}>
                <NavLink to={`/bottles/${id}`} className="text-nav">
                  • {name}
                </NavLink>
                <br />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default UserProfile;

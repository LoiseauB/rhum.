import { FormEvent, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import useTitle from '../../hooks/useTitle';

const Register = () => {
  useTitle("S'inscrire");
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [pseudo, setPseudo] = useState<string>();
  const [confirmPwd, setConfirmPwd] = useState<string>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  useEffect(() => {
    if (isSubmit && password && password === confirmPwd) {
      fetch(`${import.meta.env.VITE_API_HOST}/register`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          pseudo,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            navigate('/login');
          }
          if (data.error) {
            setIsSubmit(false);
            alert(data.error);
          }
        })
        .catch(error => console.error('Erreur:', error));
      setIsSubmit(false);
    }
  }, [email, isSubmit, navigate, password, pseudo]);

  return (
    <section className="flex justify-center items-center size-full p-10">
      <div>
        <form
          onSubmit={e => handleSubmit(e)}
          className="p-3 border flex flex-col gap-2 bg-secondary-50">
          <h2 className="text-xl">Inscription</h2>
          <label className="flex flex-col">
            Pseudo:
            <input
              type="text"
              onChange={e => setPseudo(e.target.value)}
              value={pseudo}
              className="border p-1 text-lg bg-white"
              required
            />
          </label>
          <label className="flex flex-col">
            Adresse email:
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              className="border p-1 text-lg bg-white"
              required
            />
          </label>
          <label className="flex flex-col">
            Mot de passe:
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              className="border p-1 text-lg bg-white"
              required
            />
          </label>
          <label className="flex flex-col">
            <div className="flex gap-2">
              <span>Confirmez le mot de passe:</span>
              {confirmPwd && (
                <>
                  {confirmPwd !== password ? <span>❌</span> : <span>✅</span>}
                </>
              )}
            </div>
            <input
              type="password"
              onChange={e => setConfirmPwd(e.target.value)}
              value={confirmPwd}
              className="border p-1 text-lg bg-white"
              required
            />
          </label>
          <div className="flex justify-end">
            <Button>Créer mon compte</Button>
          </div>
        </form>
        <p className="m-t-4">
          Vous avez déjà un compte :{' '}
          <NavLink to={'/login'} className="text-nav text-md text-primary">
            se connecter
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default Register;

import { FormEvent, useEffect, useState } from 'react';

import Button from '../components/common/Button';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  useEffect(() => {
    if (isSubmit) {
      fetch(`${import.meta.env.VITE_API_HOST}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: pwd,
        }),
      })
        .then(response => response.json())
        .then(data => (document.cookie = 'jwt=' + data.token))
        .catch(error => console.error(error));
      setIsSubmit(false);
    }
  }, [email, isSubmit, pwd]);

  return (
    <section className="flex justify-center items-center size-full p-10">
      <form
        onSubmit={e => handleSubmit(e)}
        className="p-3 border flex flex-col gap-2 bg-secondary-50">
        <h2 className="text-xl">Se connecter</h2>
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
            onChange={e => setPwd(e.target.value)}
            value={pwd}
            className="border p-1 text-lg bg-white"
            required
          />
        </label>
        <div className="flex justify-end">
          <Button>Se connecter</Button>
        </div>
      </form>
    </section>
  );
};

export default Login;

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white">
      <div className="flex items-center gap-5">
        <span className="text-title text-2xl text-primary">RHUM.</span>
        <nav>
          <div className="flex gap-2 ">
            <NavLink to="/" className="text-nav">
              Accueil
            </NavLink>
            <NavLink to="/bottles" className="text-nav">
              Les bouteilles
            </NavLink>
          </div>
        </nav>
      </div>
      <nav className="flex gap-2 items-center">
        <NavLink to="/" className="text-nav text-md">
          Se connecter
        </NavLink>
        <NavLink to="/" className="font-nav font-medium text-md bg-primary btn">
          S'inscrire
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

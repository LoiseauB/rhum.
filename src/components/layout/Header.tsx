import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import classNames from 'classnames';

import Button from '../common/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between items-center bg-white">
      <div className="flex items-center res-navlink">
        <span className="text-title text-2xl text-primary">RHUM.</span>
        <nav>
          <div className="gap-2 visible-desktop-flex ">
            <NavLink to="/" className="text-nav">
              Accueil
            </NavLink>
            <NavLink to="/bottles" className="text-nav">
              Les bouteilles
            </NavLink>
          </div>
          <div className="visible-mobile-flex justify-evenly items-center w-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex items-center text-nav">
              Pages {isOpen ? <CaretUp /> : <CaretDown />}
            </button>
            <div
              className={classNames(
                { 'visible-none': !isOpen },
                'absolute -bottom-3 bg-white p-1 border text-nav',
              )}>
              <NavLink to="/" className="m-5">
                Accueil
              </NavLink>
              <br />
              <NavLink to="/bottles" className="m-5">
                Les bouteilles
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="visible-mobile-block">
          <Button asNavLink>S'inscrire</Button>
        </div>
      </div>
      <nav className="visible-desktop-flex gap-2 items-center">
        <NavLink to="/login" className="text-nav text-md">
          Se connecter
        </NavLink>
        <Button asNavLink>S'inscrire</Button>
      </nav>
    </header>
  );
};

export default Header;

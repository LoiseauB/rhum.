import { NavLink } from 'react-router-dom';

import barrelUrl from '../../assets/images/barrel.png';
import palmTreeUrl from '../../assets/images/tall-palmtree.png';

const HomeHero = () => {
  return (
    <section className="relative h-22 p-10 bg-secondary-50 m-no-x-main flex justify-center items-center">
      <img
        src={palmTreeUrl}
        alt="palm tree"
        className="absolute bottom-0 left-5 h-20 w-auto"
      />
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-title text-primary">RHUM.</h1>
          <p className="text-accent font-nav text-xl">Le site des passionnés</p>
        </div>
        <NavLink
          to="/bottles"
          className="font-nav font-medium text-md bg-primary btn">
          Voir les bouteilles
        </NavLink>
      </div>
      <img
        src={barrelUrl}
        alt="two barrel"
        className="absolute -bottom-1 right-10"
      />
    </section>
  );
};

export default HomeHero;

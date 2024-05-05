import { useContext } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { SearchContext } from '../../pages/Bottles';

import palmTreeUrl from '../../assets/images/tall-palmtree.png';

const SearchBar = () => {
  const setSearch = useContext(SearchContext);
  return (
    <section className="relative overflow-hidden h-hero p-10 bg-secondary-50 m-no-x-main flex justify-center items-center">
      <img src={palmTreeUrl} alt="palm tree" className="palm" />
      <img src={palmTreeUrl} alt="palm tree" className="search-palm" />
      <search className="search-size">
        <p className="text-primary text-title text-xl text-center m-b-4">
          Rechercher une bouteille
        </p>
        <form className="flex justify-between items-center bg-white size-full rounded-lg search-border px-4">
          <input
            type="text"
            placeholder="Trois rivières"
            className="search-input text-lg"
            onChange={e => setSearch(e.target.value)}
          />
          <MagnifyingGlass size={32} className="search-icon" />
        </form>
      </search>
    </section>
  );
};
export default SearchBar;

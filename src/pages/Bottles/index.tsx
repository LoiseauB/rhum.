import { createContext, Dispatch, SetStateAction, useState } from 'react';

import BottleCard from '../../components/Bottles/BottleCard';
import SearchBar from '../../components/Bottles/SearchBar';
import { rumBottles } from '../../config/bottles';
export const SearchContext = createContext<Dispatch<SetStateAction<string>>>(
  () => {},
);
const Bottles = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchContext.Provider value={setSearch}>
        <SearchBar />
        <section className="py-3">
          <ul className="flex flex-col gap-2">
            {rumBottles
              .filter(({ name }) => name.includes(search))
              .map(({ name, country, description }, index) => (
                <>
                  <li key={index}>
                    <BottleCard
                      index={index}
                      name={name}
                      country={country}
                      description={description}
                    />
                  </li>
                  {index !== rumBottles.length - 1 && <hr />}
                </>
              ))}
          </ul>
        </section>
      </SearchContext.Provider>
    </>
  );
};

export default Bottles;

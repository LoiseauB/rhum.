import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import BottleCard from '../../components/Bottles/BottleCard';
import SearchBar from '../../components/Bottles/SearchBar';
import { BottleType } from '../../types/bottles';
import { categories } from '../../config/categories';
export const SearchContext = createContext<Dispatch<SetStateAction<string>>>(
  () => {},
);
const Bottles = () => {
  const [search, setSearch] = useState('');
  const [bottles, setBottles] = useState<BottleType[]>();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_HOST}/bottle`)
      .then(response => response.json())
      .then(data => setBottles(data.bottles))
      .catch(error => console.error(error));
  });
  return (
    <>
      <SearchContext.Provider value={setSearch}>
        <SearchBar />
        <section className="py-3">
          <ul className="px-4">
            {bottles &&
              bottles
                .filter(({ name }) =>
                  name.toLowerCase().includes(search.toLowerCase()),
                )
                .map(({ id, name, country, categoryId }) => (
                  <>
                    <li key={'bottle' + id} className="my-2 px-4">
                      <BottleCard
                        index={id}
                        name={name}
                        country={country}
                        category={categories[categoryId - 1]}
                      />
                    </li>
                    {id !== bottles.length && <hr />}
                  </>
                ))}
          </ul>
        </section>
      </SearchContext.Provider>
    </>
  );
};

export default Bottles;

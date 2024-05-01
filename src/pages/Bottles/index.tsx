import { rumBottles } from '../../config/bottles';

import BottleCard from './BottleCard';

const Bottles = () => {
  return (
    <section className="py-3">
      <ul className="flex flex-col gap-2">
        {rumBottles.map(({ name, country, description }, index) => (
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
  );
};

export default Bottles;

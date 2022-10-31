import React, { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { options } from './constants';
import TinderCard from './components/TinderCard';
type Props = {};

const Main = (props: Props): any => {
  const [idx, setIdx] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>([]);
  const { isLoading, error, data, isFetched }: any = useQuery(
    ['getAnimals'],
    () =>
      fetch('https://api.petfinder.com/v2/animals', options).then((res) =>
        res.json()
      ),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;
  // console.log(data.animals[idx]);
  // console.log('a kep:', data.animals[idx]?.photos[0].full);

  const handleMenuOpen = () => {
    const moveUp = document.querySelector('.cards-groups');
    if (!open) moveUp?.classList.add('move-up');
    else moveUp?.classList.remove('move-up');

    setOpen(!open);
  };
  console.log(selected);
  return (
    <>
      <TinderCard
        name={data.animals[idx]?.name}
        age={data.animals[idx]?.age}
        description={data.animals[idx]?.description}
        gender={data.animals[idx]?.gender}
        tags={data.animals[idx]?.tags}
        photo={data.animals[idx]?.photos[0]?.full}
        attributes={data.animals[idx]?.attributes}
        published_at={data.animals[idx]?.published_at}
        url={data.animals[idx]?.url}
        setIdx={setIdx}
        setSelected={setSelected}
      />
      <nav
        className={`${
          open ? 'h-1/2' : 'h-0'
        } w-full left-0 absolute bottom-0 z-10`}
      >
        <div className={`flex gap-3 pt-28 ${!open ? 'scale-0' : 'scale-100'}`}>
          {selected.map((animal: any) => (
            <a href={animal.url} target="_blank" rel="noreferrer">
              <h1 className="text-white">{animal.name}</h1>
              <img src={animal.photo} alt="" className="nav-link-image" />
            </a>
          ))}
        </div>
      </nav>
      <div className="absolute bottom-2 left-1/2 animate-bounce 5000ms z-30 drop-shadow-xl">
        <button
          className="border-4 border-slate-200 rounded-full h-8 w-8 hover:scale-110 active:scale-90 text-purple-600 bg-white"
          onClick={handleMenuOpen}
        >
          {!open ? (
            <i className="fa-solid fa-arrow-up"></i>
          ) : (
            <i className="fa-solid fa-arrow-down"></i>
          )}
        </button>
      </div>
    </>
  );
};

export default Main;

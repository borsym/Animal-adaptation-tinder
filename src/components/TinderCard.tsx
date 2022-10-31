import React, { useId } from 'react';

type Animal = {
  name?: string;
  age?: string;
  description?: string;
  gender?: string;
  tags?: string[];
  photo?: string;
  attributes?: {
    [key: string]: boolean;
  };
  published_at: string;
  setIdx: any;
  setSelected: any;
  url: string;
};
/* 
age: string
photos: array -> full: string
name: string
gender: male
description: string
breeds: {maxied:boolean, primary:string}
tags array strings
*/
// { name, age, description, friendly, kg }: Animal
// photos can be length 0, tags can be null     contact > (address > city-country) - email , attributes json object just itarate over it boolean the values
type Attribute = {
  [key: string]: boolean;
};
const TinderCard = ({
  name = 'Name not available',
  age = 'Age not available',
  description = 'Description not available',
  gender = 'Gender not available',
  tags = [],
  photo = 'https://via.placeholder.com/300',
  published_at = 'Published at not available',
  attributes = {},
  url,
  setIdx,
  setSelected,
}: Animal) => {
  const convertAttributes = (attributes: Attribute): string[] => {
    const trueKeys = Object.keys(attributes).filter((k) => attributes[k]);
    return trueKeys.map((k) => {
      const tmp = k.split('_').join(' ');
      return tmp.charAt(0).toUpperCase() + tmp.slice(1);
    });
  };

  const animationMovement = (
    move: Element | null,
    moveRight: boolean = true
  ) => {
    setTimeout(() => {
      move?.classList.add(
        moveRight ? 'becoming-active-from-before' : 'becoming-active-from-after'
      );
    }, 300);

    setTimeout(() => {
      move?.classList.remove(moveRight ? 'move-right' : 'move-left');
      move?.classList.remove(
        moveRight ? 'becoming-active-from-before' : 'becoming-active-from-after'
      );
      setIdx((idx: number) => idx + 1);
    }, 400);
  };

  const handleLove = () => {
    setSelected((prev: []) => [...prev, { name, photo, url }]);
    const moveRight = document.querySelector('.card-group');
    moveRight?.classList.add('move-right');

    animationMovement(moveRight, true);
  };

  const HandleDisLike = () => {
    const moveLeft = document.querySelector('.card-group');
    moveLeft?.classList.add('move-left');

    animationMovement(moveLeft, false);
  };

  return (
    <div key={useId()} className="cards-groups">
      <div className="card-group">
        <div className="little-card card text-white ">
          <span className="magic">{tags[0] ?? 'No tag'}</span>
        </div>
        <div className="big-card card -translate-x-6 -rotate-1 text-white">
          {convertAttributes(attributes).map((atr) => (
            <p>{atr}</p>
          ))}
        </div>
        <div className="little-card card text-white">
          <span className="magic">{tags[1] ?? 'No tag'}</span>
        </div>
        <div className="big-card card rotate-2 text-white">
          Name: {name} <br />
          Age: {age} <br />
          Gender: {gender} <br />
        </div>
        <div className="little-card card text-white">
          <span className="magic">{tags[2] ?? 'No tag'}</span>
        </div>
        <div className="big-card card -translate-x-5 -rotate-3 text-white">
          Published at: {published_at.split('T')[0]}
        </div>
        <div className="little-card card text-white bottom-7 ">
          <span className="absolute bottom-5 magic truncate ">
            {tags[3] ?? 'No tag'}
          </span>
        </div>
        <React.Suspense fallback={<>loading...</>}>
          <div
            style={{ backgroundImage: `url(${photo})` }}
            className={`big-card card translate-x-6 translate-y-2 rotate-5 bg-cover bg-center`}
          >
            <span className="absolute bottom-0 text-white bg-gradient-to-r from-black/50 to-black/50">
              {description}
            </span>
          </div>
        </React.Suspense>
      </div>
      <div>
        <div className="mt-16 flex justify-around">
          <button className="swipe-button text-white" onClick={HandleDisLike}>
            <i className="fa-solid fa-heart-crack"></i>
          </button>
          <button
            className="swipe-button text-red-400 border-red-400"
            onClick={handleLove}
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TinderCard;

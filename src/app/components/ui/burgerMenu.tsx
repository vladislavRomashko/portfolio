import React, { useState, FC } from 'react';

interface BurgerMenuProps {
  burgerOnClick: () => void;
  state: boolean;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ burgerOnClick, state }) => {
  return (
    <div
      className="fixed top-5 right-16 sm:right-24 cursor-pointer lg:hidden z-40 "
      onClick={burgerOnClick}
    >
      <span
        className={
          `my-2 block w-10 h-1 rounded bg-sky-500 transition-transform` +
          (state ? ' rotate-45 translate-y-2' : '')
        }
      ></span>
      <span
        className={
          `my-2 block w-10 h-1 rounded bg-sky-500 transition-transform` +
          (state ? ' hidden' : '')
        }
      ></span>
      <span
        className={
          `my-2 block w-10 h-1 rounded bg-sky-500 transition-transform` +
          (state ? ' -rotate-45 -translate-y-1' : '')
        }
      ></span>
    </div>
  );
};

export default BurgerMenu;

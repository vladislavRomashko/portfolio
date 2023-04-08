import React, { FC } from 'react';
import SocialLinks from '../common/socialLink/socialLinks';
import NavBar from './navBar';
import { Link } from 'react-router-dom';

interface MobileNavBarPropr {
  state: boolean;
  linkClick: (e: any) => void;
}

const MobileNavBar: FC<MobileNavBarPropr> = ({ state, linkClick }) => {
  return (
    <div
      className={
        `w-screen fixed top-0 bg-[#020617] z-10 flex flex-col justify-center items-center   ` +
        (state ? ' h-fit block' : ' h-0 hidden')
      }
    >
      <div
        className=" text-lg mt-6  font-prompt text-sky-500 hover:text-pink-500"
        onClick={linkClick}
      >
        <Link to="/">Main menu</Link>
      </div>
      <div className="mt-6" onClick={linkClick}>
        <NavBar />
      </div>
      <div className="my-6">
        <SocialLinks />
      </div>
    </div>
  );
};

export default MobileNavBar;

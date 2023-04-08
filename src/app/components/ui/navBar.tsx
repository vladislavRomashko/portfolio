import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex text-1xl  text-slate-400  ">
      <ul className="grid grid-cols-1  place-items-center ">
        <li className="p-2" data-type="link">
          <Link
            to="/about"
            className="hover:transition ease-in-out delay-100 px-6 hover:text-sky-500 relative  "
          >
            About
          </Link>
        </li>
        <li className="p-2" data-type="link">
          <Link
            to="/projects"
            className="hover:transition ease-in-out delay-100 px-6 hover:text-sky-500 relative  "
          >
            Projects
          </Link>
        </li>
        <li className="p-2" data-type="link">
          <Link
            to="/contact"
            className="hover:transition ease-in-out delay-100 px-6 hover:text-sky-500 relative  "
          >
            Contacts
          </Link>
        </li>
        <li className="p-2" data-type="link">
          <Link
            to="/skills"
            className="hover:transition ease-in-out delay-100 px-6 hover:text-sky-500 relative  "
          >
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

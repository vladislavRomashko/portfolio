import React, { useEffect, useState } from 'react';
import NavBar from './app/components/ui/navBar';
import SocialLinks from './app/components/common/socialLink/socialLinks';
import TopMenu from './app/components/common/topMenu';
import RenderPage from './app/pages/renderPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import BurgerMenu from './app/components/ui/burgerMenu';
import MobileNavBar from './app/components/ui/mobileNavBar';

function App() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const handleLinkClick = (e: any) => {
    const link = e.target.tagName;
    if (link === 'A') {
      setActive((prev) => !prev);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" bg-slate-900 ">
      <MobileNavBar state={active} linkClick={handleLinkClick} />
      <BurgerMenu burgerOnClick={handleClick} state={active} />

      <menu className="bg-[#020617]   justify-between flex-col items-center h-screen fixed left-0 top-0 bottom-0 right-auto w-32 hidden lg:flex">
        <TopMenu />
        <NavBar />
        <div className="pb-40">
          <SocialLinks />
        </div>
      </menu>
      <div className="mx-auto  h-screen">
        <RenderPage />
      </div>
    </div>
  );
}

export default App;

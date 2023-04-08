import React from 'react';
import Tags from '../../../common/tags';
import './projectFragment.css';

import { useNavigate } from 'react-router-dom';

const ProjectFragment = () => {
  const navigate = useNavigate();

  const handleModalClick = (e: any) => {
    const id = e.target.id;
    navigate(`/${id}`);
  };

  const projectClasses =
    'w-20 sm:w-32 lg:w-56 h-32 sm:h-44 lg:h-64   rounded-md cursor-pointer grayscale  hover:grayscale-0 hover:transition-all hover:scale-125 ';

  return (
    <>
      <article
        className="mt-16 sm:mt-24 overflow-hidden"
        data-aos="flip-up"
        data-delay="400"
      >
        <Tags secondTag="h2">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-slate-200 pl-8 sm:pl-16 font-prompt">
            <span className="text-sky-500">#</span> My Proj
            <span className="text-sky-500">ec</span>ts
          </h2>
        </Tags>

        <Tags secondTag="p">
          <p className="text-slate-200 font-roboto pl-6 text-sm sm:text-base sm:pl-16 relative z-20">
            Here some of my works.You can click on it for more details
          </p>
        </Tags>

        <section className=" mt-10  text-slate-100  relative ">
          <Tags secondTag="section">
            <span className="hidden sm:block absolute font-prompt text-[300px]  text-slate-700/70  -right-44 lg:right-0 -top-64">
              Work
            </span>
            <div
              className="flex wrap justify-center sm:justify-around items-center gap-2 sm:gap-6 relative z-20"
              onClick={handleModalClick}
            >
              <div className={`${projectClasses} first-card`} id="1"></div>

              <div className={`${projectClasses} second-card`} id="2"></div>

              <div className={`${projectClasses} third-card`} id="3"></div>
            </div>
          </Tags>
        </section>
      </article>
    </>
  );
};

export default ProjectFragment;

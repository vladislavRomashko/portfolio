import React from 'react';
import Tags from '../common/tags';
import ProgressBar from '../common/progressBar';

const Skills = () => {
  return (
    <article className="mt-10">
      <Tags secondTag="h1">
        <h1 className="text-3xl sm:text-6xl text-slate-400 ml-8 sm:ml-16">
          <span className="text-sky-500">#</span> Ski
          <span className="text-sky-500">ll</span>s
        </h1>
      </Tags>
      <section>
        <Tags secondTag="h2">
          <h2 className="text-2xl sm:text-4xl text-slate-400 ml-10 sm:ml-16">
            Hard skills
          </h2>
        </Tags>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div data-aos="fade-right">
            <Tags secondTag="p">
              <p className="font-roboto text-lg text-slate-200 w-[250px] sm:w-[500px] ml-8 md:ml-16">
                I create successful responsive websites that are fast, easy to
                use, and built with best practices. The main area of my
                expertise is front-end development, HTML, CSS, JS, building
                small and medium web apps, features, animations, and coding
                interactive layouts.
              </p>
            </Tags>
          </div>
          <div
            data-aos="fade-left"
            className="w-[250px] md:w-[500px] lg:w-[700px] ml-8"
          >
            <div className=" mb-7">
              <span className="text-slate-200 font-prompt text-lg ">
                Front-End
              </span>
              <ProgressBar width="w-[50%]" progressColor="bg-pink-500" />
            </div>
            <div className=" mb-7">
              <span className="text-slate-200 font-prompt text-lg">React</span>
              <ProgressBar width="w-[50%]" />
            </div>
            <div className=" mb-7">
              <span className="text-slate-200 font-prompt text-lg">
                Beck-End
              </span>
              <ProgressBar width="w-[20%]" progressColor="bg-green-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8" data-aos="flip-down">
        <Tags secondTag="h2">
          <h2 className=" text-2xl sm:text-4xl text-slate-400 ml-10 sm:ml-16">
            Soft skills
          </h2>
        </Tags>
        <div>
          <Tags secondTag="ul">
            <ul className="text=lg sm:text-2xl text-slate-200  ml-4 sm:ml-16 flex gap-8 justify-center font-prompt flex-wrap">
              <li> Teamwork </li>
              <li> Problem solving </li>
              <li> Communication </li>
              <li> Adaptability </li>
              <li> Critical thinking </li>
              <li> Time management </li>
              <li> Interpersonal </li>
            </ul>
          </Tags>
        </div>
      </section>
      <section></section>
    </article>
  );
};

export default Skills;

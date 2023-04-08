import React, { MouseEvent } from 'react';
import Tags from '../../common/tags';

const EnteryFragment = () => {
  const animLetterClass = 'inline-block ';
  const highlightedLetterClass = 'text-sky-500';

  const mouseOver = (e: MouseEvent<HTMLDivElement>) => {
    const { target }: any = e;
    if (target.getAttribute('data-animate')) {
      target.classList.add('animate-rubber');
      setTimeout(() => {
        target.classList.remove('animate-rubber');
      }, 650);
    }
  };

  return (
    <article className="pt-24 sm:pt-44 lg:pt-20 h-screen  2xl:pt-40  ">
      <Tags secondTag="h1">
        <div
          className="anim text-3xl sm:text-6xl lg:text-8xl ml-8 sm:ml-16 font-prompt text-slate-50  "
          onMouseOver={mouseOver}
        >
          <div data-aos="flip-up" data-aos-delay="400">
            <span className={highlightedLetterClass}>H</span>
            <span data-animate="true" className={animLetterClass}>
              i
            </span>
            <span data-animate="true" className={animLetterClass}>
              ,
            </span>
          </div>
          <div data-aos="flip-down" data-aos-delay="500">
            <span data-animate="true" className={animLetterClass}>
              I
            </span>
            <span data-animate="true" className={animLetterClass}>
              '
            </span>
            <span data-animate="true" className={animLetterClass}>
              a
            </span>
            <span data-animate="true" className={animLetterClass}>
              m
            </span>{' '}
            <span data-animate="true" className={animLetterClass}>
              V
            </span>
            <span className={highlightedLetterClass}>l</span>
            <span data-animate="true" className={animLetterClass}>
              a
            </span>
            <span data-animate="true" className={animLetterClass}>
              d
            </span>
            <span data-animate="true" className={animLetterClass}>
              ,
            </span>
          </div>
          <div data-aos="flip-down" data-aos-delay="450">
            <span data-animate="true" className={animLetterClass}>
              w
            </span>
            <span data-animate="true" className={animLetterClass}>
              e
            </span>
            <span data-animate="true" className={animLetterClass}>
              b
            </span>{' '}
            <span data-animate="true" className={animLetterClass}>
              d
            </span>
            <span data-animate="true" className={animLetterClass}>
              e
            </span>
            <span data-animate="true" className={animLetterClass}>
              v
            </span>
            <span data-animate="true" className={animLetterClass}>
              e
            </span>
            <span data-animate="true" className={animLetterClass}>
              l
            </span>
            <span className={highlightedLetterClass}>OP</span>
            <span data-animate="true" className={animLetterClass}>
              e
            </span>
            <span data-animate="true" className={animLetterClass}>
              r
            </span>
          </div>
        </div>
      </Tags>
      <Tags secondTag="p">
        <div className="ml-8 sm:ml-16 text-lg sm:text-xl lg:text-3xl tracking-widest  text-slate-400 ">
          Front End developer
        </div>
      </Tags>
      <button className="  border-sky-500 sm:text-2xl ml-10 mt-10  sm:ml-16 sm:mt-14 lg:mt-10 hover:text-pink-500/100 hover:border-pink-500/100  text-sky-500 border-2">
        <a href="mailto:vadimromashko@gmail.com" className="px-14 py-4 block">
          Contact Me!
        </a>
      </button>

      <div className="animate-bounce absolute text-sm flex  flex-col text-slate-400  bottom-36 left-5">
        <span className=" rotate-90">Scroll </span>
        <br />
        <span className="text-center text-sky-500">&#9660;</span>
      </div>
      <div className="animate-bounce absolute text-sm flex flex-col text-slate-400  bottom-36 right-5">
        <span className="block rotate-90">Scroll</span>
        <br />
        <span className="text-center text-sky-500">&#9660;</span>
      </div>
      <div></div>
    </article>
  );
};

export default EnteryFragment;

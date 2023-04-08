import { Link } from 'react-router-dom';
import Tags from '../common/tags';

const AboutMe = () => {
  return (
    <article className="mt-12 ">
      <Tags secondTag="h1">
        <h1
          className="text-3xl sm:text-6xl text-slate-200 pl-10 sm:pl-16 font-prompt"
          data-aos="flip-up"
        >
          <span className="text-sky-500">#</span> About
          <span className="text-sky-500">Me</span>
        </h1>
      </Tags>

      <section
        className=" mt-10  text-slate-100  relative"
        data-aos="flip-down"
      >
        <Tags secondTag="p">
          <span className="hidden sm:block absolute font-prompt text-[150px] xl:text-[300px] rotate-90 xl:rotate-0 z-10 text-slate-700/70 -right-10 top-10 xl:right-16 xl:-top-44">
            About
          </span>
          <p className="pl-6 sm:pl-16 text-lg sm:text-2xl w-full sm:w-8/12 font-['Roboto'] relative z-20">
            I am a frontend developer from Ukraine. I develop both single-page
            websites and web applications of varying complexity.
            <br />
            <br />
            In my work I use a modern stack of technologies. You can see my work
            in the{' '}
            <Link to="/projects" className="text-sky-500">
              Projects
            </Link>{' '}
            section. If you are interested, you can{' '}
            <a className="text-sky-500" href="mailto:vadimromashko@gmail.com">
              contact me.
            </a>
          </p>
        </Tags>
      </section>
    </article>
  );
};

export default AboutMe;

import Tags from '../common/tags';
import facebook from '../../images/circleImg/facebook-cyrcle.svg';
import github from '../../images/circleImg/github-cyrcle.svg';
import insta from '../../images/circleImg/instagram-cyrcle.svg';
import telegram from '../../images/circleImg/telegram-cyrcle.svg';
import linkedin from '../../images/circleImg/linkedin-cyrcle.svg';

const Contacts = () => {
  return (
    <>
      <article className="mt-16 sm:mt-24 overflow-hidden ">
        <Tags secondTag="h2">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-slate-200 pl-10 sm:pl-16 font-prompt">
            <span className="text-sky-500">#</span> Contacts
          </h2>
        </Tags>

        <section className=" mt-6 sm:mt-10  text-slate-100  relative ">
          <span className="hidden sm:block  absolute font-prompt text-[100px] xl:text-[200px] rotate-90 xl:rotate-0  text-slate-700/70 -right-8 top-0 xl:left-1/2 xl:-top-52">
            Mail@Me
          </span>
          <Tags secondTag="p">
            <div className="text-sm ml-12 sm:ml-16 font-roboto">
              You can find me in :
            </div>
          </Tags>
          <div className="flex justify-center items-center gap-2 sm:gap-4 ">
            <div
              className="contrast-100 hover:contrast-200 "
              data-aos="zoom-in"
            >
              <a href="https://www.facebook.com/hell.zap" target="_blanc">
                <img src={facebook} alt="" />
              </a>
            </div>
            <div
              className="contrast-100 hover:contrast-200"
              data-aos="zoom-in-up"
            >
              <a href="https://github.com/vladislavRomashko" target="_blanc">
                <img src={github} alt="" />
              </a>
            </div>
            <div
              className="contrast-100 hover:contrast-200"
              data-aos="zoom-in-down"
            >
              <a href="https://www.instagram.com/vadik_zp/" target="_blanc">
                <img src={insta} alt="" />
              </a>
            </div>
            <div
              className="contrast-100 hover:contrast-200"
              data-aos="zoom-in-left"
            >
              <a href="https://t.me/VladislavRomashko" target="_blanc">
                <img src={telegram} alt="" />
              </a>
            </div>
            <div
              className="contrast-100 hover:contrast-200"
              data-aos="zoom-in-right"
            >
              <a
                href="https://www.linkedin.com/in/vladislav-romashko-94a89b146/"
                target="_blanc"
              >
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
          <Tags secondTag="p">
            <div className="text-sm ml-12 sm:ml-16 font-roboto">
              Also you can write me an email :
            </div>
          </Tags>
          <div className="  border-sky-500 text-center text-2xl w-44 sm:w-56 mx-auto  lg:mt-10 hover:text-pink-500/100 hover:border-pink-500/100 text-sky-500 border-2 cursor-pointer">
            <a
              href="mailto:vadimromashko@gmail.com"
              className="px-8 lg:px-14 py-2 lg:py-4 block  "
            >
              Mail Me!
            </a>
          </div>
        </section>
      </article>
    </>
  );
};

export default Contacts;

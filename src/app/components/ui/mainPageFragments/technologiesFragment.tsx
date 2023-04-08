import { technologies } from '../../../mockdata/technologies';
import Tags from '../../common/tags';

const TechnologiesFragment = () => {
  const classesImage =
    'bg-slate-900 z-10 relative hover:-translate-y-10 rounded-lg hover:transition-all hover:duration-300 ';

  const classesText =
    'absolute bottom-[2px] left-0  w-full  text-center text-[10px] lg:text-basic xl:text-lg font-prompt text-slate-50 rounded-lg';

  return (
    <article className="  ">
      <Tags secondTag="h2">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-slate-200 pl-6 sm:pl-16 font-prompt">
          <span className="text-sky-500">#</span> Technologies
        </h2>
      </Tags>
      <div className="flex justify-center items-center gap-6  mt-10 flex-wrap">
        {technologies.map((tech) => (
          <div
            className="relative mt-5 w-[68px] lg:w-[128px]"
            data-aos="flip-up"
            data-aos-delay="500"
          >
            <div className={classesImage}>
              <img src={tech.link} alt="" />
            </div>
            <div className={classesText}>{tech.title}</div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default TechnologiesFragment;

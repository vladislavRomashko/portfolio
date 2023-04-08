import Contacts from '../components/ui/contacts';
import EnteryFragment from '../components/ui/mainPageFragments/enteryFragment';
import ProjectFragment from '../components/ui/mainPageFragments/projectFragment/projectsFragment';
import TechnologiesFragment from '../components/ui/mainPageFragments/technologiesFragment';

import { useParams } from 'react-router-dom';
import ProjectModal from '../components/ui/projectModal';

const MainPage = () => {
  const { id } = useParams();

  return (
    <>
      {id ? (
        <ProjectModal _id={id} />
      ) : (
        <div className="bg-slate-900 h-full">
          <div data-aos="fade-up">
            <EnteryFragment />
          </div>
          <div data-aos="zoom-in-down">
            <TechnologiesFragment />
          </div>
          <div data-aos="flip-up">
            <ProjectFragment />
          </div>
          <div data-aos="fade-up">
            <Contacts />
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;

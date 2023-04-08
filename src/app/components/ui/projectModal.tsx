import React, { FC, useState } from 'react';
import { projects } from '../../mockdata/project';
import Tags from '../common/tags';
import { useNavigate } from 'react-router-dom';

interface ProjectModalProps {
  _id?: string;
}

interface ModalProj {
  _id: number;
  title: string;
  description: string;
  link: string;
  img: string;
}

const ProjectModal: FC<ProjectModalProps> = ({ _id }) => {
  const navigate = useNavigate();
  const [projectsData] = useState(projects);
  const modalProject: any = projectsData.find((p) => p._id === Number(_id));

  return (
    <div className="flex flex-col justify-center items-center p-5 sm:p-10">
      <div className="mb-10 sm:mb-14  text-slate-200 w-[300px] sm:w-[500px]">
        <button
          className="ml-16 sm:ml-36 border border-sky-500 hover:border-pink-500 hover:text-pink-500 px-10 sm:px-14 py-2 sm:py-4"
          onClick={() => navigate('/')}
        >
          Main menu
        </button>
        <button
          className="ml-9 sm:ml-28 my-7 border border-sky-500 hover:border-pink-500 hover:text-pink-500 px-10 sm:px-14 py-2 sm:py-4"
          onClick={() => navigate('/projects')}
        >
          Go back to projects
        </button>
        <div className="mb-10 sm:mb-14">
          <Tags secondTag="h1">
            <h1 className="text-2xl sm:text-4xl text-center font-prompt ">
              {modalProject.title}
            </h1>
          </Tags>
        </div>
        <div className="mb-14">
          <Tags secondTag="p">
            <p className="text-center text-lg sm:text-xl">
              {modalProject.description}
            </p>
          </Tags>
        </div>
        <div>
          <Tags secondTag="a">
            <a
              href={modalProject.link}
              className="text-2xl sm:text-3xl text-sky-500 text-center block font-prompt"
              target="_blank"
              rel="noreferrer"
            >
              Project Link
            </a>
          </Tags>
        </div>
      </div>
      <div className=" w-[300px] sm:w-[500px]">
        <img src={modalProject.img} alt="" className="w-full" />
        <hr />
      </div>
    </div>
  );
};

export default ProjectModal;

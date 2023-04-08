import React from 'react';
import AboutMe from '../components/ui/aboutMe';
import { Routes, Route, Navigate } from 'react-router-dom';
import Projects from '../components/ui/projects';
import Contacts from '../components/ui/contacts';
import MainPage from './mainPage';
import Tags from '../components/common/tags';
import Skills from '../components/ui/skills';

const RenderPage = () => {
  return (
    <div className="bg-slate-900 p-4 sm:p-10">
      <Tags firstTag="html" secondTag="body">
        <Routes>
          <Route path=":id?" element={<MainPage />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Tags>
    </div>
  );
};

export default RenderPage;

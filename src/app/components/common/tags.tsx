import React from 'react';

interface TagsProps {
  firstTag?: string;
  secondTag: string;
  children: React.ReactNode;
}

const Tags = ({ firstTag, secondTag, children }: TagsProps) => {
  return (
    <>
      {firstTag && (
        <p className="font-['Fasthand'] text-1xl  text-slate-600  mb-1 tag tag__first-tag">{`< ${firstTag} >`}</p>
      )}

      <p className="font-['Fasthand'] text-1xl  text-slate-600  ml-6 mb-1 tag tag__second-tag">{`< ${secondTag} >`}</p>
      {children}
      <p className="font-['Fasthand'] text-1xl  text-slate-600  ml-6 mt-1 tag tag__second-tag">{`</ ${secondTag} >`}</p>

      {firstTag && (
        <p className="font-['Fasthand'] text-1xl  text-slate-600  mt-1 tag tag__first-tag">{`</ ${firstTag} >`}</p>
      )}
    </>
  );
};

export default Tags;

import AppWrap from '@/wrapper/AppWrap';
import { useEffect, useState } from 'react';
import { client } from '../../../lib/client';
import InfoCard from '../../cards/info/InfoCard';

export interface IAbout {}

const About: React.FC<IAbout> = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);

  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-1 flex-col items-center bg-white-color pt-24 pb-20 md:pb-0"
    >
      <h2 className="text-xl font-bold text-black-color sm:text-4xl md:text-5xl">
        I’m <span className="text-secondary-color">passionate</span> about what
        I do
      </h2>

      <p className="mt-8 w-5/6 text-justify font-semibold text-gray-color lg:w-3/5 lg:text-start">
        Since I started my journey as a software developer, I have done remote
        works for agencies and full-time jobs for companies in the technology
        sector as a developer and as IT specialist. I have creative thinking,
        good communication, time-management, team work experience and I’m
        perpetually working on improving my chops
      </p>

      <div className="mt-8 flex flex-wrap items-start justify-center">
        {about.map((item: any, index: number) => (
          <InfoCard key={`info-card-${index}`} {...{ ...item }} />
        ))}
      </div>
    </section>
  );
};

export default AppWrap(About, 'about');

import { useEffect, useState } from 'react';
import { client } from '../../../lib/client';
import AppWrap from '../../../wrapper/AppWrap';
import MotionWrap from '../../../wrapper/MotionWrap';
import InfoCard from '../../cards/info/InfoCard';
import InfoCardSkeleton from '../../cards/info/InfoCard.skeleton';

export interface IAbout {}

const About: React.FC<IAbout> = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "about"]';
    setLoading(true);

    client.fetch(query).then((data) => {
      setAbout(data);
      setLoading(false);
    });
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
        {!loading &&
          about.map((item: any, index: number) => (
            <InfoCard key={`info-card-${index}`} {...{ ...item }} />
          ))}
        {loading &&
          [1, 2, 3].map((index) => (
            <InfoCardSkeleton key={`info-card-skeleton-${index}`} />
          ))}
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(About), 'about');

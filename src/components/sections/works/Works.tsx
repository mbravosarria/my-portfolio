import AppWrap from '@/wrapper/AppWrap';
import MotionWrap from '@/wrapper/MotionWrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import WorkCard from '../../../components/cards/work/WorkCard';
import { client } from '../../../lib/client';

export interface IWorks {}

const Works: React.FC<IWorks> = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => setWorks(data));
  }, []);

  return (
    <section
      id="works"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-primary-color py-24"
    >
      <h2 className="text-xl font-bold text-black-color sm:text-4xl md:text-5xl">
        My <span className="text-secondary-color">Portfolio</span> Section
      </h2>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap items-start justify-center"
      >
        {works.map((item: any, index: number) => (
          <WorkCard {...{ ...item }} key={`work-${index}`} />
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(MotionWrap(Works), 'works');

import { motion } from 'framer-motion';
import Image from 'next/image';

export interface IHeader {}

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header: React.FC<IHeader> = () => {
  return (
    <section className="relative flex flex-1 flex-col space-y-16 bg-bg-img bg-cover bg-center bg-repeat px-8 pt-24 sm:px-4 sm:pb-8 lg:flex-row xl:pt-32">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="mr-0 flex h-full w-full flex-[0.65] flex-col items-start justify-start lg:w-auto lg:px-8"
      >
        <div className="flex w-full flex-col items-end justify-end">
          <div className="flex w-auto items-center justify-center rounded-xl bg-white-color py-4 px-8 shadow-lg">
            <span className="text-2xl">👋</span>
            <div className="ml-5">
              <p className="text-sm text-gray-color">Hello, I am</p>
              <h1 className="text-4xl font-bold">Michel</h1>
            </div>
          </div>
          <div className="mt-12 flex w-auto flex-col items-end justify-center rounded-xl bg-white-color py-4 px-8 shadow-lg">
            <p className="mr-4 text-sm text-gray-color">Web Developer</p>
            <p className="mr-4 text-sm text-gray-color">Open to Work</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="relative flex h-full flex-1 items-center justify-center"
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src="/circle.svg"
          alt="profile background circle"
          className="absolute bottom-0 z-0 h-72 w-72 md:h-96 md:w-96"
        />
        <div className="relative z-10 h-72 w-72 object-contain md:h-96 md:w-96">
          <Image src="/profile.png" alt="profile background" fill />
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="ml-0 flex h-full flex-[0.75] flex-row flex-wrap items-start justify-evenly lg:ml-4 lg:flex-col"
      >
        {['/redux.png', '/node.png', '/react.png'].map((imgStr, index) => (
          <div
            key={`circle-${index}`}
            className="h-24 w-24 rounded-full bg-white-color p-2 shadow-lg first:h-28 first:w-28 last:h-20 last:w-20 even:m-7 even:h-40 even:w-40"
          >
            <div className="relative h-full w-full">
              <Image src={imgStr} alt={`circle-${index}`} fill />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Header;

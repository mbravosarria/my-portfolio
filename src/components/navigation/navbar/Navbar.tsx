import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

export interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between border border-white-color/20 bg-white-color/25 py-4 px-8">
      <img
        src="/bravos-icon-text.svg"
        alt="Bravos Dev logo"
        width={100}
        height={30}
      />
      <ul className="hidden gap-5 md:flex">
        {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
          <li key={`link-${item}`} className="flex items-center">
            <a
              href={`#${item}`}
              className="border-b-2 border-primary-color/25 text-base font-medium uppercase text-gray-color transition-all duration-300 ease-in-out hover:border-secondary-color hover:text-secondary-color"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      {/* This is the sidebar menu */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary-color md:hidden">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="h-[70%] w-[70%] cursor-pointer text-white-color"
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="fixed top-0 bottom-0 right-0 z-[5] flex h-screen w-4/5 flex-col items-end justify-end bg-white-color bg-bg-white bg-cover bg-repeat p-4 shadow-md"
          >
            <HiX
              onClick={() => setToggle(false)}
              className="my-2 mx-4 h-[35px] w-[35px] text-secondary-color"
            />
            <ul className="m-0 flex h-full w-full flex-col items-start justify-start space-y-4 p-0">
              {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                <li key={item} className="m-1">
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    className="border-b border-white-color text-base font-medium uppercase text-gray-color transition-all duration-300 ease-in-out hover:border-secondary-color hover:text-secondary-color"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

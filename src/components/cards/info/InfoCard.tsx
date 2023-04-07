import { urlFor } from '../../../lib/client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface IInfoCard {
  image: any;
  title: string;
  description: string;
}

const InfoCard: React.FC<IInfoCard> = ({ image, title, description }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="m-8 flex w-48 flex-col items-start justify-start 2xl:w-96"
    >
      <div className="relative h-48 w-full 2xl:h-96">
        <Image
          src={urlFor(image).url()}
          alt={`image from ${image}`}
          fill
          className="rounded-2xl"
        />
      </div>
      <h2 className="mt-5 text-sm font-bold text-black-color 2xl:text-base">
        {title}
      </h2>
      <p className="mt-3 text-sm text-gray-color 2xl:text-base">
        {description}
      </p>
    </motion.div>
  );
};

export default InfoCard;

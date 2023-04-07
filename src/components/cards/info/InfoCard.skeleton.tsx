import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';

export interface IInfoCardSkeleton {}

const InfoCardSkeleton: React.FC<IInfoCardSkeleton> = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="m-7 flex w-48 flex-col items-start justify-start 2xl:w-96"
    >
      <div className="relative h-48 w-full space-y-4 2xl:h-96">
        <div className="h-full w-full">
          <Skeleton height={'100%'} width={'100%'} />
        </div>
        <div className="w-full">
          <Skeleton height={20} width={'100%'} />
        </div>
        <div className="w-full">
          <Skeleton count={3} height={20} width={'100%'} />
          <Skeleton height={20} width={'40%'} />
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCardSkeleton;

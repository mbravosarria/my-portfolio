import Skeleton from 'react-loading-skeleton';

export interface IWorkCardSkeleton {}

const WorkCardSkeleton: React.FC<IWorkCardSkeleton> = () => {
  return (
    <div className="m-4 flex w-64 cursor-pointer flex-col space-y-6 rounded-lg bg-white-color p-4 text-black-color transition-all duration-300 ease-in-out hover:shadow-xl xs:m-8 xs:w-72 2xl:w-[26rem] 2xl:rounded-xl 2xl:p-5">
      <div className="relative h-64 w-full space-y-6 xs:h-72 2xl:h-[26rem]">
        <div className="h-full w-full">
          <Skeleton height={'100%'} width={'100%'} />
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="text-center">
          <Skeleton height={20} style={{ margin: 'auto' }} width={'80%'} />
        </div>
        <div className="w-full">
          <Skeleton count={4} height={20} width={'100%'} />
          <Skeleton height={20} width={'40%'} />
        </div>
        <div className="flex space-x-2">
          <Skeleton height={20} width={60} />
          <Skeleton height={20} width={60} />
          <Skeleton height={20} width={60} />
        </div>
      </div>
    </div>
  );
};

export default WorkCardSkeleton;

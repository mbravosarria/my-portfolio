import Dots from '@/components/navigation/dots/Dots';
import SocialMedia from '@/components/navigation/social-media/SocialMedia';

const AppWrap = (Component: any, idName: string, classNames?: string) =>
  function HOC() {
    return (
      <div id={idName} className={`relative flex flex-row ${classNames}`}>
        <SocialMedia />

        <div className="relative flex-1 flex-col">
          <Component />

          <div className="absolute bottom-0 right-0 hidden p-4 md:block">
            <p className="text-sm text-gray-color">@2023 Michel</p>
            <p className="text-sm text-gray-color">All rights reserved</p>
          </div>
        </div>

        <Dots active={idName} />
      </div>
    );
  };

export default AppWrap;

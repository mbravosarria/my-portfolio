export interface IDots {
  active: string;
}

const Dots: React.FC<IDots> = ({ active }) => {
  return (
    <div className="absolute right-0 top-80 hidden p-4 md:block">
      {['home', 'about', 'works', 'skills', 'contact'].map((item, index) => (
        <a href={`#${item}`} key={item + index}>
          <div
            className={`mb-6 h-3 w-3 rounded-full ${
              active === item ? 'bg-secondary-color' : 'bg-gray-color'
            } hover:bg-secondary-color`}
          ></div>
        </a>
      ))}
    </div>
  );
};

export default Dots;

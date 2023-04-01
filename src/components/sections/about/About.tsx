import InfoCard from '../../cards/info/InfoCard';

export interface IAbout {}

const abouts = [
  {
    image: '/about-test.png',
    title:
      'Est occaecat ea in cupidatat reprehenderit cupidatat in commodo est irure et est.',
    description:
      'Ad officia ad ea eiusmod sit. Officia amet mollit magna sint esse laboris nostrud cillum ea veniam veniam aute minim cillum. Magna esse commodo laborum quis. Ut aliqua anim ad veniam tempor qui do duis ut ullamco.',
  },
  {
    image: '/about-test.png',
    title:
      'Est occaecat ea in cupidatat reprehenderit cupidatat in commodo est irure et est.',
    description:
      'Ad officia ad ea eiusmod sit. Officia amet mollit magna sint esse laboris nostrud cillum ea veniam veniam aute minim cillum. Magna esse commodo laborum quis. Ut aliqua anim ad veniam tempor qui do duis ut ullamco.',
  },
  {
    image: '/about-test.png',
    title:
      'Est occaecat ea in cupidatat reprehenderit cupidatat in commodo est irure et est.',
    description:
      'Ad officia ad ea eiusmod sit. Officia amet mollit magna sint esse laboris nostrud cillum ea veniam veniam aute minim cillum. Magna esse commodo laborum quis. Ut aliqua anim ad veniam tempor qui do duis ut ullamco.',
  },
];

const About: React.FC<IAbout> = () => {
  return (
    <section
      id="about"
      className="flex w-full flex-1 flex-col items-center bg-white-color pt-24"
    >
      <h2 className="text-xl font-bold text-black-color sm:text-4xl md:text-5xl">
        I Know that <span className="text-secondary-color">Good Design</span>{' '}
        <br />
        means <span className="text-secondary-color">Good Business</span>
      </h2>

      <div className="mt-8 flex flex-wrap items-start justify-center">
        {abouts.map((item, index) => (
          <InfoCard key={`info-card-${index}`} {...{ ...item }} />
        ))}
      </div>
    </section>
  );
};

export default About;

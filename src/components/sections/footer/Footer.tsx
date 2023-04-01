export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <section
      id="contact"
      className="mb-6 flex w-full flex-1 flex-col items-center justify-center bg-white-color pt-24"
    >
      <h2 className="text-xl font-bold text-black-color sm:text-4xl md:text-5xl">
        Take A Coffee & Chat With Me
      </h2>
      <div className="mt-8 flex w-full flex-col items-center justify-center py-4 px-8 md:w-3/5">
        <input
          className="my-3 w-full cursor-text rounded-xl border-0 bg-primary-color p-3 text-secondary-color outline-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-color"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="my-3 w-full cursor-text rounded-xl border-0 bg-primary-color p-3 text-secondary-color outline-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-color"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <textarea
          className="my-3 h-44 w-full cursor-text rounded-xl border-0 bg-primary-color p-3 text-secondary-color outline-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-color"
          name="message"
          placeholder="Your Message"
        ></textarea>
        <button
          className="mt-8 w-full cursor-pointer rounded-xl border-0 bg-secondary-color py-4 px-8 font-medium text-white-color outline-none hover:bg-[#2430af] md:w-1/2"
          type="button"
        >
          Send Message
        </button>
      </div>
    </section>
  );
};

export default Footer;

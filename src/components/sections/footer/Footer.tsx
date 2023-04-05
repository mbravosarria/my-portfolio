import AppWrap from '@/wrapper/AppWrap';
import { useState } from 'react';
import { client } from '../../../lib/client';

export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen w-full flex-1 flex-col items-center justify-center bg-white-color pt-24 pb-20 md:pb-0"
    >
      <h2 className="text-xl font-bold text-black-color sm:text-4xl md:text-5xl">
        Take A Coffee & Chat With Me
      </h2>
      {!isFormSubmitted ? (
        <div className="mt-8 flex w-full flex-col items-center justify-center py-4 px-8 md:w-3/5">
          <input
            className="my-3 w-full cursor-text rounded-xl border-0 bg-primary-color p-3 text-secondary-color outline-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-color"
            type="text"
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={handleChangeInput}
          />
          <input
            className="my-3 w-full cursor-text rounded-xl border-0 bg-primary-color p-3 text-secondary-color outline-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-color"
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            onChange={handleChangeInput}
          />
          <textarea
            className="my-3 h-44 w-full cursor-text rounded-xl border-0 bg-primary-color p-3 text-secondary-color outline-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-color"
            name="message"
            value={message}
            placeholder="Your Message"
            onChange={handleChangeInput}
          />
          <button
            className="mt-8 w-full cursor-pointer rounded-xl border-0 bg-secondary-color py-4 px-8 font-medium text-white-color outline-none hover:bg-[#2430af] md:w-1/2"
            type="button"
            onClick={handleSubmit}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <h3 className="my-16 text-xl font-semibold text-secondary-color">
          Thank you for getting in touch!
        </h3>
      )}
    </section>
  );
};

export default AppWrap(Footer, 'contact');

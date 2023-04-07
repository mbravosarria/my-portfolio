import { client } from '@/lib/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AppWrap from '../../../wrapper/AppWrap';
import MotionWrap from '../../../wrapper/MotionWrap';

export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: data.name,
      email: data.email,
      message: data.message,
    };

    await client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      reset();
    });
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 flex w-full flex-col items-start justify-center py-4 px-8 md:w-3/5"
        >
          <input
            className="my-3 w-full cursor-text rounded-xl border-0 bg-primary-color p-3 text-secondary-color outline-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-color"
            type="text"
            {...register('name', { required: true })}
            placeholder="Your Name"
          />
          {errors.name && (
            <span className="text-sm font-semibold text-[#B12024]">
              Please provide a name
            </span>
          )}
          <input
            className="my-3 w-full cursor-text rounded-xl border-0 bg-primary-color p-3 text-secondary-color outline-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-color"
            type="email"
            {...register('email', {
              required: 'Please provide a valid email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please provide a valid email',
              },
            })}
            placeholder="Your Email"
          />
          {errors.email && (
            <span className="text-sm font-semibold text-[#B12024]">
              *{errors.email.message?.toString()}
            </span>
          )}
          <textarea
            className="my-3 h-44 w-full cursor-text rounded-xl border-0 bg-primary-color p-3 text-secondary-color outline-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-color"
            {...register('message', { required: true })}
            placeholder="Your Message"
          />
          {errors.message && (
            <span className="text-sm font-semibold text-[#B12024]">
              Please provide a message
            </span>
          )}
          <div className="flex w-full items-center justify-center">
            <button
              className="mt-8 w-full cursor-pointer rounded-xl border-0 bg-secondary-color py-4 px-8 font-medium text-white-color outline-none hover:bg-[#2430af] md:w-1/2"
              type="submit"
            >
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </div>
        </form>
      ) : (
        <h3 className="my-16 text-xl font-semibold text-secondary-color">
          Thank you for getting in touch!
        </h3>
      )}
    </section>
  );
};

export default AppWrap(MotionWrap(Footer), 'contact');

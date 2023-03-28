import PrimaryButton from '@/components/buttons/primary/PrimaryButton';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const PageNotFound = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ooops!!!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/404-icon.svg" sizes="128x128" />
      </Head>
      <section className="flex h-screen w-full flex-col items-center justify-center space-x-4 font-dm-sans lg:flex-row">
        <Image
          src="/404-bg.svg"
          alt="page not found error"
          width={400}
          height={400}
        />
        <article className="flex flex-col space-y-8 text-center lg:w-1/3 lg:text-start xl:w-1/4">
          <h1 className="text-4xl font-extrabold uppercase text-secondary-color">
            Page not found
          </h1>
          <p className="text-xl text-gray-color">
            The page you are looking for was moved, removed, renamed or might
            never existed.
          </p>
          <span>
            <PrimaryButton
              buttonText="Go Home"
              onClickAction={() => router.push('/')}
            />
          </span>
        </article>
      </section>
    </>
  );
};

export default PageNotFound;

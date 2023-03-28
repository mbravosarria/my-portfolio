import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import AltButton from '@/components/buttons/alt/AltButton';

const InternalServerError = () => {
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
          src="/500-bg.svg"
          alt="internal server error"
          width={400}
          height={400}
        />
        <article className="flex flex-col space-y-8 text-center lg:w-1/3 lg:text-start">
          <h1 className="text-4xl font-extrabold uppercase text-gold-color">
            Internal Server Error
          </h1>
          <span>
            <AltButton
              buttonText="Go Home"
              onClickAction={() => router.push('/')}
            />
          </span>
        </article>
      </section>
    </>
  );
};

export default InternalServerError;

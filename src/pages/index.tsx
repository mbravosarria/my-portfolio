import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Bravos Dev | Portfolio</title>
        <meta
          name="description"
          content="Hello my name is Michel Bravo, I'm Web Developer and this is my online portfolio. I have been in the world of web development for 3 years, mainly as a react developer. This site is organized into three main sections: Information about me, the skills I master and my portfolio of completed projects."
        />
        <meta property="og:URL" content="https://bravos-dev.netlify.app" />
        <meta property="og:title" content="Bravos Dev | Portfolio" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Hello my name is Michel Bravo, I'm Web Developer and this is my online portfolio. I have been in the world of web development for 3 years, mainly as a react developer. This site is organized into three main sections: Information about me, the skills I master and my portfolio of completed projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bravos-icon.svg" />
      </Head>
      <main></main>
    </>
  );
};

export default Home;

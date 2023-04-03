import dynamic from 'next/dynamic';
import Head from 'next/head';

const Navbar = dynamic(() => import('@/components/navigation/navbar/Navbar'));
const Header = dynamic(() => import('@/components/sections/header/Header'));
const About = dynamic(() => import('@/components/sections/about/About'), {
  ssr: false,
});
const Works = dynamic(() => import('@/components/sections/works/Works'));
const Skills = dynamic(() => import('@/components/sections/skills/Skills'));
const Footer = dynamic(() => import('@/components/sections/footer/Footer'));

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
      <main className="bg-primary-color font-dm-sans">
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Footer />
      </main>
    </>
  );
};

export default Home;

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaMobile } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export interface ISocialMedia {}

const SocialMedia: React.FC<ISocialMedia> = () => {
  return (
    <div className="absolute bottom-0 z-50 flex w-full flex-row items-center justify-center space-x-4 p-4 md:w-auto md:flex-col md:justify-end md:space-x-0 md:space-y-4">
      <a
        href="https://www.linkedin.com/in/bravos-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-item"
      >
        <BsLinkedin className="social-media-icon" />
      </a>
      <a
        href="https://github.com/mbravosarria"
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-item"
      >
        <BsGithub className="social-media-icon" />
      </a>
      <a href="mailto:mbravosarria@gmail.com" className="social-media-item">
        <MdEmail className="social-media-icon" />
      </a>
      <a href="tel:+5352011797" className="social-media-item">
        <FaMobile className="social-media-icon" />
      </a>
    </div>
  );
};

export default SocialMedia;

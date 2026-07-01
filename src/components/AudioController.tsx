import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { enableAudio, setHomePage } from '../audio';

const AudioController = () => {
  const location = useLocation();

  useEffect(() => {
    const handler = () => enableAudio();
    window.addEventListener('click', handler, { once: true });
    window.addEventListener('scroll', handler, { once: true, passive: true });
    return () => {
      window.removeEventListener('click', handler);
      window.removeEventListener('scroll', handler);
    };
  }, []);

  useEffect(() => {
    setHomePage(location.pathname === '/');
  }, [location.pathname]);

  return null;
};

export default AudioController;

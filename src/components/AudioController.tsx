import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { enableAudio, setHomePage } from '../audio';

const AudioController = () => {
  const location = useLocation();

  useEffect(() => {
    const handler = () => enableAudio();

    // Click is always a real user gesture — add immediately.
    window.addEventListener('click', handler, { once: true });
    window.addEventListener('touchstart', handler, { once: true, passive: true });

    // Delay scroll listener so it doesn't fire from ScrollToTop's
    // programmatic window.scrollTo(0, 0) that runs on mount.
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handler, { once: true, passive: true });
    }, 400);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handler);
      window.removeEventListener('touchstart', handler);
      window.removeEventListener('scroll', handler);
    };
  }, []);

  useEffect(() => {
    setHomePage(location.pathname === '/');
  }, [location.pathname]);

  return null;
};

export default AudioController;

import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [curPath, setCurPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return curPath === path ? children : null;
};

export default Route;

import { useEffect } from 'react';
import { navigate } from "@reach/router"

// markup
const NotFoundPage = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
}

export default NotFoundPage

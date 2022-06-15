import {useEffect, useState} from 'react';

function useFakeLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading;
}

export default useFakeLoading;

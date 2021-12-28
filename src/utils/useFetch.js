import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        };

        const { data, headers } = await axios.get(url, config);

        setData(data);
        setHeaders(headers);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);

  return { data, headers };
};

export default useFetch;

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        };

        const { data } = await axios.get(url, config);

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);

  return data;
};

export default useFetch;

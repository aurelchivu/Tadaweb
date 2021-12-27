import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, page, pageSize) => {
  const [data, setData] = useState(null);
  const [pages, setPages] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        };

        const { data, headers } = await axios.get(
          `${url}?_page=${page}&_limit=${pageSize}`,
          config
        );

        setData(data);
        setPages(Math.ceil(headers['x-total-count'] / pageSize));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url, page, pages, pageSize]);

  return { data, pages };
};

export default useFetch;

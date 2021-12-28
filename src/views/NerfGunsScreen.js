import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import Gun from '../components/Gun';
import Meta from '../components/Meta';

const NerfGunsScreen = () => {
  const params = useParams();

  const page = params.pageNumber || 1;
  const pageSizes = [4, 8, 20, 50];
  let [data, setData] = useState(null);
  const [pages, setPages] = useState(null);
  const [pageSize, setPageSize] = useState(pageSizes[3]);
  const [keyword, setKeyword] = useState('');
  const [guns, setGuns] = useState([]);

  const url = 'http://localhost:8000/guns';

  const getData = async (url, page, pageSize) => {
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

  useEffect(() => {
    getData(url, page, pageSize);
  }, [url, page, pages, pageSize]);

  const deleteItem = async (id) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };
      await axios.delete(`http://localhost:8000/guns/${id}`, config);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    data.forEach((item, idx) => {
      deleteItem(item.id);
      if ((idx = data.length - 1)) {
        getData(url, page, pageSize);
      }
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  if (keyword.length > 0) {
    data = data.filter((u) => {
      return u.name.toLowerCase().match(keyword);
    });
  }

  return (
    <div className='container-fluid'>
      <Meta title={'My Cool App | Nerf Guns'} />
      {data && (
        <>
          <motion.div
            className='d-flex justify-content-between'
            initial={{ translateY: -100 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to='/nerfguns/addgun' className='btn btn-outline-success'>
              Add New Gun
            </Link>
            <form className='d-flex col-4'>
              <input
                className='form-control me-5'
                type='search'
                placeholder='Search guns...'
                aria-label='Search'
                value={keyword}
                onChange={handleChange}
              />
            </form>
            <div className='row'>
              <div className='col'>
                <select
                  className='form-select form-select'
                  aria-label='.form-select-sm example'
                  defaultValue={pageSize}
                  onChange={(e) => setPageSize(e.target.value)}
                >
                  {pageSizes.map((value, idx) => (
                    <option key={idx} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col my-auto'>Guns/page</div>
            </div>
            <div className='bd-highlight'>
              <button
                type='button'
                className='btn btn-outline-danger'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Delete All
              </button>

              <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLabel'>
                        Delete confirmation
                      </h5>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div className='modal-body'>
                      Are you sure you want to delete all items displayed?
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                      >
                        No! Get me out of here!
                      </button>
                      <button
                        type='button'
                        className='btn btn-outline-danger'
                        onClick={handleClick}
                        data-bs-dismiss='modal'
                      >
                        Yes! Delete all!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className='row'>
            {data.map((item, idx) => (
              <motion.div
                key={item.id}
                className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch'
                initial={{
                  opacity: 0,
                  translateX: idx % 2 === 0 ? 100 : -100,
                  translateY: -100,
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                  translateY: 0,
                }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                <Gun gun={item} />
              </motion.div>
            ))}
          </div>

          <nav aria-label='pagination'>
            <ul className='pagination pagination-sm'>
              {[...Array(pages).keys()].map((x) => (
                <Link
                  key={x + 1}
                  to={`/nerfguns/page/${x + 1}`}
                  className='btn btn-outline-primary'
                >
                  <li
                    className={`page-item ${
                      params.pageNumber === x + 1 ? 'active' : ''
                    }`}
                  >
                    {x + 1}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default NerfGunsScreen;

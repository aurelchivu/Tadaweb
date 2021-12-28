import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import useFetch from '../utils/useFetch';

const GunScreen = () => {
  const params = useParams();
  const { data } = useFetch(`http://localhost:8000/guns/${params.id}`);

  const navigate = useNavigate();

  const deleteGun = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      await axios.delete(`http://localhost:8000/guns/${params.id}`, config);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    deleteGun();
    navigate('/nerfguns');
  };

  return (
    <div className='container-fluid'>
      {data && (
        <>
          <div className='row'>
            <motion.div
              className='col-md-5'
              initial={{ translateY: -100 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='d-flex justify-content-between'>
                <div className='p-2 bd-highlight'>
                  <Link
                    to={`/nerfguns/${params.id}/edit`}
                    className='btn btn-outline-success my-3'
                  >
                    Edit Gun
                  </Link>
                </div>
                <div className='p-4 bd-highlight'>
                  <button
                    type='button'
                    className='btn btn-outline-danger'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    Delete Gun
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
                          Are you sure you want to delete this item?
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
                            Yes! Delete it!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className='row'>
            <motion.div
              className='col-md-5'
              initial={{
                opacity: 0,
                translateY: 400,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
            >
              <img
                src={data.image}
                alt={data.name}
                className='img-fluid thumbnail-box-shadow'
              ></img>
            </motion.div>
            <div className='col-md-1'></div>
            <motion.div
              className='col-md-6'
              initial={{
                opacity: 0,
                translateX: 400,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              <h2 className='my-3'>{data.name}</h2>
              <p>{data.description}</p>
            </motion.div>
            <div className='col-md-3'></div>
          </div>
        </>
      )}
    </div>
  );
};

export default GunScreen;

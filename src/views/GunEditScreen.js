import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import FormContainer from '../components/FormContainer';
import useFetch from '../utils/useFetch';

const GunEditScreen = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const params = useParams();
  const { data } = useFetch(`http://localhost:8000/guns/${params.id}`);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setName(data.name);
      setImage(data.image);
      setDescription(data.description);
    }
  }, [data]);

  const updateGun = async ({ name, image, description }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      await axios.patch(
        `http://localhost:8000/guns/${params.id}`,
        { name, image, description },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateGun({ name, image, description });
    navigate(`/nerfguns/${params.id}`);
  };

  return (
    <div className='container-fluid'>
      {data && (
        <>
          <FormContainer>
            <motion.h2
              className='my-3'
              initial={{ translateY: 1000 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.8 }}
            >
              Edit Gun
            </motion.h2>
            <form onSubmit={submitHandler}>
              <motion.div
                className='mb-3'
                initial={{ translateX: -1000 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.8 }}
              >
                <label htmlFor='textInput' className='form-label'>
                  Name
                </label>
                <input
                  type='name'
                  className='form-control'
                  placeholder='Name'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </motion.div>
              <motion.div
                className='mb-3'
                initial={{ translateX: 1000 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.8 }}
              >
                <label htmlFor='textInput' className='form-label'>
                  Image
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter image url'
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </motion.div>
              <motion.div
                className='mb-3'
                initial={{ translateX: -1000 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.8 }}
              >
                <label htmlFor='formControlTextarea1' className='form-label'>
                  Description
                </label>
                <textarea
                  className='form-control'
                  rows='6'
                  placeholder='Description'
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </motion.div>
              <motion.button
                className='btn btn-secondary'
                type='submit'
                initial={{ translateY: -1000 }}
                animate={{ translateY: 0 }}
                transition={{ duration: 0.8 }}
              >
                Update
              </motion.button>
            </form>
          </FormContainer>
        </>
      )}
    </div>
  );
};

export default GunEditScreen;

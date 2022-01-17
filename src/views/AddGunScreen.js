import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import FormContainer from '../components/FormContainer';
import Meta from '../components/Meta';

const AddGunScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const addGun = async ({ id, name, image, description }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      await axios.post(
        `http://localhost:8000/guns`,
        { id, name, image, description },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addGun({ id, name, image, description });
    navigate(`/nerfguns/${id}`);
  };

  return (
    <div className='container-fluid'>
      <Meta title={'My Cool App | Add Gun'} />
      <FormContainer>
        <motion.h2
          className='my-3'
          initial={{ translateX: -500 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          Add New Gun
        </motion.h2>
        <form onSubmit={submitHandler}>
          <motion.div
            className='mb-3'
            initial={{ translateX: 1000 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label htmlFor='textInput' className='form-label'>
              Id
            </label>
            <input
              type='id'
              className='form-control'
              placeholder='Id'
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </motion.div>
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
            Add Gun
          </motion.button>
        </form>
      </FormContainer>
    </div>
  );
};

export default AddGunScreen;

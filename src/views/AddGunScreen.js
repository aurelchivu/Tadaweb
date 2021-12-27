import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormContainer from '../components/FormContainer';
import useFetch from '../utils/useFetch';

const AddGunScreen = () => {
  const data = useFetch('http://localhost:8000/guns');

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (data) {
      setId(data.length + 1);
    }
  }, [data]);

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
      <Link to='/nerfguns' className='btn btn-secondary my-3 ml-3'>
        Go Back
      </Link>
      <FormContainer>
        <h2>Add New Gun</h2>
        <form onSubmit={submitHandler}>
          <div className='mb-3'>
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
          </div>
          <div className='mb-3'>
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
          </div>
          <div className='mb-3'>
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
          </div>
          <div className='mb-3'>
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
          </div>
          <button className='btn btn-secondary' type='submit'>
            Add Gun
          </button>
        </form>
      </FormContainer>
    </div>
  );
};

export default AddGunScreen;

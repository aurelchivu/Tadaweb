import React from 'react';
import { Link } from 'react-router-dom';
import Gun from '../components/Gun';
import useFetch from '../utils/useFetch';

const NerfGunsScreen = () => {
  const data = useFetch('http://localhost:8000/guns');
  return (
    <div className='container-fluid'>
      {data && (
        <>
          <div className='d-flex justify-content-between'>
            <Link to='/nerfguns/addgun' className='btn btn-outline-success'>
              Add New Gun
            </Link>
            <button type='button' className='btn btn-outline-danger'>
              Delete All
            </button>
          </div>
          <div className='row'>
            {data.map((item) => (
              <div
                key={item.id}
                className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch'
              >
                <Gun gun={item} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NerfGunsScreen;

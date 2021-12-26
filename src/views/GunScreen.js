import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';

const GunScreen = () => {
  const params = useParams();
  const data = useFetch(`http://localhost:8000/guns/${params.id}`);
  return (
    <div className='container-fluid'>
      {data && (
        <>
          <div className='row'>
            <div className='col-md-5'>
              <div class='d-flex justify-content-between'>
                <div class='p-2 bd-highlight'>
                  <Link to='/nerfguns' className='btn btn-outline-success my-3'>
                    Edit Gun
                  </Link>
                </div>
                <div class='p-2 bd-highlight'>
                  <button
                    type='button'
                    className='btn btn-outline-danger ml-3 py-1'
                  >
                    Delete Gun
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-5'>
              <img
                src={data.image}
                alt={data.name}
                className='img-fluid thumbnail-box-shadow'
              ></img>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-6'>
              <h2 className='my-3'>{data.name}</h2>
              <p>{data.description}</p>
            </div>
            <div className='col-md-3'></div>
          </div>
        </>
      )}
    </div>
  );
};

export default GunScreen;

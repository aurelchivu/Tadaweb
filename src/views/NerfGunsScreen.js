import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gun from '../components/Gun';
import useFetch from '../utils/useFetch';

const NerfGunsScreen = () => {
  const [selectAll, setSelectAll] = useState(false);
  const data = useFetch('http://localhost:8000/guns');
  return (
    <div className='container-fluid'>
      {data && (
        <>
          <div class='d-flex justify-content-between'>
            <Link to='/' className='btn btn-outline-success'>
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
                <Gun gun={item} checked={selectAll} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NerfGunsScreen;

import React, { useState } from 'react';
import Gun from '../components/Gun';

const NerfGunsScreen = ({ data }) => {
  const [selectAll, setSelectAll] = useState(false);
  return (
    <div className='container-fluid'>
      <div className='form-check'>
        <input
          onChange={() => setSelectAll(!selectAll)}
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckDefault'
        />
        <label className='form-check-label' htmlFor='flexCheckDefault'>
          Select All
        </label>
        {selectAll && (
          <button type='button' className='btn btn-outline-danger'>
            Delete All
          </button>
        )}
      </div>
      <div className='row'>
        {data?.map((item) => (
          <div
            key={item.id}
            className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch'
          >
            <Gun gun={item} checked={selectAll} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NerfGunsScreen;

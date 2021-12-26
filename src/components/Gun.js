import React from 'react';
import { Link } from 'react-router-dom';

const Gun = ({ gun, checked }) => {
  return (
    <div className='card my-3 p-3 rounded'>
      {checked && (
        <div>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault'
            checked={checked}
          />
        </div>
      )}
      <Link to={`/nerfguns/${gun.id}`}>
        <img src={gun.image} className='card-img-top' alt={gun.name} />
      </Link>
      <div className='card-body'>
        <Link to={`/nerfguns/${gun.id}`}>
          <h5 className='card-title text-center'>{gun.name}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Gun;

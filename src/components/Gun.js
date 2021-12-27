import React from 'react';
import { Link } from 'react-router-dom';

const Gun = ({ gun }) => {
  return (
    <div className='card my-3 p-3 rounded'>
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

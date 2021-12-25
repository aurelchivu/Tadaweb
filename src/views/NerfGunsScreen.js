import React from 'react';

const NerfGunsScreen = ({ data }) => {
  return (
    <div>
      <h1>Nerf Guns</h1>
      {data.map((item) => (
        <div className='py-5' key={item.id}>
          <h4>{item.name}</h4>
          <img src={item.image} className='img-fluid' alt={item.name} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NerfGunsScreen;

import React from 'react';
import { useParams } from 'react-router-dom';

const GunScreen = () => {
  const params = useParams();
  return (
    <div>
      <h1>This is the gun with id of {params.id}</h1>
    </div>
  );
};

export default GunScreen;

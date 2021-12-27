import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col' xs={12} md={8}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;

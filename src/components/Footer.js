import React from 'react';

const Footer = () => {
  return (
    <div className='text-center py-5'>
      Copyright &copy; MyCoolApp {new Date().getFullYear()}. All rights
      reserved.
    </div>
  );
};

export default Footer;

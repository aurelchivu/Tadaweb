import React from 'react';

const HomeScreen = ({ data }) => {
  return (
    <div className='container-fluid'>
      <div
        id='carouselExampleDark'
        className='carousel carousel-dark slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner position-relative'>
          {data.map((item) => (
            <div
              className={`carousel-item ${item.id === '1' ? 'active' : ''}`}
              key={item.id}
            >
              <img
                src={item.image}
                className='d-block w-100'
                alt={item.name}
                fluid
              />
              <div className='carousel-caption d-none d-md-block'>
                <h4 className='fw-bold'>{item.name}</h4>
                <p className='d-inline-block text-truncate'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;

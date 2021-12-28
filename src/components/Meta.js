import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'My Cool App',
};

export default Meta;

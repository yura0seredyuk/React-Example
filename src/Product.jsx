import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';

const Product = ({
  title,
  price,
  description,
}) => {
  return (
    <div className="Product">
      <h2 className="Product__title">
        {title}
      </h2>

      <div className="Product__price">
        Price: {price}
      </div>

      <p className="Product__description">
        {description}
      </p>
    </div>
  );
}

Product.defaultProps = {
  price: 0,
  description: 'No description', 
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default Product;
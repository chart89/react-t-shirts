import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const { title, basePrice, colors, sizes, name  } = props;

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name[0]);


  const getPrice = () => {
  const foundPrice = sizes.find(size => size.name === currentSize);
  return foundPrice.additionalPrice + basePrice;
  }

  const dispConsole = e => {
    e.preventDefault();
    console.log('');
    console.log('Summary');
    console.log('=========');
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
    console.log('');
  }

  return (
    <article className={styles.product} onSubmit={dispConsole}>
      
        <ProductImage name={name} currentColor={currentColor} title={title}/>
      
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <ProductForm 
          sizes={sizes} 
          currentColor={currentColor} 
          setCurrentColor={setCurrentColor} 
          colors={colors} 
          currentSize={currentSize} 
          setCurrentSize={setCurrentSize}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  additionalPrice: PropTypes.number
})),

}

export default Product;

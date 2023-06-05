import Button from '../Button/Button';
import styles from '../Product/Product.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = ({sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor}) => {


    return(
        <form>
          <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} currentSize={currentSize} />
          <OptionColor colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor}/>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

export default ProductForm;

ProductForm.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    additionalPrice: PropTypes.number,
  })).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
}
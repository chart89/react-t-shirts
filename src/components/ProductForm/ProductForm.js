import Button from '../Button/Button';
import styles from '../Product/Product.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import Optioncolor from '../OptionColor/OptionColor';

const ProductForm = ({sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor}) => {


    return(
        <form>
          <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} currentSize={currentSize} />
          <Optioncolor colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor}/>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

export default ProductForm;
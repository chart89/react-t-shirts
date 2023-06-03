import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptionSize = ({sizes, currentSize, setCurrentSize}) => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => 
              <li key={size.name}>
                <button type="button" className={clsx(currentSize === size.name && styles.active)} onClick={() => setCurrentSize(size.name)}>
                  {size.name}
                </button>
              </li>)}
            </ul>
          </div>
    )
}

export default OptionSize;
import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const Optioncolor = ({colors, currentColor, setCurrentColor}) => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => 
              <li key={color}>
                <button type="button" className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} onClick={() => setCurrentColor(color)}/>
              </li>)}
            </ul>
          </div>
    )
}

export default Optioncolor;
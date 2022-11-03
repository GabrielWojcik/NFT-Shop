import {AiOutlineShoppingCart} from 'react-icons/ai';
import styles from './Styles.module.css';

export default function ItemCard() {
    return(
        <div className={styles.container}>
            <AiOutlineShoppingCart size={25} color="#FFFFFF" />
        </div>
    )
}
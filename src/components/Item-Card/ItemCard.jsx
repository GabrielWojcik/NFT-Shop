import { useEffect, useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import styles from './Styles.module.css';

export default function ItemCard({ itemAdd }) {
    const[count, setCount] = useState(0)

    useEffect(() => {
        if(itemAdd) {
            setCount(count + 1)
        }
    },[itemAdd])


    return(
        <div className={styles.container}>
            <p>{count} <AiOutlineShoppingCart size={25} color="#FFFFFF" /></p>
        </div>
    )
}
import Link from "next/link";
import Image from "next/image";
import styles from "./Styles.module.css";
import Monkey from "../../../public/Обезьяна 1.png";


export default function ShopCard() {
    return(
        <div className={styles.container}>
            <Link passHref href="/item">
            <div className={styles.card}>
                <Image id={styles.monkey} src={Monkey} width={327} height={310}/>
            </div>
            </Link>

        </div>
    )
}
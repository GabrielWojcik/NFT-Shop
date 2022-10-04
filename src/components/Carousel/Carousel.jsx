import Image from "next/image"
import Pig from "../../../public/Кабан 1.png"
import Solder from "../../../public/герой 1.png"
import Monkey from "../../../public/Обезьяна 1.png"

import styles from "./Styles.module.css"

export default function Carousel() {
    return(
        <div>
            <div className={styles.containerCard}>
                    <div className={styles.containerCard}>
                <div className={styles.card}>
                </div>
                    <Image id="monkey" src={Monkey} width={367} height={370} />
            </div>
            <div className={styles.containerCard}>
                <div className={styles.card}>
                </div>
                    <Image src={Solder} width={367} height={370} />
            </div>

            <div className={styles.containerCard}>
                <div className={styles.card}>
                </div>
                    <Image src={Pig} width={367} height={370} />
            </div>
            </div>

           

        </div>
    )
}
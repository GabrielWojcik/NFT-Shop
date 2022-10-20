import Link from "next/link";
import Image from "next/image";
import styles from "./Styles.module.css";
import KotNft from "../../../public/Кот 1.png";

export default function Title() {
    return(
        <div className={styles.container}>
        <div className={styles.title}>
            <div className={styles.rectangle}></div>
            <p>NFT MARKET </p>
            
        </div>
            <div className={styles.subTitle}>
                <p>WITH DISCOUNTS</p>
                <div className={styles.tagDescont}><p>-50%</p></div>
            </div>
            <div className={styles.rectangleImage}>
                <Image alt="nft image" src={KotNft} width={255} height={350} />
            </div>


        </div>
    )
}
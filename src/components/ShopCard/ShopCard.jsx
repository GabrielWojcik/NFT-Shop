import Link from "next/link";
import styles from "./Styles.module.css";

export default function ShopCard({ data }) {
    return(
        <div className={styles.container}>
            {
                data.map(nft => {
                    return(
                        <Link passHref href={`/item/${nft.id}`}>
                            <div className={styles.card}>
                            <img id={styles.monkey} src={nft.image} width={327} height={310}/>
                            </div>
                        </Link> 
                        )
                    })
                }
        </div>
    )
}
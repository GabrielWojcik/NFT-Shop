import Link from "next/link"
import styles from "./Styles.module.css"

export default function Carousel({ data }) {
    return(
        <div>
            <div className={styles.containerCard}>
                <div className={styles.containerCard}>
                {
                    data.map(nft => {
                        return(     
                            <div className={styles.card} key={nft.id}>
                                <Link passHref href={`/item/${nft.id}`}>
                                    <img alt="nft image" id="monkey" src={nft.image} width={367} height={370} />
                               </Link>
                            </div>
                        )
                    })
                }
               </div>
            </div>
        </div>
    )
}
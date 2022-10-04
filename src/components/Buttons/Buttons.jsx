import styles from "./Styles.module.css";
import Link from "next/link";


export default function Buttons(){
    return(
            <div className={styles.buttons}>
              <Link passHref href="/shop"><button className={styles.btnBuyNft}>BUY NFT</button></Link>
                <button className={styles.btnGalery}>GALERY</button>
            </div>
    )
}
import Link from "next/link";
import styles from "./Styles.module.css";


export default function Buttons(){
    return(
            <div className={styles.buttons}>
              <Link passHref href="/shop">
                <button className={styles.btnBuyNft}>BUY NFT</button>
              </Link>
              
              <Link passHref href="/galery"> 
                <button className={styles.btnGalery}>GALERY</button>
              </Link>
            </div>
    )
}
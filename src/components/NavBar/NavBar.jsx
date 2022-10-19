import Link from "next/link";
import Image from "next/image"
import styles from "./Styles.module.css";
import NftGo from "../../../public/NFTGo svg.png";

export default function NavBar() {
    return(
        <div className={styles.container}>
            <p>Collections</p>
            <p>Stock</p>
            <p>Create an NFT</p>
           
            <Link passHref href="/">
                <Image src={NftGo} width={241} height={58} id={styles.logo} />
            </Link>
            
            <p>Tops</p>
            <p>Whitelist</p>
            <p>Contacts</p>


        </div>
    )
}
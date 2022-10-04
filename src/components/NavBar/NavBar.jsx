import Image from "next/image"
import NftGo from "../../../public/NFTGo svg.png";
import styles from "./Styles.module.css";

export default function NavBar() {
    return(
        <div className={styles.container}>
            <p>Collections</p>
            <p>Stock</p>
            <p>Create an NFT</p>
           
            <Image src={NftGo} width={241} height={58} />
            
            <p>Tops</p>
            <p>Whitelist</p>
            <p>Contacts</p>


        </div>
    )
}
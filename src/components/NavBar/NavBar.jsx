import Link from "next/link";
import Image from "next/image"
import styles from "./Styles.module.css";
import NftGo from "../../../public/NFTGo svg.png";
import { IoMdMenu } from "react-icons/io";

export default function NavBar() {
    return(
        <div className={styles.container}>
            <p>Collections</p>
            <p>Stock</p>
            <p>Create an NFT</p>
           
            <Link passHref href="/">
                <Image src={NftGo} width={241} height={58} id={styles.logo} />
            </Link>
                <div className={styles.hamburger}>
                    <IoMdMenu size={45} color="#9DFE00" />
                </div>
            
            <p>Tops</p>
            <p>Whitelist</p>
            <p>Contacts</p>


        </div>
    )
}
import Link from "next/link";
import Image from "next/image"
import styles from "./Styles.module.css";
import NftGo from "../../../public/NFTGo svg.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function NavBar() {
    
    const[openMenu, setOpenMenu] = useState(false)

    return(
        <div className={styles.container}>
            <p>Collections</p>
            <p>Stock</p>
            <p>Create an NFT</p>
           
            <Link passHref href="/">
                <Image src={NftGo} width={241} height={58} id={styles.logo} />
            </Link>
                <div className={styles.hamburger}>
                    <IoMdMenu size={45} color="#9DFE00" onClick={() => setOpenMenu(true)} />
                </div>
            {
                openMenu === true ?
                <div className={styles.menuOpenContainer}>
                    <div className={styles.closeMenu}>
                        <IoMdClose size={45} color="#9DFE00" onClick={() => setOpenMenu(false)} />
                        <p>home</p>
                    </div>
                    <div className={styles.menuOptions}>
                        <h3>Home</h3>
                        <h3>Whitelist</h3>
                        <h3>Contacts</h3>
                    </div>
                </div>                
                :
                <>
                </>
            }


            <p>Tops</p>
            <p>Whitelist</p>
            <p>Contacts</p>


        </div>
    )
}
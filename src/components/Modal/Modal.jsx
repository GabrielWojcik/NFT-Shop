import Image from "next/image";
import styles from "./Styles.module.css";
import { IoMdClose } from "react-icons/io"
import { BsGraphUp } from "react-icons/bs"
import { useEffect } from "react";

export default function Modal({ closeModal, imageActiveshop, imageActiveModal }) {

    useEffect(() => {

    },[imageActiveModal])

    return(
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.closeModal}>
                    <IoMdClose 
                    onClick={() => closeModal(false)} 
                    size={25} color="white"
                    />
                </div>
                <p id={styles.title}>YOU SELECTED</p>
                
                <div className={styles.containerSelected}>
                    <div className={styles.boxImage}>
                        {
                            imageActiveModal ? 
                            <Image 
                            src={imageActiveshop.target["data-loaded-src"]} 
                            width={200} 
                            height={200} 
                            />
                            :
                            <></>
                        }
                    </div>
                    <div className={styles.boxPrice}>
                        <p id={styles.price}>$1500,00</p>
                        <div className={styles.containerDescribe}>
                            <p className={styles.describe} >appreciation:  </p>
                            <BsGraphUp size={16} color="white" />
                        </div>
                        <button className={styles.btnBuy} >BUY</button>
                    </div>
                </div>
                

            </div>

        </div>
    )
}
import Image from "next/image";
import styles from "./Styles.module.css";
import { useEffect, useState } from "react";
import Monkey from "../../../public/Обезьяна 1.png";
import MonkeyCap from "../../../public/MonkeyCap.png";
import MonkeyAngel from "../../../public/MonkeyAngel.png";

export default function ShopItem({ openModal, setImageActiveShop, setImageActiveModal }) {
    const[imageActive, setImageActive] = useState(false)
    const[chagedImage, setchagedImage] = useState()

    
    useEffect(() => {
        setImageActiveShop(chagedImage)

    },[chagedImage])

    return(
        <div className={styles.contaier}>

        <div className={styles.containerCards}>
            <div className={styles.containerCard}>
                <div className={styles.card}>
                    {
                        imageActive === true ?
                        
                        <>
                            <Image src={chagedImage.target["data-loaded-src"]} width={300} height={300} />
                        </>
                        :
                            <Image src={Monkey} width={300} height={300} />
                    }


                </div>
                <div className={styles.describe}>
                    <h2 className={styles.title}>MONKEY</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                    </p>
                        <button onClick={() => openModal(true)} className={styles.btnBuy}> BUY </button>

                    <button className={styles.btnAdd}> ADD  </button>
                </div>
            </div>
                
            <div className={styles.contaierShortCard}>
                <div className={styles.shortCard}>
                    <Image
                    onClick={(e) => {
                        setchagedImage(e)
                        setImageActive(true)
                        setImageActiveModal(true)
                    }}
                    src={MonkeyAngel}
                    width={100} 
                    height={100} 
                    />
                </div>

                <div className={styles.shortCard}>
                    <Image  
                    onClick={(e) => {
                        setchagedImage(e)
                        setImageActive(true)
                        setImageActiveModal(true)

                    }}
                    src={MonkeyCap} 
                    width={100} 
                    height={100} 
                    />
                </div>

                <div className={styles.shortCard}>
                    <Image 
                    onClick={(e) => {
                        setchagedImage(e)
                        setImageActive(true)
                        setImageActiveModal(true)

                    }}
                    src={Monkey} 
                    width={100} 
                    height={100} 
                    />
                </div>
            </div>
        </div>
        <div >
 
        </div>
        
        </div>
    )
}
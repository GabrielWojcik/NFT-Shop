import Image from "next/image";
import styles from "./Styles.module.css";
import { useEffect, useState } from "react";
import ToastDemo from "../Toast/Toast";

export default function ShopItem({ openModal, setImageActiveShop, setImageActiveModal, data, 
    images, fotoPrincipal, setItemAdd, itemAdd }) {
    const[imageActive, setImageActive] = useState(false)
    const[chagedImage, setchagedImage] = useState()


    useEffect(() => {

        console.log('data', data);
        setImageActiveShop(chagedImage)
    },[chagedImage])

    return(
        <div className={styles.container}>
        <div className={styles.containerCards}>
            <div className={styles.containerCard}>
                
                <div className={styles.card}>
                    {
                        imageActive === true 
                        ?
                        <Image  src={`${chagedImage.target["data-loaded-src"]}`} width={300} height={280}></Image>
                        :
                        <Image  src={`/${fotoPrincipal}`} width={300} height={280}></Image>
                    }
                </div>
                <div className={styles.describe}>
                    <h2 className={styles.title}>{data[0].name}</h2>
                    <p>
                        {data[0].describe}
                    </p>
                        <button onClick={() => openModal(true)} className={styles.btnBuy}> BUY </button>

                    <ToastDemo 
                    setItemAdd={setItemAdd}
                    data={data}
                    onClick={() => setItemAdd(true)} />
                </div>
            </div>
                
            <div className={styles.contaierShortCard}>
                {
                    images.map(nft => {
                        return(
                            <div className={styles.shortCard} key={nft.id}>
                                <Image 
                                id="monkey" 
                                alt="nft image" 
                                src={`/${nft.image}`} 
                                width={100} 
                                height={100} 
                                onClick={(e) => {
                                    setchagedImage(e)
                                    setImageActive(true)
                                    setImageActiveModal(true)
                                }}
                                />
                            </div>
                       )
                    })
                }
            </div>
        </div>
        <div>
 
        </div>
        
        </div>
    )
}
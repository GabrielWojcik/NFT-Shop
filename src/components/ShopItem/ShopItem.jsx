import Image from "next/image";
import styles from "./Styles.module.css";
import { useEffect, useState } from "react";
import Monkey from "../../../public/Monkey.png";
import MonkeyCap from "../../../public/MonkeyCap.png";
import MonkeyAngel from "../../../public/MonkeyAngel.png";

export default function ShopItem({ openModal, setImageActiveShop, setImageActiveModal, data, images }) {
    // console.log('data shop',data)
    console.log('images shop item', images)
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
                        images.map(nft => {
                            return(
                                <img src={nft.image} alt="nft image" key={nft.id}></img>
                            )
                        })
                        // imageActive === true ?
                        
                        // <>
                        //     {/* <img src={chagedImage.target["data-loaded-src"]} width={300} height={300} /> */}
                        //     <img src={data[0].image} width={300} height={300} />
                        // </>
                        // :
                        //     <img src={data[0].image} width={300} height={300} />
                    }
                </div>
                <div className={styles.describe}>
                    <h2 className={styles.title}>{data[0].name}</h2>
                    <p>
                        {data[0].describe}
                    </p>
                        <button onClick={() => openModal(true)} className={styles.btnBuy}> BUY </button>

                    <button className={styles.btnAdd}> ADD  </button>
                </div>
            </div>
                
            <div className={styles.contaierShortCard}>
                {
                    images.map(nft => {
                        return(
                            <div key={nft.id}>
                                <img id="monkey" alt="nft image" src={nft.image} width={367} heigth={370} />
                            </div>
                        )
                    })
                }
                {/* {
                    images.map(nft => {
                        console.log('imagens map', nft.image)
                        return(
                            <div className={styles.shortCard}>
                                <img src={nft.image} />
                            <img
                            onClick={(e) => {
                                setchagedImage(e)
                                setImageActive(true)
                                setImageActiveModal(true)
                            }}
                            src={nft.image}
                            width={100} 
                            height={100} 
                            />
                            <p>{nft.name}</p>
                        </div>
                        )
                    })
                } */}
            </div>
        </div>
        <div >
 
        </div>
        
        </div>
    )
}
import Image from "next/image"
import { useRouter } from "next/router"
import { FaCoins } from "react-icons/fa"
import { BsTrash } from "react-icons/bs"
import Monkey from "../../public/Monkey.png"
import styles from "../../styles/cart.module.css"

export default function Cart() {

    const router = useRouter();

    return(
        <div className={styles.container}>
            <div className={styles.bar}></div>
            
                <div className={styles.item}>
                <p id={styles.Title}>CART</p>
                    <div className={styles.containerItem}>
                        <Image src={Monkey} width={100} height={100} />
                    
                    <div className={styles.describe}>
                        <div className={styles.containerDescribe}>
                            <p id="title-item">Monkey</p>
                            <div className={styles.descValue}>
                                <FaCoins size={15} color="gold" />
                                <p>$1500,00</p>
                            </div>
                        </div>

                        <div className={styles.trash}>
                            <input type="checkbox"></input>
                            <BsTrash size={25} color="white" cursor="pointer" />
                        </div>


                        </div>
                    </div>
                        <div className={styles.containerBtn}>
                            <button className={styles.btnBuy}>BUY</button>
                        </div>
                </div>
        
                {/* <div className={styles.card}>
                    
                    <label>Cartão</label>
                    <input type="text"></input>
                    
                    <label>Número do Cartão</label>
                    <input type="text"></input>
                    
                    <label>MM/AA</label>
                    <input type="text"></input>

                    <label>Titular do Cartão</label>
                    <input type="text"></input>

                    <label>Cod. de segurança</label>
                    <input type="text"></input>

                     <button className={styles.btnBuyNft}>BUY <BsCreditCard2FrontFill color="white" size={25} /></button>
                    



                </div> */}
        </div>
    )
}
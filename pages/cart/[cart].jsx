import Image from "next/image"
import { useRouter } from "next/router"
import { FaCoins } from "react-icons/fa"
import { BsTrash } from "react-icons/bs"
import styles from "../../styles/cart.module.css"
import { useEffect, useState } from "react"

export default function Cart({ data }) {
    const[filteredData, setFilteredData] = useState(data)

    const router = useRouter();
    // console.log('Router', router.query.cart)

    function filtro(){
        const nft = filteredData.filter(nft => nft.name === router.query.cart)
        setFilteredData(nft)
    }

    useEffect(() => {
       filtro()
    },[])

    return(
        <div className={styles.container}>
            <div className={styles.bar}></div>
            
                <div className={styles.item}>
                <p id={styles.Title}>CART</p>
                    <div className={styles.containerItem}>
                        {
                            filteredData.map(nft => {
                                return(
                                    <>
                                      <Image alt="nft image" src={`/${nft.image}`} width={100} height={100} />
                    
                                    <div className={styles.describe}>
                                        <div className={styles.containerDescribe}>
                                            <p id="title-item">{nft.name}</p>
                                            <div className={styles.descValue}>
                                                <FaCoins size={15} color="gold" />
                                                <p>${nft.value}</p>
                                            </div>
                                        </div>

                                        <div className={styles.trash}>
                                            <input type="checkbox"></input>
                                            <BsTrash size={25} color="white" cursor="pointer" />
                                        </div>


                                        </div>
                                    </>
                                )
                            })
                        }
                      
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

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`http://localhost:3000/api/apinft`)
    const res = await fetch(`https://nft-shop-three.vercel.app/api/apinft`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
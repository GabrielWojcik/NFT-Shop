import styles from "../styles/shop.module.css"
import ShopCard from "../src/components/ShopCard/ShopCard";
import ShopTitle from "../src/components/ShopTitle/ShopTitle";

export default function Shop({ data }) {
    return(
        <div className={styles.container}>
           <ShopTitle />
           <ShopCard data={data}/>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://nft-shop-three.vercel.app/api/apinft`)
    const data = await res.json()
    return { props: { data } }
  }
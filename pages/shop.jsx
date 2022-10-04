import styles from "../styles/shop.module.css"
import ShopCard from "../src/components/ShopCard/ShopCard";
import ShopTitle from "../src/components/ShopTitle/ShopTitle";

export default function Shop() {
    return(
        <div className={styles.container}>
           <ShopTitle />
           <ShopCard />
           <ShopCard />
           <ShopCard />
           <ShopCard />
           <ShopCard />
           <ShopCard />
           <ShopCard />
           <ShopCard />
           <ShopCard />
        </div>
    )
}
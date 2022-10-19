import CarrouselGalery from "../src/components/Carousel-Galery/CarouselGalery";
import styles from "../styles/galery.module.css";
export default function galery({ data }) {
    return(
        <>
        <div className={styles.containerTitle}>
                <p id={styles.Title}>GALERY</p>
        </div>
        
        <div className={styles.containerCarousel}>
            <CarrouselGalery  data={data}/>
        </div>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/apinft`)
    const data = await res.json()
    return { props: { data } }
  }
// import { Carousel } from 'react-responsive-carousel';
import styles from "./Styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export default function CarrouselGalery({ data }){
    return(
        <div className={styles.containerCarousel}>
            <Carousel
             responsive={responsive}
             arrows={true}
             centerMode={true}
             infinite={true}
             draggable={false}
             removeArrowOnDeviceType={["tablet", "mobile"]}>
                  {
                    data.map(nft => {
                      return(
                        <div className={styles.cardCarousel} key={nft.id}>
                        <img alt="nft image" src={nft.image} width={350} height={300} />
                        </div>
                      )
                    })
                  }
            </Carousel>
        </div>
    )
}
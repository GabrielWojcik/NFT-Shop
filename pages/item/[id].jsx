import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "../../src/components/Modal/Modal";
import ShopItem from "../../src/components/ShopItem/ShopItem";
import ItemCard from "../../src/components/Item-Card/ItemCard";

export default function Item({ data }) {
    const[filteredData, setFilteredData] = useState(data)
    const[initialData, setInitialData] = useState(data)
    const[openModal, setOpenModal] = useState(false)
    const[imageActiveshop, setImageActiveShop] = useState()
    const[imageActiveModal, setImageActiveModal] = useState(false);

    const[imageMain, setImageMain] = useState();

    const router = useRouter()

    // console.log('NO ID', imageActiveshop)


    function filtro(){

        const nft = filteredData.filter(nft => nft.id === router.query.id)
        setImageMain(nft[0].image)
        setFilteredData(nft)
        console.log('nft', nft)
    }
    

    useEffect(() => {
        // if(imageActiveModal) {
        //     const nft = filteredData.filter(nft => nft.id === imageActiveshop.target["data-loaded-src"] )
        //     console.log('nft filtrado ->', nft)
        // }

        // console.log('IMAGEM MODAL', imageActiveModal)
        filtro()
    },[imageActiveModal])

    return(
        <div>
            <ItemCard />

            <ShopItem
            fotoPrincipal={imageMain}
            images={initialData}
            data={filteredData}
            openModal={() => setOpenModal(true)}
            setImageActiveShop={(e) => setImageActiveShop(e)}
            setImageActiveModal={() => setImageActiveModal(true)}

            />
            {
            
            openModal ?
                
                <Modal
                closeModal={() => setOpenModal(false)}
                imageActiveshop={imageActiveshop}
                imageActiveModal={imageActiveModal}
                data={filteredData}
                />
                :
                <></>

            }
        </div>
    )
}


export async function getServerSideProps() {
    const res = await fetch(`https://nft-shop-three.vercel.app/api/apinft`)
    const data = await res.json()
    return { 
        props: { data } 
    }
  }
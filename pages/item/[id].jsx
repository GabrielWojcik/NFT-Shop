import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "../../src/components/Modal/Modal";
import ShopItem from "../../src/components/ShopItem/ShopItem";

export default function Item({ data }) {
    const[filteredData, setFilteredData] = useState(data)
    const[initialData, setInitialData] = useState(data)
    const[openModal, setOpenModal] = useState(false)
    const[imageActiveshop, setImageActiveShop] = useState()
    const[imageActiveModal, setImageActiveModal] = useState(false);

    const router = useRouter()

    function filtro(){
        const data = filteredData.filter(nft => nft.id === router.query.id)
        setFilteredData(data)
    }
    

    useEffect(() => {
        filtro()
    },[])

    return(
        <div>
            <ShopItem
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
                />
                :
                <></>

            }
        </div>
    )
}


export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/apinft`)
    const data = await res.json()
    return { 
        props: { data } 
    }
  }
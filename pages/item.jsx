import { useEffect, useState } from "react";
import Modal from "../src/components/Modal/Modal";
import ShopItem from "../src/components/ShopItem/ShopItem";

export default function Item() {
    const[openModal, setOpenModal] = useState(false)
    const[imageActiveshop, setImageActiveShop] = useState()
    const[imageActiveModal, setImageActiveModal] = useState(false);
    
    return(
        <div>
            <ShopItem
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
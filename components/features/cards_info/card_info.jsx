import Image from 'next/image';
import Styles from '../cards_info/cards.module.scss';
import Modal from '../modal/card_modal';
import { useState } from 'react';

const CardsInfo = ({ title, text, image, reverse, buttonColor, obj_data}) => {

    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={`${Styles.container} ${reverse ? Styles.reverse : ''}`}>
            <div className={Styles.text}>

                <h1>
                    {title}
                </h1>
                <p>{text}</p>
                <button onClick={() => setOpenModal(true)} style={{ backgroundColor: buttonColor, color: "white" }}>
                    CLIQUE AQUI
                </button>

                <div>
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} obj_data={obj_data}/>

                </div>
            </div>

            <div className={Styles.image}>
                <Image src={image} width={350} height={350}  id='images'/>
            </div>
        </div>

    );
}

export default CardsInfo;
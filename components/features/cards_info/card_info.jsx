import Image from 'next/image';
import Styles from '../cards_info/cards.module.scss';
import Modal from '../modal/card_modal';
import { useState } from 'react';

const CardsInfo = ({ title, text, image, reverse, buttonColor }) => {

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
                    <Modal isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}/>
                        
                </div>
            </div>

            <div className={Styles.image}>
                <Image src={image} width={250} height={250} />
            </div>
        </div>

    );
}

export default CardsInfo;
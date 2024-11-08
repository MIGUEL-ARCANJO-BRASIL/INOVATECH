import Image from 'next/image';
import Styles from '../cards_info/cards.module.scss';
import Modal from '../modal/card_modal';
import { useState } from 'react';

const CardsInfo = ({ title, text, image, reverse, buttonColor, cardtitle, cardtext }) => {

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
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} text={cardtext} title={cardtitle} />

                </div>
            </div>

            <div className={Styles.image}>
                <Image src={image} width={350} height={350} minHeight={200} minWidth={200} />
            </div>
        </div>

    );
}

export default CardsInfo;
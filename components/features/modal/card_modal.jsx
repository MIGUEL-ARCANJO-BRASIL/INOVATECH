import React, { useState } from 'react'
import Styles from './card_modal.module.scss';
import { Pagination, Navigation } from 'swiper/modules';


import ModalInfos from './modal_infos';
import { Swiper, SwiperSlide } from 'swiper/react';

const Modal = ({ isOpen, setModalOpen, obj_data }) => {
    const [slidesPerView, setSlidePerView] = useState(1);
    const data = obj_data;


    return isOpen ? (
        <div className={Styles.backgroundStyle} onClick={() => setModalOpen(false)}>
            <div className={Styles.container} onClick={(e) => e.stopPropagation()}>

                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={slidesPerView}
                    navigation={true}
                    pagination={{clickable: true}}
                    
                    >
                    {
                        data.map((item) => (
                            <SwiperSlide key={item.title} >
                                <ModalInfos title={item.title} text={item.text} video={item.link} />

                            </SwiperSlide>
                        ))
                    }

                </Swiper>

                <div className={Styles.close}>
                    <button
                        onClick={setModalOpen}
                        style={{
                            height: '30px',
                            width: '30px',
                            backgroundColor: '#4CAF50',
                            color: 'black',
                            fontSize: '30px',
                            fontWeight: '100',
                            cursor: 'pointer',

                        }}
                    >
                        x
                    </button>
                </div>

            </div>
        </div>
    ) : null;


}

export default Modal;

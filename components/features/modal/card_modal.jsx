import React, { useState } from 'react'
import Styles from './card_modal.module.scss';
import { Pagination, Navigation } from 'swiper/modules';


import ModalInfos from './modal_infos';
import { Swiper, SwiperSlide } from 'swiper/react';
const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.4)',
    zIndex: '1000',

}

const Modal = ({ isOpen, setModalOpen, title, text }) => {
    const [slidesPerView, setSlidePerView] = useState(1);

    const data = [
        { id: 'O que é Lorem Ipsum?', image: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.', link : 'htts://youtube.com'},
        { id: 'De onde ele vem?', image: 'Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum,' },
        { id: 'Porque nós o usamos?', image: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível.' },
        { id: 'Onde posso conseguí-lo?', image: 'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes.' },
    ];


    return isOpen ? (
        <div style={BACKGROUND_STYLE} onClick={() => setModalOpen(false)}>
            <div className={Styles.container} onClick={(e) => e.stopPropagation()}>

                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={slidesPerView}
                    navigation={true}
                    pagination={{clickable: true}}
                    
                    >
                    {
                        data.map((item) => (
                            <SwiperSlide key={item.id} >
                                <ModalInfos title={item.id} text={item.image} video={item.link} />

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

import { Swiper } from "swiper/react";
import Styles from "./welcome.module.scss";

import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';

const Welcome = () => {
  const [slidesPerView, setSlidePerView] = useState(1);
  const data = [
    { id: '1', image: 'https://s5.static.brasilescola.uol.com.br/be/2024/05/tres-pessoas-carregando-caixas-com-materiais-para-reciclagem.jpg' },
    { id: '2', image: 'https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2020/02/11-scaled.jpg?resize=768%2C513&ssl=1' },
    { id: '3', image: 'https://www.piramidal.com.br/blog/wp-content/uploads/2019/08/shutterstock_742659751.jpg' },
    { id: '4', image: 'https://educasc.com.br/wp-content/uploads/2021/12/iStock-1323094421-1536x1024.webp' }
  ];

  return (
    <div className={Styles.container}>
      <div className={Styles.text}>
        <div className={Styles.msg} style={{ width: "60%" }}>
          <h1>Bem-vindo!</h1>
          <p>
            Inspire-se a viver de forma sustentável.
            Descubra dicas de reciclagem e ações simples para ajudar o meio ambiente.
          </p>
        </div>

        <div className={Styles.slider}>
          <Swiper
            modules={[Autoplay, Pagination, EffectCards]}
            effect="cards"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            slidesPerView={slidesPerView}
            
            pagination={{ clickable: true,  dynamicBullets: true}}


          >
            {
              data.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.image} alt="Slider" className="slide-item" style={{ width: '100%', height: '400px' }} />
                </SwiperSlide>
              ))
            }
          </Swiper>

        </div>


      </div>

    </div>
  );
};

export default Welcome;

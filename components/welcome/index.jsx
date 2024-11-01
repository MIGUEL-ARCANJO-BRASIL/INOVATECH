import { Swiper } from "swiper/react";
import Styles from "./welcome.module.scss";

import Image from "next/image";

import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';
import Environment from "/public/images/environment.svg";
import { useRouter } from 'next/router';

const Welcome = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("#features-section");
  };


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
        <div style={{ width: "60%" }}>
          <h1>Bem-vindo!</h1>
          <p>
            Inspire-se a viver de forma sustentável.
            Descubra dicas de reciclagem e ações simples para ajudar o meio ambiente.
          </p>
          <button onClick={handleRedirect}>
            Saiba Mais
          </button>
        </div>

        <div style={{ width: '22rem', marginLeft: '10rem' }}>
          <Image src={Environment} />
        </div>

      </div>

      <div className={Styles.slider}>
        <Swiper
          modules={[Autoplay, Navigation, EffectCards]}
          effect="cards"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          slidesPerView={slidesPerView}
          navigation={true}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {
            data.map((item) => (
              <SwiperSlide key={item.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={item.image} alt="Slider" className="slide-item" style={{ width: '90%', height: '38rem', }} />
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>
      <div className={Styles.separator}></div>
    </div>
  );
};

export default Welcome;

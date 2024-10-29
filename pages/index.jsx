"use client";
import { useRef } from "react";
import Features from "../components/features";
import Header from "../components/header";
import Welcome from "../components/welcome";
import styles from "./Home.module.scss";
import Arrow from "/public/images/arrow_down.png";
import Image from "next/image";
import Styles from "./Home.module.scss";
import AboutUs from "../components/about_us";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'

export default function Home() {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
     
      <button className={Styles.btn} onClick={scrollToFeatures} 
      style={{ display: "block", 
        margin: "3px  auto",
        border: "none",
        borderRadius: "10rem"
        }
      }>

        <Image src={Arrow} height={60} width={45}/>
      </button>
      <div ref={featuresRef}>
        <Features />
      </div>

      <AboutUs/>
    </div>
  );
}

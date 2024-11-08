
import Features from "../components/features";
import Header from "../components/header";
import Welcome from "../components/welcome";
import styles from "./Home.module.scss";

import AboutUs from "../components/about_us";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'
import Separator from "../components/auxiliars/separator";



export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
      <Welcome />

      <Separator />

      <Features />
      <Separator />

      <AboutUs />

    </div>
  );
}

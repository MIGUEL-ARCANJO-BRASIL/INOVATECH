
import Features from "../components/features";
import Header from "../components/header";
import Welcome from "../components/welcome";
import styles from "./Home.module.scss";

import AboutUs from "../components/about_us";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'



export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
      <Features />
      <AboutUs />
   
    </div>
  );
}

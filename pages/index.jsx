
import Features from "../components/features";
import Header from "../components/header";
import Welcome from "../components/welcome";
import Styles from "./Home.module.scss";

import AboutUs from "../components/about_us";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'
import Separator from "../components/auxiliars/separator";
import Maps from "../components/maps/index";
import Footer from "../components/footer";



export default function Home() {

  return (
    <div className={Styles.container}>
      <Header />
      <Welcome />
      <Maps/>
      <Separator />

      <Features />
      <Separator />

      <AboutUs />
      <Footer/>
    </div>
  );
}

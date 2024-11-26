import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Styles from "./header.module.scss";
import Button from "../button";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.menu}>
        <Link href="#maps-section">Pontos de Coleta</Link>
        <Link href="#features-section">Educação Ambiental</Link>
        <Link href="#about-us-section">Sobre</Link>
      </div>
    

    </div>
  );
};

export default Header;

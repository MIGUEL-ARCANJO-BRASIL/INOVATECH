import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Styles from "./header.module.scss";
import Button from "../button";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/">Pontos de Coleta</Link>
        <Link href="/">Sobre</Link>
      </div>
      <div className={Styles.logotipo}>
        <h1>Nome do App</h1>
      </div>

    </div>
  );
};

export default Header;

import Styles from "./welcome.module.scss";
import Logo from "/public/images/recicle_icon.png";
import Image from "next/image";

const Welcome = () => {
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

        <div style={{ padding: "5rem 10rem" }}>
          <Image src={Logo} width={200} height={200} />
        </div>

      </div>

    </div>
  );
};

export default Welcome;

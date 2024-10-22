import Styles from "./features.module.scss";
import Image from "next/image";
import RecicleImage from "/public/images/recicle_icon.png";
import TrashImage from "/public/images/recycle-bin.png";
import PlasticImage from "/public/images/plastic.png";
const Features = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.containerInfo1}>
                <div className={Styles.text1}>
                    <h1>
                        IMPORTÂNCIA
                        DA RECICLAGEM
                    </h1>
                    <p>Reciclar ajuda a reduzir a quantidade de lixo nos aterros e conserva recursos naturais.
                        Pequenas ações, como separar o lixo, podem ter um grande impacto no meio ambiente.</p>
                    <button>
                        CLIQUE AQUI
                    </button>

                </div>

                <div className={Styles.image1}>
                    <Image src={RecicleImage} width={250} height={250} />
                </div>
            </div>

            <div className={Styles.containerInfo2}>
                <div className={Styles.text2}>

                    <h1>
                        REDUÇÃO DO DESPERDÍCIO
                    </h1>
                    <p>Cada item que jogamos fora é um recurso desperdiçado.
                        Reduzir, reutilizar e reciclar são maneiras eficazes de minimizar o desperdício e preservar o planeta.</p>
                    <button style={{ background: "#DE5E96" }}>
                        CLIQUE AQUI
                    </button>

                </div>

                <div className={Styles.image2}>
                    <Image src={TrashImage} width={250} height={250} />
                </div>
            </div>


            <div className={Styles.containerInfo3}>
                <div className={Styles.text3}>
                    <h1>
                        O PLÁSTICO NO AMBIENTE
                    </h1>
                    <p>O plástico demora centenas de anos para se decompor.
                        Substituir itens descartáveis por alternativas reutilizáveis é uma forma de reduzir o impacto no meio ambiente.</p>
                    <button style={{ background: "#FF525D" }}>
                        CLIQUE AQUI
                    </button>
                </div>

                <div className={Styles.image3}>
                    <Image src={PlasticImage} width={250} height={250} />
                </div>
            </div>
        </div>
    );
}

export default Features;
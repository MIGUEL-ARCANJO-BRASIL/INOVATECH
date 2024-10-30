import Styles from "./features.module.scss";

import RecicleImage from "/public/images/recicle_icon.png";
import TrashImage from "/public/images/recycle-bin.png";
import PlasticImage from "/public/images/plastic.png";
import CardsInfo from "./cards_info/card_info";



const Features = () => {
    return (
        <div className={Styles.container} id="features-section" >

            <CardsInfo title={"IMPORTÂNCIA DA RECICLAGEM"}
                text={"Reciclar ajuda a reduzir a quantidade de lixo nos aterros e conserva recursos naturais. Pequenas ações, como separar o lixo, podem ter um grande impacto no meio ambiente."}
                image={RecicleImage}
                buttonColor="#388E3C"
            />

            <CardsInfo title={"REDUÇÃO DO DESPERDÍCIO"}
                text={"Cada item que jogamos fora é um recurso desperdiçado." +
                    " Reduzir, reutilizar e reciclar são maneiras eficazes de minimizar o desperdício e preservar o planeta."}
                image={TrashImage}
                reverse={true}
                buttonColor="#DE5E96"
            />

            <CardsInfo title={"O PLÁSTICO NO AMBIENTE"}
                text={"O plástico demora centenas de anos para se decompor." +
                    " Substituir itens descartáveis por alternativas reutilizáveis é uma forma de reduzir o impacto no meio ambiente."}
                image={PlasticImage}
                buttonColor="#FF525D"
            />
        </div>
    );
}

export default Features;
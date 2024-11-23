import Styles from "./features.module.scss";

import RecicleImage from "/public/images/recicle_icon.png";
import TrashImage from "/public/images/recycle-bin.png";
import PlasticImage from "/public/images/plastic.png";
import GarbageImage from "/public/images/garbage.png";
import CardsInfo from "./cards_info/card_info";
import { I_RECICLAGEM, PLASTIC_MAR_TERRA, PLASTICO_AMBIENTE, R_DESPERDICIO } from "./auxiliar/data";


const Features = () => {
    return (
        <div className={Styles.container} id="features-section" >

            <CardsInfo title={"IMPORTÂNCIA DA RECICLAGEM"}
                text={"Reciclar ajuda a reduzir a quantidade de lixo nos aterros e conserva recursos naturais. Pequenas ações, como separar o lixo, podem ter um grande impacto no meio ambiente."}
                image={RecicleImage}
                buttonColor="#388E3C"
                obj_data={I_RECICLAGEM}
            />

            <CardsInfo title={"REDUÇÃO DO DESPERDÍCIO"}
                text={"Cada item que jogamos fora é um recurso desperdiçado." +
                    " Reduzir, reutilizar e reciclar são maneiras eficazes de minimizar o desperdício e preservar o planeta."}
                image={TrashImage}
                reverse={true}
                buttonColor="#DE5E96"

                obj_data={R_DESPERDICIO}
            />

            <CardsInfo title={"O PLÁSTICO NO AMBIENTE"}
                text={"O plástico demora centenas de anos para se decompor." +
                    " Substituir itens descartáveis por alternativas reutilizáveis é uma forma de reduzir o impacto no meio ambiente."}
                image={PlasticImage}
                buttonColor="#FF525D"

                obj_data={PLASTIC_MAR_TERRA}

            />

            <CardsInfo title={"ILHAS DE PLÁSTICO"}
                text={"Para evitar ilhas de plástico, reduza o uso de plásticos descartáveis, recicle corretamente e opte por alternativas sustentáveis. Pequenas atitudes fazem grande diferença!"}
                image={GarbageImage}
                reverse={true}
                buttonColor="#DE5E96"
                obj_data={PLASTICO_AMBIENTE}
            />

        </div>
    );
}

export default Features;
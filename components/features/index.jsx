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
                cardtitle={"IMPORTÂNCIA DA RECICLAGEM"}
                cardtext={"Separar o lixo reciclável é uma ação simples que qualquer pessoa pode fazer e que gera um impacto positivo no nosso planeta. Quer saber mais sobre como você pode contribuir para um futuro mais sustentável?"}
            />

            <CardsInfo title={"REDUÇÃO DO DESPERDÍCIO"}
                text={"Cada item que jogamos fora é um recurso desperdiçado." +
                    " Reduzir, reutilizar e reciclar são maneiras eficazes de minimizar o desperdício e preservar o planeta."}
                image={TrashImage}
                reverse={true}
                buttonColor="#DE5E96"
                cardtitle={"Redução do Desperdício"}
                cardtext={"Cada item descartado representa uma oportunidade de reaproveitamento que foi desperdiçada. Adotar práticas como reduzir o consumo, reutilizar materiais e reciclar são passos essenciais para minimizar o desperdício e preservar os recursos do planeta. Pequenas atitudes fazem a diferença!"}

            />

            <CardsInfo title={"O PLÁSTICO NO AMBIENTE"}
                text={"O plástico demora centenas de anos para se decompor." +
                    " Substituir itens descartáveis por alternativas reutilizáveis é uma forma de reduzir o impacto no meio ambiente."}
                image={PlasticImage}
                buttonColor="#FF525D"
                cardtitle={"O Plástico no Ambiente"}
                cardtext={"O plástico descartado no meio ambiente pode levar séculos para se decompor, causando danos prolongados aos ecossistemas. Substituir itens descartáveis por alternativas reutilizáveis é uma forma simples e eficaz de reduzir esse impacto. Cada escolha faz a diferença para o futuro do planeta!"}
                
            />
        </div>
    );
}

export default Features;
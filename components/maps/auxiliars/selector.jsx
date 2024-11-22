import Image from "next/image";
import { ADRIANOPOLIS, ALEIXO, CACHOEIRINHA, CIDADE_NOVA, DOM_PEDRO, FLORES, JAPIIM, MANOA, NOVO_ALEIXO, PONTA_NEGRA, PONTOS_PQ_10, PRACA_14, SAO_JOSE, VIEIRALVES } from "./pontos";
import Styles from "./selector.module.scss";
import { useState } from "react";
import Maps from "/public/images/maps.png";

export default function Selector() {

    const [selectedBairro, setSelectedBairro] = useState("");
    const [linhas, setLinhas] = useState();

    const options = [

        { value: "cidade_nova", label: "Cidade Nova", obj: CIDADE_NOVA },
        { value: "parque_dez", label: "Parque Dez de Novembro", obj: PONTOS_PQ_10 },
        { value: "flores", label: "Flores", obj: FLORES },
        { value: "novo_aleixo", label: "Novo Aleixo", obj: NOVO_ALEIXO },
        { value: "adrianopolis", label: "Adrianópolis", obj: ADRIANOPOLIS },
        { value: "japiim", label: "Japiim", obj: JAPIIM },
        { value: "aleixo", label: "Aleixo", obj: ALEIXO },
        { value: "sao_jose_op", label: "São José Operário", obj: SAO_JOSE },
        { value: "dom_pedro", label: "Dom Pedro", obj: DOM_PEDRO },
        { value: "vieiralves", label: "Vieiralves", obj: VIEIRALVES },
        { value: "cachoeirinha", label: "Cachoeirinha", obj: CACHOEIRINHA },
        { value: "mano", label: "Manoa", obj: MANOA },
        { value: "ponta_negra", label: "Ponta Negra", obj: PONTA_NEGRA },
        { value: "praca", label: "Praça 14", obj: PRACA_14 },

    ];
    const bairroInfo = options.find((bairro) => bairro.value === selectedBairro);

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedBairro(value);
        console.log("Selecionado:", value);
    };

    return (
        <div className={Styles.container}>
            <div>
                <h1 >Pontos de Coleta (Manaus- Am)</h1>
                <select className={Styles.customSelect}
                    value={selectedBairro}
                    onChange={handleChange}
                    style={{ overflowY: "scroll" }} >

                    <option value="">Selecione um bairro</option>

                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {bairroInfo && (
                    <div className={Styles.infoBox}>
                        <h2 className={Styles.infoTitle}>Pontos de Coleta no Bairro:</h2>
                        <ul>
                            {bairroInfo.obj.map((ponto, index) => (
                                <li key={index}>
                                    <p >{ponto.endereco}</p>
                                    <a href={ponto.link} target="_blank" rel="noopener noreferrer">
                                        Ver no Google Maps
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>

            <div className={Styles.image}>
                <Image src={Maps} />
            </div>

        </div >
    );
};

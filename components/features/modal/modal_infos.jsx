import Styles from "./modal_infos.module.scss";
import Image from "next/image";
import YoutubeIcon from "/public/images/youtube.png";
import InternetIcon from "/public/images/rede.png";

const ModalInfos = ({ title, text, video }) => {
    return (

        <div className={Styles.containertext}>

            <h1>{title}</h1>
            <p style={{ marginBottom: '0'}}>{text}</p>

            <div style={{marginTop: '1.25rem', marginBottom: '1.25rem'}}>
                <p>Clique no vídeo e assista a uma explicação rápida ou acesse mais informações detalhadas!</p>
            </div>
            
            <div style={{
                display: 'flex',
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    width: '30%',
                }}>
                    <div style={{
                        width: '30px',
                        height: '30px',

                        marginRight: '10px'
                    }} >
                        <Image src={YoutubeIcon} height={30} />

                    </div>

                    <div style={{

                    }}>
                        <p style={{
                            fontSize: '15px',
                            fontWeight: 'bold',
                            marginTop: '5px'
                        }}>Youtube</p>

                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: '100%',
                }}>
                    <div style={{
                        display: 'flex',
                        width: '30%',
                    }}>
                        <div style={{
                            width: '30px',
                            height: '30px',

                            marginRight: '10px'
                        }}

                        >

                            <Image src={InternetIcon} height={30} />

                        </div>

                        <div style={{

                        }}>
                            <p style={{
                                fontSize: '15px',
                                fontWeight: 'bold',
                                marginTop: '5px'
                            }}>Site</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default ModalInfos
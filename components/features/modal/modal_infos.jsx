import Styles from "./modal_infos.module.scss";
const ModalInfos = ({ title, text, video }) => {
    return (

        <div className={Styles.containertext}>

            <h1 style={{marginBottom: '0', width: '100%'}}>{title}</h1>
            <p style={{ marginTop: '0'}}>{text}</p>

        </div>

    );

}

export default ModalInfos
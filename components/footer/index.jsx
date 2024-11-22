import Image from "next/image";
import Styles from "./footer.module.scss";
import Fametro from "/public/images/fametro.svg";
import FlatIcon from "/public/images/flatIcon1.png";

export default function Footer() {
    return (
        <div className={Styles.container}>
            <div className={Styles.containerImages}>
                <div className={Styles.logoFametro}>
                    <Image src={Fametro} />
                </div>
                <div className={Styles.flatIcon}>
                    <Image src={FlatIcon} />
                </div>
            </div>
        </div>
    );
};
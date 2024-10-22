import Image from "next/image";
import Styles from "./about.module.scss";
import PeopleImage from "/public/images/people.png";

const AboutUs = () =>{
    return (
        <div className = {Styles.container}>
            <div className= {Styles.mensage}>
                <h1>SOBRE NÓS</h1>
                <p>Este site foi criado como parte de um projeto acadêmico da Fametro, com a missão de promover a reciclagem e a sustentabilidade. 
                    Queremos inspirar práticas conscientes para reduzir o impacto ambiental e incentivar um estilo de vida mais responsável.
                     Acreditamos que, juntos, podemos fazer a diferença e contribuir para um futuro mais sustentável. Participe dessa jornada com a gente!</p>
            </div>
            <div className={Styles.image}>
                <Image src={PeopleImage}/>
            </div>
        </div>
    ); 
}

export default AboutUs;
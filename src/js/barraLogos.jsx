import { Link } from "react-router-dom";
import LogoEPN from "/img/logos/LogoEPN.png";
import LogoLudolab from "/img/logos/LogoLudolab.png";
import LogoFIS from "/img/logos/LogoFIS.png";
import '../css/sonido.css';

function BarraLogos() {


    return (
        <div className="barraLogos">
        <Link
          to="https://www.epn.edu.ec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={LogoEPN} alt="Logo EPN" />
        </Link>
        <Link
          to="https://ludolab.epn.edu.ec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={LogoLudolab} alt="Logo Ludolab" />
        </Link>
        <Link
          to="https://fis.epn.edu.ec/index.php/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={LogoFIS} alt="Logo FIS" />
        </Link>
      </div>
    );
}

export default BarraLogos;
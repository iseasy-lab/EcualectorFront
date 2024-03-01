import { useState } from 'react';
import '../css/sonido.css';
import useSound from "use-sound";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";
import InstruccionSeleccionaLaRespuesta from "../../public/audios/instrucciones/InstruccionSeleccionaLaRespuesta.mp3";
import InstruccionArrastrarYSoltar from "../../public/audios/instrucciones/InstruccionArrastrarYSoltar.mp3";
import InstruccionEncuentraElPersonaje from "../../public/audios/instrucciones/InstruccionEncuentraElPersonaje.mp3";
import InstruccionOrdenaLosEventos from "../../public/audios/instrucciones/InstruccionOrdenaLosEventos.mp3";
import InstruccionCausaEfecto from "../../public/audios/instrucciones/InstruccionCausaEfecto.mp3";


function Sonido() {
    const [muted, setMuted] = useState(false);
    const [reproducirBoton] = useSound(SonidoBoton);

    let audioSeleccionado;
    switch (sessionStorage.getItem('tipoJuego')) {
        case 'Sabia decisión':
            audioSeleccionado = InstruccionSeleccionaLaRespuesta;
            break;
        case 'Suelta la respuesta':
            audioSeleccionado = InstruccionArrastrarYSoltar;
            break;
        case '¿Quién es quién?':
            audioSeleccionado = InstruccionEncuentraElPersonaje;
            break;
        case '¿Qué pasó primero?':
            audioSeleccionado = InstruccionOrdenaLosEventos;
            break;
        case '¿Qué pasaría si...?':
            audioSeleccionado = InstruccionCausaEfecto;
            break;
        default:
            audioSeleccionado = InstruccionSeleccionaLaRespuesta;
    }

    const [reproducirInstruccion, { stop, isPlaying }] = useSound(audioSeleccionado);

    const silenciar = () => {
        setMuted(!muted);

        if (!muted && !isPlaying) {
            // If not muted and not playing, play the instruction sound
            reproducirInstruccion();
        } else {
            // Otherwise, stop the instruction sound
            stop();
        }
    };

    return (
        <div className="botonSonido" onClick={silenciar} onMouseEnter={reproducirBoton}>
            {muted ? (
                <i className="bi bi-volume-up-fill"></i>
            ) : (
                <i className="bi bi-volume-mute-fill"></i>
            )}
        </div>
    );
}

export default Sonido;
import { useState } from 'react';
import '../css/sonido.css';

function Sonido() {
    const [muted, setMuted] = useState(false);

    const silenciar = () => {
        setMuted(!muted);
    };

    return (
        <div className="botonSonido">
            {muted ? (
                <i className="bi bi-volume-mute-fill" onClick={silenciar}></i>
            ) : (
                <i className="bi bi-volume-up-fill" onClick={silenciar}></i>
            )}
        </div>
    );
}

export default Sonido;
import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brainIcon.png'
import './Logo.css'

function Logo() {
    return(
        <div className="ma4 mt0">
            <Tilt className="Tild br2 shadow-2" options={{ max : 25 }} style={{ height: '150px', width: '150px' }}>
                <div className="Tild-inner pa3">
                    <img style={{paddingTop: '15px'}} src={brain} alt="Brain"/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
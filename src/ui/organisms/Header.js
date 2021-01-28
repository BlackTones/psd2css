import React from 'react';
import Image from '../atoms/Image';
import Logo from '../images/logox1.png';
import LogoRetina from '../images/logox2.png';

function Header() {
    return (
        <header className="header">
            <Image simple={Logo} retina={LogoRetina} className="header__logo" alt="logo" />
        </header>
    )
}

export default Header;
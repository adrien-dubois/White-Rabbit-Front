import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

  return (
    <>
        <IconContext.Provider value={{ color: '{var--white-color}' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                        <NavIcon width={50} height={50} fill="var(--white-color)"/>
                        <h1 className="text-gradient">
                            WHITE <span> RABBIT</span>
                        </h1>
                    </NavLogo>

                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/> }
                    </MobileIcon>

                    <NavMenu onClick={handleClick} click={click}>

                        <NavItem>
                            <NavLinks to='/'>
                                Accueil
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/'>
                                Inscription
                            </NavLinks>
                        </NavItem>

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/'>
                                    <Button primary>
                                        Connexion
                                    </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/'>
                                    <Button fontBig primary>
                                        Connexion
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>

                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
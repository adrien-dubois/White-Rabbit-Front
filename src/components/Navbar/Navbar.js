import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib';
import { Link } from "react-router-dom";
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
    NavBtnLink,
    Dropdown
} from './Navbar.elements';

const Navbar = () => {

    /*----- NAVBAR PART -----*/
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

    /*----- DROPDOWN PART -----*/
    const [userMenu, setUserMenu] = useState(false);
    const handleMenu = () => setUserMenu(!userMenu);

    const user = null;

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

                        {user ? (

                        // DROPDOWN USER MENU
                        <>
                            <IconContext.Provider value={{ color: 'var(--black-color)', size: '20px'}} >
                            <Dropdown>
                                <div className="profile" onClick={handleMenu}>
                                    <img src={user.picture} alt={user.name} />
                                </div>
                                <div className={userMenu ? 'menu active' : 'menu'}>
                                    <h3>{user.name}</h3>
                                    <ul>
                                        <li>
                                            <Link to='/'>
                                                <button>
                                                    <FaUser/>Profil
                                                </button>
                                            </Link>
                                        </li>

                                        <li>
                                            <button>
                                                <FaUser/>Autre
                                            </button>
                                        </li>

                                        <li>
                                            <button>
                                                <BiLogOut/>Déconnexion
                                            </button>
                                        </li>
                                    </ul>                                    
                                </div>
                            </Dropdown>
                            </IconContext.Provider>
                        </>
                        ) : (
                            
                            // NOT CONNECTED USER MENU
                        <>
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
                        </>
                        )}

                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib';
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    Dropdown,
} from './Navbar.elements';
import { useDispatch } from "react-redux";

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
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

    /*----- AUTH USER PART -----*/
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        navigate('/');

        setUser(null);
    }

    // console.log(user);

    useEffect(() => {
        const token = user?.token;

        // JWT ...

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

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
                            <NavLinks to='/articles'>
                                Tips
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/'>
                                Chat
                            </NavLinks>
                        </NavItem>

                        {user ? (

                        // DROPDOWN USER MENU
                        <>
                            <IconContext.Provider value={{ color: 'var(--black-color)', size: '20px'}} >
                            <Dropdown>
                                <div className="profile" onClick={handleMenu}>
                                    <img 
                                        src={user?.result.imageUrl} 
                                        alt={user.result.name}
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <div className={userMenu ? 'menu active' : 'menu'}>
                                    <h3>{user.result.name}</h3>
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
                                            <button onClick={logout} >
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
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/auth'>
                                        <Button primary>
                                            Connexion
                                        </Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/auth'>
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
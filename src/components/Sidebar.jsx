import React, { useState } from "react";
import {FaBars, FaTh, FaUserAlt} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import dibujo from '../extras/dibujo.png';
import creador from '../extras/creador.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faGamepad, faHippo, faMusic  } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItems =[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/creador",
            name:"Creador",
            icon:<FaUserAlt/>
        },
        {
            path:"/anime",
            name:"Anime",
            icon:<FontAwesomeIcon icon={faAppleAlt}/>
        },
        {
            path:"/musica",
            name:"Musica",
            icon:<FontAwesomeIcon icon={faMusic}/>
        },
        {
            path:"/juego",
            name:"Juegos",
            icon: <FontAwesomeIcon icon={faGamepad}/>
        },
        {
            path:"/proximamente",
            name:"Proximamente",
            icon:<FontAwesomeIcon icon={faHippo}/>
        }
    ]
    return(
        <div>
            <div className="activador">
                <FaBars onClick={toggle}/>
            </div>
            <div className="subtitulo">
                <h4 className="sub">Este programa fue hecho por Douglas Matias Coronado Ortiz</h4>
            </div>
            <div style={{width: isOpen ? "250px" : "50px", zIndex:1}} className="bar">
                <div className="top_section">
                    <div className="creador">
                        <img src={creador} style={{width: isOpen ? "40mm" : "0px",height: isOpen ? "40mm" : "0px" , zIndex:1}} className="logotipo" id="creador-img" />
                    </div>
                </div>
                {
                    menuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar;
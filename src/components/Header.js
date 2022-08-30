import { useState } from "react";
import {Link} from 'react-router-dom';
import '../styles/Header.css';

const Header = (props) =>{

    const [activeNav, setActiveNav] = useState(false);

    function handleChangeNav(){
        setActiveNav(!activeNav);
    }

    function listNav(){
        const pathname = window.location.pathname;
        const style = "active-li-header";
        
        return(
            <ul>
                <li className={pathname === "/" ? style : null}><Link to="/" onClick={()=>props.changeBackground('section-home')}><span>00</span> HOME</Link></li>
                <li className={pathname === "/destination" ? style: null}><Link to="/destination" onClick={()=>props.changeBackground('section-destination')}><span>01</span> DESTINATION</Link></li>
                <li className={pathname === "/crew" ? style : null}><Link to="/crew "onClick={()=>props.changeBackground('section-crew')}><span>02</span> CREW</Link> </li>
                <li className={pathname === "/technology" ? style : null}><Link to="technology"onClick={()=>props.changeBackground('section-technology')}><span>03</span> TECHNOLOGY</Link> </li>
            </ul>
        )
    }

    return(
        <header className="header">
            <div className="logo-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fillRule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF"/>
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                    </g>
                </svg>
            </div>
            <svg onClick={handleChangeNav} className="icon-hamburguer" xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fillRule="evenodd">
                    <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
                </g>
            </svg>
            <div className="header-nav">
                <div className="line-header">
                    <label></label>
                </div>
                <nav className="nav-desk">
                    {listNav()}
                </nav>
            </div>
            
            
            {activeNav ? 
            <nav className="nav-mobile">
                <div className="close-nav-mobile">
                    <svg onClick={handleChangeNav} xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                        <g fill="#D0D6F9" fillRule="evenodd">
                            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
                        </g>
                    </svg>
                </div>

                {listNav()}
            </nav>
            : null}
        </header>
    )
}

export default Header;
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'


export default function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='nav-container'>                
                <div className="nav-bar phone-only-flex">
                    <button onClick={()=> setOpen(!open)}>=</button>
                </div>
                {open?
                    <div className="open-nav-container phone-only-flex">
                        <div onClick={()=> setOpen(!open)} className="backdrop"></div>
                        <div className="open-nav-content-container">
                            <Link  href="#first-section">
                                <a onClick={()=> setOpen(!open)} className="open-nav-menu">Menu</a>
                            </Link>
                            <p className="open-nav-menu-text">________________________</p>
                            <div className="link-container"> 
                                <Link href="#second-section">
                                    <a className="open-nav-menu-text">About</a>
                                </Link>
                                
                                <Link href="#third-section">
                                    <a className="open-nav-menu-text">Sec2</a>
                                </Link>
                                
                                <Link href="#fourth-section">
                                    <a className="open-nav-menu-text">Team</a>
                                </Link>
                            
                                <Link href="#fifth-section">
                                    <a className="open-nav-menu-text">Mint</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                :null}



                <div className="desktop-only-flex nav-bar">
                </div>
                    <div className="open-nav-container desktop-only-flex">
                        <div className="open-nav-content-container">
                            <div className="open-nav-menu">
                                <Image src="/../public/logo.png" alt="Web 3 Project Logo" width="188" height="48" />
                            </div>
                            <Link href="#second-section">
                                <a className="open-nav-menu-text">About</a>
                            </Link>
                            <Link href="#third-section">
                                <a className="open-nav-menu-text">Sec2</a>
                            </Link>
                            <Link href="#fourth-section">
                                <a className="open-nav-menu-text">Team</a>
                            </Link>
                            <Link href="#fifth-section">
                                <a className="open-nav-menu-text">Mint</a>
                            </Link>
                        </div>
                    </div>

            </div>
            <style jsx>{`
                @import 'styles/global-vars';
                @import 'styles/media-queries';
                // All Devices Styles Start
                    .desktop-only {
                            display: none;
                    }
                    .mobile-only {
                        display: none;
                    }
                // All Devices Styles End
                @include media-query-phone {
                    
                    .open-nav-container {
                        position: fixed;
                        top: 0;
                        height: 100vh;
                        width: 100vw;

                        .backdrop {
                            background-color: #c4c4c4;
                            position: absolute;
                            height: 100%;
                            width: 100%;
                            z-index: 1;
                            opacity: .7;
                        }
                        .open-nav-content-container {
                            position: absolute;
                            z-index: 2;
                            right: 0;
                            height: 100%;
                            width: 250px;
                            background-color: #ffffff;
                            
                            .link-container{
                                display: flex;
                                flex-direction: column;
                                
                            }
                        }
                        .open-nav-menu{
                                padding-left: 20px;
                                color: black;
                                font-family: 'Inter';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 17px;
                                line-height: 21px;
                            }
                        
                            .open-nav-menu-text{
                                padding-left: 20px;
                                color: #808080;
                                font-family: 'Inter';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 17px;
                                line-height: 21px;
                                margin-top: 20px;
                                &:nth-of-type(1){
                                    margin-top: 0px;
                                }
                            }
                    }
                }
                @include media-query-desktop {
                    
                    .open-nav-container {
                        
                        .backdrop {
                           
                        }
                        .open-nav-content-container {
                            display:flex;
                            justify-content:end;
                            width: 100%;
                            background-color: white;
                            padding: 10px;
                            padding-right: 105px;

                        }
                            .open-nav-menu{
                                margin-right:auto;
                                margin-left:0;
                                padding-left: 71px;
                                padding-top: 30px;
                                padding-bottom: 10px;
                            }
                        
                            .open-nav-menu-text{
                               padding-right: 20px;
                               padding-top: 39px;
                               font-size: 18px;
                               font-weight: bold;
                            }
                        }
                    }
            `}</style>
        </>
    )
}
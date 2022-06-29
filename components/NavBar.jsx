import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import IconClose from "./icons/mobileNavToggle/IconClose";
import IconOpen from "./icons/mobileNavToggle/IconOpen";


export default function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='nav-container'>                
                <div className="nav-bar phone-only-flex">
                    <Image src="/../public/logo.png" alt="Web 3 Project Logo"
                    width="120px" height="55px" layout="fixed" />
                    <IconOpen onClick={()=>setOpen(true)} size="32px" additionalStyles={`
                        position: absolute;
                        right: 30px;
                    `} />
                </div>
                {open?
                    <div className="open-nav-container phone-only-flex">
                        <div onClick={()=> setOpen(!open)} className="backdrop"></div>
                        <div className="open-nav-content-container">
                            <Link href="#">
                                <a className="open-nav-menu title">Menu</a>
                            </Link>
                            <hr/>
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
            <style jsx global>{`
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
                    .nav-container {
                        width: 100vw;
                        top: 0;
                        position: fixed;
                    }
                    .nav-bar {
                        flex-direction: row;
                        align-items: center;
                        background-color: #e8e8e8;
                        padding-left: 30px;
                        padding-right: 30px;
                        position: relative;
                        height: 65px;
                        .phone-img {
                            height: 30px;
                        }
                    }
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
                            width: 77vw;
                            background-color: #ffffff;
                            padding-top: 60px;
                            padding-left: 35px;
                            padding-right: 35px;
                            hr {
                                border-color: #000000;
                                padding: 0;
                                margin-top: 5px;
                                margin-bottom: 12px;
                                border-top: 0;
                                border-left: 0;
                                border-right: 0;
                                border-bottom: 1.5spx solid #000;
                            }
                            .link-container{
                                display: flex;
                                flex-direction: column;
                                
                            }
                        }
                        .open-nav-menu {
                            color: black;
                            font-family: 'Inter';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 17px;
                            line-height: 21px;
                            &.title {
                                margin-top: 40px;
                            }
                        }
                        
                            .open-nav-menu-text{
                                color: #b3b2b2;
                                font-family: 'Inter';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 17px;
                                line-height: 21px;
                                margin-top: 8px;
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
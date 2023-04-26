import Link from "next/link";
import { IoMdMenu, IoIosClose } from 'react-icons/io';

const Header = () => {
    const openMenuMobile = () => {
        const menuMobile = document.querySelector(".menu-mobile")
        menuMobile.style.transition = ".3s"
        menuMobile.style.transform = "translateX(0)"
    }
    const closeMenuMobile = () => {
        const menuMobile = document.querySelector(".menu-mobile")
        menuMobile.style.transition = ".3s"
        menuMobile.style.transform = "translateX(100%)"
    }
    return (
        <>
        <nav className="menu-desktop">
            <ul>
                <li><Link href={"/"}>Página Inicial</Link></li>|
                <li><Link href={"/portfolio"}>Portfólio</Link></li>|
                <li><Link href={"/arquiteto"}>Arquiteto</Link></li>|
                <li><Link href={"/orcamento"}>Orçamento</Link></li>|
                <li><Link href={"/"}>Instagram</Link></li>
            </ul>
        <div className="icon-menu" onClick={openMenuMobile} style={{
            fontSize:"3rem",
            color: "white",
            cursor: "pointer"
        }}><IoMdMenu /></div>
        </nav>
        <nav className="menu-mobile">
            <div className="close-button" onClick={closeMenuMobile}><IoIosClose /></div>
            <ul>
                <Link href={"/"}><li>Página Inicial</li></Link>
                <Link href={"/portfolio"}><li>Portfólio</li></Link>
                <Link href={"/arquiteto"}><li>Arquiteto</li></Link>
                <Link href={"/orcamento"}><li>Orçamento</li></Link>
                <Link href={"/"}><li>Instagram</li></Link>
            </ul>
        </nav>
        </>
    )
}

export default Header;
import Image from "next/image";
import logo from "../../../public/images/logo_arquitetura.png";
import Header from "./Header";

const Navigation = () => {
    return(
        <>
        <div className="flex-navigation">
            <Image src={logo} width="100"/>
            <Header />
        </div>
        </>
    )
}

export default Navigation;
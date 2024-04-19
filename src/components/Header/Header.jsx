import Logo from "../Logo/Logo";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderService from "../HeaderService/HeaderService";
import style from "./header.module.css"

export default function Header() {
    return (
        <div className={style.header}>
            <Logo />
            <HeaderNav />
            <HeaderService />
        </div>
    );
}
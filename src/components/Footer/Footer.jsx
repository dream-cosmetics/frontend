import style from "./footer.module.css";
import FooterSocials from "../FooterSocials/FooterSocials";
import FooterMain from "../FooterMain/FooterMain";
import Copyright from "../Copyright/Copyright";

export default function Footer() {
    return (
        <div className={style.footer}>
            <FooterSocials />
            <FooterMain />
            <Copyright />
        </div>
    );
}

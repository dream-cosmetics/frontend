import style from "./footerMain.module.css"

import Logo from "../Logo/Logo";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

import {
    MailOutlineOutlined,
    LocalPhoneOutlined,
    LocationOnOutlined,
} from "@mui/icons-material";

import Link from "next/link";

export default function FooterMain(){
    return (
        <div className="container">
            <div className={style.footerInfo}>
                <div className={style.contactsInfo}>
                    <Logo />
                    <div className={style.slogan}>
                        Discover nature's beauty with our natural care products.
                    </div>
                    <div className={style.contacts}>
                        <span>
                            <LocalPhoneOutlined
                                fontSize="inherit"
                                sx={{ color: "var(--primaryPink)" }}
                            />
                            <Link href={"tel:+38 050 123 45 67"}>
                                +38 050 123 45 67
                            </Link>
                        </span>
                        <span>
                            <MailOutlineOutlined
                                fontSize="inherit"
                                sx={{ color: "var(--primaryPink)" }}
                            />
                            <Link href="mailto:dream-cosmetics@gmail.com">
                                dream-cosmetics@gmail.com
                            </Link>
                        </span>
                        <span>
                            <LocationOnOutlined
                                fontSize="inherit"
                                sx={{ color: "var(--primaryPink)" }}
                            />
                            Kyiv, Ukraine
                        </span>
                    </div>
                </div>
                <nav id={style.footerMenu}>
                    <div className={style.menu}>
                        <ul>
                            <div className={style.menuTitle}>help</div>
                            <li>
                                <Link href={"/"}>Contact Us</Link>
                            </li>
                            <li>
                                <Link href={"/"}>FAQ</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Shopping & Returns</Link>
                            </li>
                        </ul>
                        <ul>
                            <div className={style.menuTitle}>my account</div>
                            <li>
                                <Link href={"/"}>Addresses</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Order Status</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Wishlist</Link>
                            </li>
                        </ul>
                        <ul>
                            <div className={style.menuTitle}>customer care</div>
                            <li>
                                <Link href={"/"}>About Us</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={style.subscribe}>
                    <div className={style.subscribeTitle}>SIGN UP FOR EMAILS</div>
                    <div className={style.subscribeSlogan}>Stay informed, subscribe to our newsletter now!</div>
                    <SubscribeForm />
                </div>
            </div>
        </div>
    );
}
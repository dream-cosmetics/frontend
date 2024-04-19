import Link from "next/link";

import style from "./headerNav.module.css";

export default function HeaderNav(){
    return (
        <nav>
            <ul className={style.menu}>
                <li>
                    <Link href="/">Shop all</Link>
                </li>
                <li>
                    <Link href="/">Bestsellers</Link>
                </li>
                <li>
                    <Link href="/collection">Collection</Link>
                </li>
                <li>
                    <Link href="/about">About us</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
}
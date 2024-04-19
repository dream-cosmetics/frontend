import Image from "next/image";
import Link from "next/link";

import styles from "./logo.module.css";
import logoImg from "@/images/logo.png";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <span>Dream</span>
                <Image
                    src={logoImg}
                    height={50}
                    alt="logo"
                    loading="eager"
                    priority={true}
                />
                Cosmetics
            </Link>
        </div>
    );
}

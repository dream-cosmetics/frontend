import Link from "next/link";

import style from "./sectionTitle.module.css";

export default function SectionTitle({title, link}){
     return <div className={style.sectionTitle}>
        <div className={style.title}>{title}</div>
        <Link href={link}>See All</Link>
     </div>
}
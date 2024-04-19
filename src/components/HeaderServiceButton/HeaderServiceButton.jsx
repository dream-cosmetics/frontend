import {Icon} from "@mui/material";

import style from "./headerServiceButton.module.css";

export default function HeaderServiceButton({IconImg, title}){
    return <div className={style.serviceBtn}>
        <Icon><IconImg/></Icon>
        <div className={style.title}>{title}</div>
    </div>
}
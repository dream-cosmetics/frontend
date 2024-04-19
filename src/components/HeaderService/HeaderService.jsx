import HeaderServiceButton from "../HeaderServiceButton/HeaderServiceButton";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import style from "./headerService.module.css"

export default function HeaderService(){
    return (
        <div className={style.headerService}>
            <HeaderServiceButton IconImg={SearchIcon} title="search" />
            <HeaderServiceButton IconImg={PermIdentityIcon} title="account" />
            <HeaderServiceButton IconImg={ShoppingBagOutlinedIcon} title="cart" />
        </div>
    );
}
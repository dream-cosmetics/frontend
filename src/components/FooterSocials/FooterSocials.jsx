"use client"

import {
    FacebookRounded,
    Pinterest,
    Twitter,
    Instagram,
    Telegram,
} from "@mui/icons-material";

import { Stack, IconButton } from "@mui/material";

export default function FooterSocials(){
    return (
        <div className="container">
            <Stack direction="row" sx={{margin: "30px 0", justifyContent: "center"}} spacing={{xs: "15px", sm: "40px", md: "60px"}} useFlexGap>
                <IconButton disableRipple sx={{color: "#fff", padding: "0", fontSize: "37px"}}>
                    <FacebookRounded fontSize="inherit" />
                </IconButton>
                <IconButton disableRipple sx={{color: "#fff", padding: "0", fontSize: "37px"}}>
                    <Pinterest fontSize="inherit" />
                </IconButton>
                <IconButton disableRipple sx={{color: "#fff", padding: "0", fontSize: "37px"}}>
                    <Twitter fontSize="inherit" />
                </IconButton>
                <IconButton disableRipple sx={{color: "#fff", padding: "0", fontSize: "37px"}}>
                    <Instagram fontSize="inherit" />
                </IconButton>
                <IconButton disableRipple sx={{color: "#fff", padding: "0", fontSize: "37px"}}>
                    <Telegram fontSize="inherit" />
                </IconButton>
            </Stack>
        </div>
    )
}
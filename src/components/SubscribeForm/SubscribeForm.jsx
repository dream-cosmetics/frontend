"use client"
import { TextField, Button } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { useState } from "react";

export default function SubscribeForm() {

    const [inputValue, setInputValue] = useState("");

    function inputHandler(value){
        setInputValue(value);
    }

    function handleSubmit(){
        alert(inputValue);
    }

    return (
        <form>
            <TextField
                label="Email"
                onChange={(e) => {
                    inputHandler(e.target.value);
                }}
                value={inputValue}
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                }}
                size="small"
                type="email"
                required
                autoComplete="off"
            />
            <Button
                type="submit"
                color="inherit"
                sx={{ textTransform: "none !important", gap: "10px", padding: "15px", pl: "0" }}
                onClick={handleSubmit}
            >
                Subscribe
                <EastRoundedIcon sx={{ fontSize: "1rem" }} />
            </Button>
        </form>
    );
}

import { Button } from "@mui/material";

export default function CustomButton({width, bgColor, color, text, handler}){
    return (
        <Button
            disableRipple
            sx={{
                width: `${width}`,
                bgcolor: `${bgColor}`,
                textTransform: "none",
                color: `${color}`,
                border: "1px solid",
                borderRadius: "5px",
                fontFamily: "var(--font-poppins)",
                fontWeight: "500",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                transition: "all 0.3s",
                marginTop: "10px",
                padding: "10px",
                ":hover": {
                    backgroundImage:
                        "linear-gradient(88.13deg, #252525 -42.06%, #3A3A3A 58.46%, #323232 165.46%)",
                    color: "#fff",
                },
                ":active": {
                    backgroundImage: "none",
                    backgroundColor: "var(--primaryPink)",
                    boxShadow: "inset 1px 1px 2px var(--primaryText)",
                    border: "none",
                },
            }}
            onClick={handler}
        >
            {text}
        </Button>
    );
}
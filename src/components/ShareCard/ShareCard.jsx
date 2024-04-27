"use client";
import { Card, CardMedia, Button, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";

export default function ShareCard({ item }) {
    
    const [hovered, setHovered] = useState(false);

    return (
        <Card>
            <CardMedia
                image={item.src}
                onMouseOver={() => {
                    setHovered(true);
                }}
                onMouseLeave={() => {
                    setHovered(false);
                }}
                sx={{
                    position: "relative",
                    padding: "50%",
                    backgroundBlendMode: "color",
                    backgroundColor: `${
                        hovered ? "rgba(255, 255, 255, 0.4)" : ""
                    }`,
                }}
            >
                <Box
                    sx={{
                        display: `${hovered ? "block" : "none"}`,
                        position: "absolute",
                        left: { xs: "5%", sm: "20%" },
                        right: { xs: "5%", sm: "20%" },
                        bottom: { xs: "5%", sm: "10%" },
                    }}
                >
                    <Button
                        fullWidth
                        sx={{
                            backgroundColor: "rgba(56, 56, 56, 0.4)",
                            padding: { xs: "5px", sm: "10px" },
                            borderRadius: "5px",
                            color: "#fff",
                            fontFamily: "var(--font-poppins)",
                            fontWeight: "600",
                            fontSize: "0.875rem",
                            lineHeight: "1.5",
                            textTransform: "none",
                            ":hover": { backgroundColor: "var(--primaryPink)" },
                        }}
                    >
                        See In
                        <InstagramIcon fontSize="small" sx={{ ml: "5px" }} />
                    </Button>
                    <Button
                        fullWidth
                        sx={{
                            backgroundColor: "rgba(56, 56, 56, 0.4)",
                            padding: { xs: "5px", sm: "10px" },
                            borderRadius: "5px",
                            color: "#fff",
                            fontFamily: "var(--font-poppins)",
                            fontWeight: "600",
                            fontSize: "0.875rem",
                            lineHeight: "1.5",
                            textTransform: "none",
                            mt: { xs: "5px", sm: "15px" },
                            ":hover": { backgroundColor: "var(--primaryPink)" },
                        }}
                    >
                        Buy Now
                    </Button>
                </Box>
            </CardMedia>
        </Card>
    );
}

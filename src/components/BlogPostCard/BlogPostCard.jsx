import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
} from "@mui/material";

import { useState } from "react";

import CustomButton from "../CustomButton/CustomButton";

export default function BlogPostCard({ image, title, desc}) {

    const [hovered, setHovered] = useState(false);

    return (
        <Card
            sx={{
                maxWidth: "450px",
                color: "var(--primaryText)",
            }}
        >
            <CardActionArea
                component="div"
                disableRipple
                onMouseOver={() => {
                    setHovered(true);
                }}
                onMouseLeave={() => {
                    setHovered(false);
                }}
            >
                <CardMedia image={`${image.src}`} component="img" sx={{maxHeight: "220px"}} />
                <CardContent
                    sx={{
                        padding: "10px 20px 20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <Typography
                        component="h2"
                        sx={{
                            fontFamily: "var(--font-poppins)",
                            fontWeight: "600",
                            fontSize: "1.25rem",
                            lineHeight: "1.35",
                            color: `${
                                hovered ? "var(--primaryPink)" : "inherit"
                            }`,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "var(--font-montserrat)",
                            color: "var(--grayText)",
                            fontSize: "1rem",
                            lineHeight: "1.7",
                        }}
                    >
                        {desc}
                    </Typography>
                    <CustomButton
                        width="100%"
                        bgColor="transparent"
                        color="var(--primaryText)"
                        text="Read More"
                        handler={() => {
                            console.log("Read more");
                        }}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

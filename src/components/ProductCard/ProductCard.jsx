import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Rating,
    Typography,
    Box,
} from "@mui/material";

import CustomButton from "../CustomButton/CustomButton";

export default function ProductCard({ image, name, rate, desc, price }) {
    return (
        <Card
            sx={{
                maxWidth: "350px",
                color: "var(--primaryText)",
            }}
        >
            <CardActionArea
                component="div"
                disableRipple
                onClick={(e) => {
                    if (e.target.type != "button") {
                        console.log("area");
                    }
                }}
            >
                <CardMedia image={`${image.src}`} component="img" />
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
                            fontWeight: "500",
                            fontSize: "1rem",
                            lineHeight: "1.5",
                        }}
                    >
                        {name}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <Rating defaultValue={+rate} readOnly />
                        <Typography
                            sx={{
                                fontFamily: "var(--font-montserrat)",
                                color: "var(--grayText)",
                                fontSize: "0.875rem",
                                lineHeight: "1.5",
                            }}
                        >
                            ({rate})
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: "var(--font-montserrat)",
                            color: "var(--grayText)",
                            fontSize: "0.875rem",
                            lineHeight: "1.5",
                        }}
                    >
                        {desc}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "1rem",
                            lineHeight: "1.25",
                        }}
                    >
                        {price}$
                    </Typography>
                    <CustomButton
                        width="100%"
                        bgColor="transparent"
                        color="var(--primaryText)"
                        text="Add To Bag"
                        handler={() => {console.log("button")}}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

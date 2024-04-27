import { Grid } from "@mui/material";

import SectionTitle from "../SectionTitle/SectionTitle";
import ShareCard from "../ShareCard/ShareCard";
import CustomButton from "../CustomButton/CustomButton";

import cardImg from "@/images/product.png";

export default function SectionShare(){

    const cards = new Array(8);
    cards.fill(cardImg);

    async function buttonHandler(){
        "use server"
        console.log("Follow Us");
    }

    return (
        <section id="share">
            <div className="container">
                <SectionTitle
                    title="Share  how you blossomed with #bloombeauty"
                    link="/collection"
                />
                <Grid container spacing={"20px"} columns={{xs: 2, sm: 3, md: 4}}>
                    {cards.map((card, index) => {
                        return (
                            <Grid item key={index} xs={1}>
                                <ShareCard item={card} />
                            </Grid>
                        );
                    })}
                </Grid>
                <CustomButton
                    width="250px"
                    bgColor="var(--primaryPink)"
                    color="#fff"
                    text="Follow Us"
                    handler={buttonHandler}
                    style={{
                        display: "block",
                        margin: "20px auto 0"
                    }}
                />
            </div>
        </section>
    );
}
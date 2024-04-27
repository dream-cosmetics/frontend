import style from "./sectionSkinQuiz.module.css";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";

import quizImage from "@/images/quiz.png";

export default function SectionSkinQuiz(){

    async function buttonHandler() {
        "use server";
        console.log("Go to Quiz");
    }

    return (
        <section
            id="skinQuiz"
            style={{
                backgroundColor: "#FEE2E370",
                margin: "120px -30px",
            }}
        >
            <div className="container">
                <div className={style.quizContainer}>
                    <div className={style.quizAvatar}>
                        <div className={style.avatarImage}>
                            <Image src={quizImage} alt="Quiz" />
                        </div>
                    </div>
                    <div className={style.quizInfo}>
                        <h2 className={style.title}>The Skin Quiz</h2>
                        <div className={style.description}>
                            Meet the quiz that will curate a routine just just
                            just as unique as you are.
                        </div>
                        <CustomButton
                            width="50%"
                            bgColor="var(--primaryPink)"
                            color="#fff"
                            text="Explore More"
                            handler={buttonHandler}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
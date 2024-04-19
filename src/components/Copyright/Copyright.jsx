import style from "./copyright.module.css";

export default function Copyright(){
    const date = new Date().getFullYear();
    return (
        <div className={style.copyright}>
            <div>&copy; Dream Cosmetics {date}</div>
            <div>
                <span>Privacy Policy</span>
                <span>Terms and Conditions</span>
            </div>
        </div>
    );
}
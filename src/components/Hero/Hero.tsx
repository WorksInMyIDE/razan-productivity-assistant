import FrostedButton from "../FrostedButton/FrostedButton";
import styles from "./Hero.module.css"
import LogInForm from "../LogInForm/LogInForm"
import RegisterForm from "../RegisterForm/RegisterForm";
import { useState } from "react";

const Hero: React.FC = () => {
    const [form, setForm] = useState<"login" | "register">("register");

    return <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={`${styles.title} textGradient`}>Razan</h1>
            <p className={`${styles.styledText} textGradient`}>Productivity Assistant</p>
            <p className={styles.heroText}>A calm space to stay consistent with your learning</p>
            <div className={styles.factsContainer}>
                <FrostedButton text="fast and easy to use" image="/thunder-icon.svg" gradient="#DF2D8C30" color="#FD63B7" />
                <FrostedButton text="Track each task individually" image="/task-icon.svg" gradient="#832DDF30" color="#A978DD" />
            </div>
            <FrostedButton text="daily streak system to keep you consistent" image="/streak-icon.svg" gradient="#EB8D0030" color="#FFE6C0" />
        </div>
        <div className={styles.formContainer}>
            {form === "register" ? <RegisterForm switchToLogin={() => setForm("login")} /> : <LogInForm switchToRegister={() => setForm("register")} />}
        </div>

    </div>
}

export default Hero;
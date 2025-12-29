import FrostedButton from "../FrostedButton/FrostedButton";
import styles from "./Hero.module.css"

const Hero: React.FC = () => {
    return <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={`${styles.title} textGradient`}>Razan</h1>
            <p className={`${styles.styledText} textGradient`}>Productivity Assistant</p>
            <p className={styles.heroText}>The world’s best productivity app for students</p>
            <div className={styles.factsContainer}>
                <FrostedButton text="fast and easy to use" image="/thunder-icon.svg" gradient="#DF2D8C30" color="#FD63B7" />
                <FrostedButton text="Track each task individually" image="/task-icon.svg" gradient="#832DDF30" color="#A978DD" />
            </div>
            <FrostedButton text="daily streak system to keep you consistent" image="/streak-icon.svg" gradient="#EB8D0030" color="#FFE6C0" />
        </div>
        <div className={styles.formContainer}></div>

    </div>
}

export default Hero;
import GradientBtn from "../GradientBtn/GradientBtn"
import styles from "./ContactBelt.module.css"

const ContactBelt: React.FC = () => {
    return <div className={styles.contactBelt}>
        <p className={styles.contactBeltText}>Trying to contact me? <span className={styles.lighterText}>Find me via: </span></p>
        <GradientBtn text="Instagram" gradient="linear-gradient(90deg, rgba(228, 0, 122, 0.5) 0%, rgba(153, 91, 0, 0.5) 100%)" />
        <GradientBtn text="Twitter/x" gradient="#000000" />
    </div>
}

export default ContactBelt

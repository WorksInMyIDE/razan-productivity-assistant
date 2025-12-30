import styles from "./RegisterForm.module.css"
import ClearBtn from "../ClearBtn/ClearBtn"
import GradientBtn from "../GradientBtn/GradientBtn"

type RegisterFormProps = {
    switchToLogin: () => void
}

const RegisterForm: React.FC<RegisterFormProps> = ({ switchToLogin }) => {
    return <form>
        <div className={styles.signInHeading}>
            <h3>Sign Up</h3>
            <p>No pressure. Just show up when you can.</p>
        </div>
        <div className={styles.subContainer}>
            <label htmlFor="username">
                <span>Username</span>
                <div>
                    <img src="/user-icon.svg" alt="" />
                    <input type="text" />
                </div>
            </label>
            <label htmlFor="email">
                <span>Email Address</span>
                <div>
                    <img src="/email-icon.svg" alt="" />
                    <input type="email" />
                </div>
            </label>
            <label htmlFor="password">
                <span>Password</span>
                <div>
                    <img src="/password.svg" alt="" />
                    <input type="password" />
                </div>
            </label>
            <ClearBtn text="Sign up" color="#FF9800" />
            <div className={styles.noAccount}>
                <p>Already a user? Sign In</p>
                <GradientBtn onMouseClick={switchToLogin} text="Sign In" gradient="linear-gradient(90deg, rgba(0, 242, 93, 0.5) 0%, rgba(0, 109, 42, 0.5) 100%)" />
            </div>
        </div>
    </form>
}

export default RegisterForm;
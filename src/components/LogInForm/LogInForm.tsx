import ClearBtn from "../ClearBtn/ClearBtn"
import GradientBtn from "../GradientBtn/GradientBtn"
import styles from "./LogInForm.module.css"

type logInFormProps = {
    switchToRegister: () => void
}

const LogInForm: React.FC<logInFormProps> = ({ switchToRegister }) => {
    return <form>
        <div className={styles.signInHeading}>
            <h3>Sign In</h3>
            <p>Let's pick up where you left off</p>
        </div>
        <div className={styles.subContainer}>
            <label htmlFor="email">
                <span>Email Address</span>
                <div>
                    <img src="/email-icon.svg" alt="" />
                    <input type="text" />
                </div>
            </label>
            <label htmlFor="password">
                <span>Password</span>
                <div>
                    <img src="/password.svg" alt="" />
                    <input type="password" />
                </div>
            </label>
            <ClearBtn text="Sign in" color="#FF9800" />
            <div className={styles.noAccount}>
                <p>Don't have an account yet?</p>
                <GradientBtn onMouseClick={switchToRegister} text="Register" gradient="linear-gradient(90deg, rgba(0, 242, 93, 0.5) 0%, rgba(0, 109, 42, 0.5) 100%)" />
            </div>
        </div>
    </form>
}

export default LogInForm
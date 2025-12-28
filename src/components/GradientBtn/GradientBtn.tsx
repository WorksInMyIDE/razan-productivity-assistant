import styles from "./GradientBtn.module.css"

type GradientBtnprops = { text: string, gradient: string }

const GradientBtn: React.FC<GradientBtnprops> = ({ text, gradient }) => {
    return <div style={{ background: gradient }} className={styles.border}>
        <button className={styles.button}>
            {text}
        </button>
    </div>
}

export default GradientBtn;
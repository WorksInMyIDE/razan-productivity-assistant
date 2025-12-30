import styles from "./GradientBtn.module.css"

type GradientBtnprops = { text: string, gradient: string, onMouseClick?: () => void }

const GradientBtn: React.FC<GradientBtnprops> = ({ text, gradient, onMouseClick }) => {
    return <div style={{ background: gradient }} className={styles.border}>
        <button className={styles.button} onClick={onMouseClick}>
            {text}
        </button>
    </div>
}

export default GradientBtn;
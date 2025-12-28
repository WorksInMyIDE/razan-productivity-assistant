import styles from "./ClearBtn.module.css"

type ClearBtnProps = { text: string, image: string, color: string }

const ClearBtn: React.FC<ClearBtnProps> = ({ text, image, color }) => {
    return <button className={styles.btnStyle} style={{ backgroundColor: color }}>
        <img src={image} alt="" />
        <span>{text}</span>
    </button>
}

export default ClearBtn
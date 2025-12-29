import styles from "./FrostedButton.module.css"

type frostedButtonProps = { text: string, gradient: string, image: string, color: string };

const FrostedButton: React.FC<frostedButtonProps> = ({ text, gradient, image, color }) => {
    return <div className={styles.gradientBorder} style={{ background: gradient, color: color }}>
        <div className={styles.frostedButton}>
            <img src={image} alt="" />
            {text}</div>
    </div>
}

export default FrostedButton
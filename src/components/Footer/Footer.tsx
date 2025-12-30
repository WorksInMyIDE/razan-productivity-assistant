import ContactBelt from "../ContactBelt/ContactBelt"
import styles from "./Footer.module.css"

const Footer: React.FC = () => {
    return <footer>
        <ContactBelt />
        <div className={styles.footer}>
            <p>Developed with️ 💕 by Denzel Ashitey for anyone who wants  to stay productive, just like me️ </p>
            <p className={styles.deeper}>© 2025 Stay productive, stay inspired.</p>
        </div>
    </footer>
}

export default Footer
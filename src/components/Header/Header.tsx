import styles from "./Header.module.css"
import ClearBtn from "../ClearBtn/ClearBtn"
import ContactBelt from "../ContactBelt/ContactBelt";

const Header: React.FC = () => {
    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.usersSummary}>
                        <img src="/users-icon.svg" alt="current users" />
                        <p><span className={styles.bigText}>167</span> users</p>
                    </div>
                    <div className={styles.straightLine}></div>
                    <div className={styles.usersSummary}>
                        <img src="/completed-tasks-icon.svg" alt="completed tasks" />
                        <p><span className={styles.bigText}>2876</span> tasks completed</p>
                    </div>
                </div>
                <div className={styles.headerLink}>
                    <p>want to see more of my work?</p>
                    <ClearBtn text="Github" image="/github-icon.svg" color="#FF9800" />
                </div>
            </header>
            <ContactBelt />
        </>
    )
}

export default Header;
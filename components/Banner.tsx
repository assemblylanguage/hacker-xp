import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <img src="/assets/header.png" />
            </div>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Hacker News - Express Edition</h2>
            </div>
        </div>
    );
}

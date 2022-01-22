import styles from './MessageCount.module.css';

export default function MessageCount() {
    return (
        <div className={styles.messageCountContainer}>
            <div className={styles.messageNumberContainer}>
                <span>30</span> message(s), <span>30</span> unread
            </div>
            <div className={styles.onlineContainer}>
                <div className={styles.onlineImageContainer}>
                    <img src="/assets/online.png" />
                </div>
                <div className={styles.onlineText}>Online</div>
            </div>
        </div>
    );
}

import styles from './TextMenu.module.css';

export default function TextMenu() {
    return (
        <div className={styles.headerMenu}>
            <div className={styles.headerDecoration}>
                <img
                    className={styles.headerDecorationImage}
                    src={'/assets/textMenuDecoration.png'}
                />
            </div>
            <div className={styles.headerMenuText}>
                <a href={'/'}>Home</a>
            </div>
            <div className={styles.headerMenuText}>
                <a href={'/newest'}>New</a>
            </div>
            <div className={styles.headerMenuText}>
                <a href={'/past'}>Past</a>
            </div>
            <div className={styles.headerMenuText}>
                <a href={'https://news.ycombinator.com/newcomments'}>
                    Comments
                </a>
            </div>
            <div className={styles.headerMenuText}>
                <a href={'/ask'}>Ask</a>
            </div>
            <div className={styles.headerMenuText}>
                <a href={'https://news.ycombinator.com/show'}>Show</a>
            </div>
            <div className={styles.headerMenuText}>
                <a href={'https://news.ycombinator.com/jobs'}>Jobs</a>
            </div>
            <div className={styles.headerMenuText}>
                <a href={'https://news.ycombinator.com/submit'}>Submit</a>
            </div>
            <div className={styles.headerMenuLogoContainer}>
                <img className={styles.headerMenuLogo} src="/assets/logo.png" />
            </div>
        </div>
    );
}

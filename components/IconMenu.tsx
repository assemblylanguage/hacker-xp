import styles from './IconMenu.module.css';

interface IconData {
    image: string;
    text: string;
    link: string;
}

export default function IconMenu({
    route,
    nextPage,
    priorPage,
}: {
    route: string;
    nextPage: number;
    priorPage: number;
}) {
    const iconData: IconData[] = [
        {
            image: '/assets/source.png',
            text: 'Github',
            link: 'https://github.com/assemblylanguage/hacker-xp',
        },
        {
            image: '/assets/back.png',
            text: 'Previous',
            link: `/${route}?page=${priorPage}`,
        },
        {
            image: '/assets/next.png',
            text: 'Next',
            link: `/${route}?page=${nextPage}`,
        },
    ];

    return (
        <div className={styles.iconsBar}>
            <img
                className={styles.iconBarDecoration}
                src="/assets/iconBarDecoration.png"
            />
            {iconData.map((iconRow: IconData) => {
                return (
                    <a href={iconRow.link} className={styles.iconContainer}>
                        <div className={styles.iconButton}>
                            <div className={styles.iconImageContainer}>
                                <img
                                    className={styles.iconImage}
                                    src={iconRow.image}
                                />
                            </div>
                            <div className={styles.iconTextContainer}>
                                <span className={styles.iconText}>
                                    {iconRow.text}
                                </span>
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
    );
}

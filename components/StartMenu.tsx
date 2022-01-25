import styles from './StartMenu.module.css';

interface StartMenuButtonData {
    image: string;
    text: string;
    link: string;
}

export default function StartMenu() {
    const startMenuButtonData: StartMenuButtonData[] = [
        {
            link: 'https://github.com/assemblylanguage/hacker-xp',
            image: 'github.png',
            text: 'Github',
        },
        {
            link: 'https://paint-xp.com',
            image: 'xpPaint.png',
            text: 'Paint',
        },
        {
            link: 'https://github.com/assemblylanguage/hacker-98.css',
            image: 'hacker98.png',
            text: 'Hacker 98.css',
        },
    ];

    return (
        <div className={styles.startMenuContainer}>
            <a href={'/'} className={styles.startMenuMainButton}></a>
            <div className={styles.startMenuBar}>
                {startMenuButtonData.map(
                    (startMenuButton: StartMenuButtonData) => {
                        return (
                            <a
                                href={startMenuButton.link}
                                className={styles.startMenuButtonContainer}
                            >
                                <div className={styles.startMenuButton}>
                                    <div
                                        className={
                                            styles.startMenuButtonTextContainer
                                        }
                                    >
                                        <div
                                            className={
                                                styles.startMenuButtonImageContainer
                                            }
                                        >
                                            <img
                                                className={
                                                    styles.startMenuButtonImage
                                                }
                                                src={`/assets/${startMenuButton.image}`}
                                            />
                                        </div>
                                        <span
                                            className={
                                                styles.startMenuButtonText
                                            }
                                        >
                                            {startMenuButton.text}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        );
                    }
                )}
            </div>
            <img
                className={styles.startMenuRightBorder}
                src={'/assets/startMenuRightBorder.png'}
            />
            <div className={styles.startMenuRightBar}></div>
        </div>
    );
}

import styles from './Window.module.css';
import TextMenu from './TextMenu';
import IconMenu from './IconMenu';
import Banner from './Banner';
import SideNav from './SideNav';
import Contributors from './Contributors';
import Email from './Email';
import MessageCount from './MessageCount';

export default function Window({
    route,
    hackerNewsPosts,
    nextPage,
    priorPage,
}: {
    route: string;
    hackerNewsPosts: any;
    nextPage: number;
    priorPage: number;
}) {
    return (
        <div className={styles.windowContainer}>
            <div className={styles.window}>
                <div className={styles.windowHeaderContainer}>
                    <img src={'/assets/windowHeaderLeftBorder.png'} />
                    <div className={styles.windowHeader}>
                        <div className={styles.windowFaviconContainer}>
                            <img
                                src={'/assets/favicon.png'}
                                className={styles.windowFavicon}
                            />
                        </div>

                        <div className={styles.windowTitleContainer}>
                            <h1 className={styles.windowTitle}>Hacker XP</h1>
                        </div>

                        <div className={styles.windowSpacing}></div>

                        <div className={styles.verticalAlign}>
                            <div className={styles.minimizeButton}></div>
                        </div>
                        <div className={styles.verticalAlign}>
                            <div className={styles.maximizeButton}></div>
                        </div>
                        <div className={styles.verticalAlign}>
                            <div className={styles.closeButton}></div>
                        </div>
                    </div>
                    <img src={'/assets/windowHeaderRightBorder.png'} />
                </div>

                <div className={styles.windowBody}>
                    <TextMenu></TextMenu>
                    <IconMenu
                        route={route}
                        nextPage={nextPage}
                        priorPage={priorPage}
                    ></IconMenu>
                    <Banner></Banner>

                    <div className={styles.contentContainer}>
                        <div className={styles.leftContentMenu}>
                            <SideNav></SideNav>
                            <div
                                className={styles.leftContentMenuSpacing}
                            ></div>
                            <Contributors></Contributors>
                        </div>

                        <div className={styles.contentSpacing}></div>
                        <Email hackerNewsPosts={hackerNewsPosts}></Email>
                    </div>

                    <div className={styles.bottomContentSpacing}></div>
                    <MessageCount></MessageCount>
                </div>
            </div>
        </div>
    );
}

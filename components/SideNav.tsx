import styles from './SideNav.module.css';
import SectionHeader from './SectionHeader';

interface NavData {
    image: string;
    text: string;
    link: string;
}

export default function SideNav() {
    const navData: NavData[] = [
        {
            image: '/assets/folder.png',
            text: 'Home',
            link: '/',
        },
        {
            image: '/assets/newPosts.png',
            text: 'New Posts',
            link: '/newest',
        },
        {
            image: '/assets/pastPosts.png',
            text: 'Past Posts',
            link: '/past',
        },
        {
            image: '/assets/newComments.png',
            text: 'New Comments',
            link: 'https://news.ycombinator.com/newcomments',
        },
        {
            image: '/assets/askHackers.png',
            text: 'Ask Hackers',
            link: '/ask',
        },
        {
            image: '/assets/showNewHacks.png',
            text: 'Show New Hacks',
            link: 'https://news.ycombinator.com/show',
        },
        {
            image: '/assets/jobs.png',
            text: 'Jobs For Hackers',
            link: 'https://news.ycombinator.com/jobs',
        },
        {
            image: '/assets/submit.png',
            text: 'Submit Post',
            link: 'https://news.ycombinator.com/submit',
        },
    ];

    return (
        <div className={styles.sideNavContainer}>
            <SectionHeader title={'Navigation'} />
            <nav className={styles.navMenuContainer}>
                {navData.map((navItem: NavData) => {
                    return (
                        <div className={styles.navLinkContainer}>
                            <div>
                                <img
                                    className={styles.navLinkImage}
                                    src={navItem.image}
                                />
                            </div>
                            <a className={styles.navLink} href={navItem.link}>
                                {navItem.text}
                            </a>
                        </div>
                    );
                })}
            </nav>
        </div>
    );
}

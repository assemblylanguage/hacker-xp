import styles from './Contributors.module.css';
import SectionHeader from './SectionHeader';

export default function Contributors() {
    const contributors: string[] = ['assemblylanguage'];

    return (
        <div className={styles.contributorSectionContainer}>
            <SectionHeader title={'Contributors'} />
            <div className={styles.contributorContainer}>
                {contributors.map((contributor: string) => {
                    return (
                        <div className={styles.contributorLinkContainer}>
                            <div>
                                <img src="/assets/contributor.png" />
                            </div>
                            <a
                                className={styles.contributorLink}
                                href={`https://github.com/${contributor}`}
                            >
                                {contributor}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

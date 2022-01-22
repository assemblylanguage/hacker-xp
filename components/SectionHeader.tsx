import styles from './SectionHeader.module.css';

export default function SectionHeader({ title }: { title: string }) {
    return (
        <div className={styles.sectionHeaderContainer}>
            <h2 className={styles.sectionHeaderTextContainer}>{title}</h2>
            <div className={styles.sectionHeaderCloseButtonContainer}>
                <img src="/assets/sectionHeaderClose.png" />
            </div>
        </div>
    );
}

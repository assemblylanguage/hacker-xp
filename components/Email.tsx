import { useState } from 'react';
import styles from './Email.module.css';
import { HackerNewsPost } from '../libraries/hackernews';

function EmailRow({ hackerNewsPost }: { hackerNewsPost: HackerNewsPost }) {
    const [isViewed, setIsViewed] = useState(false);

    return (
        <tr
            onClick={() => setIsViewed(!isViewed)}
            className={isViewed ? styles.emailRowViewed : styles.emailRow}
            id={hackerNewsPost.id ?? ''}
        >
            <td className={styles.rank}>{hackerNewsPost.rank}</td>
            <td className={styles.mailImageContainer}>
                <img
                    className={styles.mailImage}
                    src={
                        isViewed
                            ? '/assets/openMail.png'
                            : '/assets/closeMail.png'
                    }
                />
            </td>
            <td>
                {!hackerNewsPost.user ? (
                    <span>Y Combinator</span>
                ) : (
                    <a
                        href={`https://news.ycombinator.com/user?id=${hackerNewsPost.user}`}
                    >
                        {hackerNewsPost.user}
                    </a>
                )}
            </td>
            <td>
                <a href={hackerNewsPost.link ?? ''}>{hackerNewsPost.title}</a>
            </td>
            <td>{hackerNewsPost.age}</td>
            {hackerNewsPost.domain ? (
                <td>
                    <a href={hackerNewsPost.link ?? ''}>
                        ({hackerNewsPost.domain})
                    </a>
                </td>
            ) : (
                <td></td>
            )}
            <td>
                {!hackerNewsPost.user ? (
                    <span>0 comments</span>
                ) : (
                    <a
                        href={`https://news.ycombinator.com/item?id=${hackerNewsPost.id}`}
                    >
                        {hackerNewsPost.comments} comments
                    </a>
                )}
            </td>
        </tr>
    );
}

export default function Email({
    hackerNewsPosts,
}: {
    hackerNewsPosts: HackerNewsPost[];
}) {
    return (
        <main className={styles.emailContainer}>
            <table className={styles.emailTable}>
                <colgroup>
                    <col className={styles.rankColumn}></col>
                    <col className={styles.mailImageColumn}></col>
                    <col className={styles.userColumn}></col>
                    <col className={styles.titleColumn}></col>
                    <col className={styles.ageColumn}></col>
                    <col className={styles.domainColumn}></col>
                    <col className={styles.commentsColumn}></col>
                </colgroup>
                <tr className={styles.header}>
                    <th className={styles.tableHeader}>#</th>
                    <th className={styles.tableHeader}></th>
                    <th className={styles.tableHeader}>From</th>
                    <th className={styles.tableHeader}>Subject</th>
                    <th className={styles.tableHeader}>Received</th>
                    <th className={styles.tableHeader}>Link</th>
                    <th className={styles.tableHeader}>Comments</th>
                </tr>
                <tr className={styles.spacing}>
                    <td colSpan={7}></td>
                </tr>
                {hackerNewsPosts.map((hackerNewsPost) => {
                    return (
                        <EmailRow hackerNewsPost={hackerNewsPost}></EmailRow>
                    );
                })}
            </table>
        </main>
    );
}

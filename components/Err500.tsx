import Head from 'next/head';
import styles from './Err500.module.css';

export default function Err500() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <title>Hacker XP - Err 500</title>

                <link rel="stylesheet" href="/assets/err500.css" />
            </Head>

            <div className={styles.errorTextContainer}>
                <p>
                    A problem has been detected and Hacker XP has been shut down
                    to prevent damage.
                </p>

                <p>Error 500 proxy to Hacker News failed.</p>

                <p>
                    If this is the first time you've seen this 500 error screen,
                    try refreshing the page. If this screen appears again, try
                    refreshing again.
                </p>

                <p>
                    If problems continue, please file a bug report to the
                    maintainers at the source code repository. The repository is
                    available at this URL:{' '}
                    <a href={'https://github.com/assemblylanguage/hacker-xp'}>
                        https://github.com/assemblylanguage/hacker-xp
                    </a>
                    .
                </p>

                <p>Unrelated Technical Information:</p>

                <p className={styles.technicalInformation}>
                    *** STOP: 0x000000D1 (0x00000000, 0x00000000)
                </p>
                <p className={styles.technicalInformation}>
                    *** CALL: 0x000000D1 (0x00000000, 0x00000000)
                </p>
                <p className={styles.technicalInformation}>
                    *** JUMP: 0x000000D1 (0x00000000, 0x00000000)
                </p>
            </div>
        </div>
    );
}

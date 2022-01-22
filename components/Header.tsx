import Head from 'next/head';

export default function Header({ config }: { config: any }) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <title>Hacker XP</title>

            <link rel="stylesheet" href="/assets/main.css" />

            <meta
                name="description"
                content="Hacker XP - Hacker News With A Windows XP Outlook Theme"
            />

            <meta property="og:title" content="Hacker XP" />
            <meta
                property="og:description"
                content="Hacker News With A Windows XP Outlook Theme"
            />
            <meta property="og:image" content={`${config.url}/image.jpeg`} />
            <meta
                property="og:image:alt"
                content="Hacker XP - Hacker News With A Windows XP Outlook Theme"
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={config.url} />

            <meta
                name="twitter:card"
                content="Hacker XP - Hacker News With A Windows XP Outlook Theme"
            />

            <link rel="canonical" href={config.url} />

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            <link rel="manifest" href="/my.webmanifest" />

            <meta name="theme-color" content="#efebd9" />
        </Head>
    );
}

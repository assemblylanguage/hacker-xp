/**
 * The main router for Hacker-XP, responsible primarily for fetching Hacker
 * News posts on the server, rendering the page, and sending the rendered page
 * back to the client.
 */

import config from '../config/prod.json';
import hackerNews from '../libraries/hackernews';
import Header from '../components/Header';
import Window from '../components/Window';
import StartMenu from '../components/StartMenu';

/**
 * Calculates the next page from the current page.
 *
 * @param currentPage the current page the user is on.
 * @returns the next page from the current page.
 */
function calculateNextPage(currentPage: number): number {
    // If no current page is undefined or null, return page 2.
    if (!currentPage) {
        return 2;
    }

    return currentPage + 1;
}

/**
 * Calculates the prior page from the current page.
 *
 * @param currentPage the current page the user is on.
 * @returns the prior page from the current page.
 */
function calculatePriorPage(currentPage: number): number {
    const priorPage = calculateNextPage(currentPage) - 2;

    // If the page is 0 or below, return page 1.
    if (priorPage <= 0) {
        return 1;
    }

    return priorPage;
}

/**
 * Fetches and parses the Hacker News page at a given route.
 *
 * @param route the route from the current page navigation.
 * @param currentPage the current page number.
 * @returns {Object} parsed hacker news posts.
 */
async function fetchHackerNewsPageByRoute(route: string, currentPage: number) {
    switch (route) {
        case 'new': {
            return hackerNews.fetchFrontPage(currentPage);
        }

        case 'newest': {
            return hackerNews.fetchNewPosts(currentPage);
        }

        case 'past': {
            return hackerNews.fetchPastPosts(currentPage);
        }

        case 'show': {
            return hackerNews.fetchShowPosts(currentPage);
        }

        case 'ask': {
            return hackerNews.fetchAskPosts(currentPage);
        }

        default: {
            return hackerNews.fetchFrontPage(currentPage);
        }
    }
}

export async function getServerSideProps({ query }: { query: any }) {
    // Getting the route and current page number from the URL path.
    const route = query.route;
    const currentPage = Number.parseInt(query.page) || 1;

    // Fetching hacker news posts given the current path.
    const hackerNewsPosts = await fetchHackerNewsPageByRoute(
        route,
        currentPage
    );

    // Calculating the next and prior page numbers.
    const nextPage = calculateNextPage(currentPage);
    const priorPage = calculatePriorPage(currentPage);

    return {
        props: {
            route: query.route,
            config,
            hackerNewsPosts,
            nextPage,
            priorPage,
        },
    };
}

/**
 * The main page component in Hacker-XP that is used to generate all of the
 * pages server side.
 */
export default function Main({
    route,
    config,
    hackerNewsPosts,
    nextPage,
    priorPage,
}: {
    route: string;
    config: any;
    hackerNewsPosts: any;
    nextPage: number;
    priorPage: number;
}) {
    return (
        <div>
            <Header config={config} />
            <Window
                route={route}
                hackerNewsPosts={hackerNewsPosts}
                nextPage={nextPage}
                priorPage={priorPage}
            />
            <StartMenu />
        </div>
    );
}

import axios, { AxiosResponse } from 'axios';
import { JSDOM } from 'jsdom';

export interface HackerNewsPost {
    id: string | null;
    rank: number | null;
    title: string | null;
    link: string | null;
    domain: string | null;
    user: string | null;
    age: string | null;
    comments: number | null;
}

function parsePostId(row: Element): string | null {
    const idLinkElement: Element | null = row.querySelector('a[id]');

    if (idLinkElement === null) {
        return null;
    }

    const idAttribute: string | null = idLinkElement.getAttribute('id');

    if (idAttribute === null) {
        return null;
    }

    if (!idAttribute.includes('_')) {
        return null;
    }

    return idAttribute.split('_')[1];
}

function parseRank(row: Element): number | null {
    const rankElement: Element | null = row.querySelector('.rank');

    if (rankElement === null) {
        return null;
    }

    const rank: number = Number.parseInt(
        rankElement.innerHTML.split('.')[0],
        10
    );

    return rank;
}

function parseTitle(row: Element): string | null {
    const titleLinkElement: Element | null = row.querySelector('.titlelink');

    if (titleLinkElement === null) {
        return null;
    }

    return titleLinkElement.innerHTML;
}

function parseLink(row: Element): string | null {
    const titleLinkElement: Element | null = row.querySelector('.titlelink');

    if (titleLinkElement === null) {
        return null;
    }

    return titleLinkElement.getAttribute('href');
}

function parseDomain(row: Element): string | null {
    const domainElement: Element | null = row.querySelector('.sitestr');

    if (domainElement === null) {
        return null;
    }

    return domainElement.innerHTML;
}

function parseUser(row: Element): string | null {
    const userElement: Element | null = row.querySelector('.hnuser');

    if (userElement === null) {
        return null;
    }

    return userElement.innerHTML;
}

function parseAge(row: Element): string | null {
    const ageLinkElement: Element | null = row.querySelector('.age a');

    if (ageLinkElement === null) {
        return null;
    }

    return ageLinkElement.innerHTML;
}

function parseComments(row: Element): number | null {
    const commentsElement: Element | null =
        row.querySelectorAll('a[href*=item]')[1];

    if (commentsElement === null) {
        return null;
    }

    if (commentsElement === undefined) {
        return null;
    }

    const commentsString: string = commentsElement.innerHTML;

    if (commentsString === 'discuss') {
        return 0;
    }

    const commentCount: number = Number.parseInt(
        commentsString.split('&nbsp;')[0],
        10
    );

    return commentCount;
}

async function fetchHackerNewsPage(
    hackerNewsPageUrl: string,
    rowOffset: number = 0
): Promise<HackerNewsPost[] | null> {
    const hackerNewsPageResponse: AxiosResponse<any, any> = await axios.get(
        hackerNewsPageUrl
    );

    const status: number = hackerNewsPageResponse.status;

    if (status === 200) {
        const html: string = hackerNewsPageResponse.data;
        const document: Document = new JSDOM(html).window.document;

        const hackerNewsMainRows: Element[] = Array.from(
            document.querySelectorAll('#hnmain table tr')
        ).slice(0, 90);

        const hackerNewsMainRowsSubset: Element[] = hackerNewsMainRows.slice(
            1,
            91
        );
        const hnData: HackerNewsPost[] = [];

        for (
            let rowNumber: number = rowOffset;
            rowNumber < hackerNewsMainRowsSubset.length;
            rowNumber += 3
        ) {
            const row1: Element = hackerNewsMainRowsSubset[rowNumber];
            const row2: Element = hackerNewsMainRowsSubset[rowNumber + 1];

            const id: string | null = parsePostId(row1);
            const rank: number | null = parseRank(row1);
            const title: string | null = parseTitle(row1);
            const link: string | null = parseLink(row1);
            const domain: string | null = parseDomain(row1);
            const user: string | null = parseUser(row2);
            const age: string | null = parseAge(row2);
            const comments: number | null = parseComments(row2);

            const data = {
                id,
                rank,
                title,
                link,
                domain,
                user,
                age,
                comments,
            };

            hnData.push(data);
        }

        return hnData;
    }

    return null;
}

async function fetchFrontPage(
    pageNumber: number
): Promise<HackerNewsPost[] | null> {
    pageNumber = pageNumber || 1;

    return fetchHackerNewsPage(
        `https://news.ycombinator.com/news?p=${pageNumber}`
    );
}

async function fetchNewPosts(
    pageNumber: number
): Promise<HackerNewsPost[] | null> {
    pageNumber = pageNumber || 1;

    return fetchHackerNewsPage(
        `https://news.ycombinator.com/newest?p=${pageNumber}`
    );
}

async function fetchPastPosts(
    pageNumber: number
): Promise<HackerNewsPost[] | null> {
    pageNumber = pageNumber || 1;

    return fetchHackerNewsPage(
        `https://news.ycombinator.com/front?p=${pageNumber}`,
        2
    );
}

async function fetchShowPosts(
    pageNumber: number
): Promise<HackerNewsPost[] | null> {
    pageNumber = pageNumber || 1;

    return fetchHackerNewsPage(
        `https://news.ycombinator.com/show?p=${pageNumber}`
    );
}

async function fetchAskPosts(
    pageNumber: number
): Promise<HackerNewsPost[] | null> {
    pageNumber = pageNumber || 1;

    return fetchHackerNewsPage(
        `https://news.ycombinator.com/ask?p=${pageNumber}`
    );
}

export default {
    fetchFrontPage,
    fetchNewPosts,
    fetchPastPosts,
    fetchShowPosts,
    fetchAskPosts,
};

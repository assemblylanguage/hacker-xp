/**
 * An empty page responsible for redirecting the user to the dynamic route
 * page.
 */

export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/new',
        },
    };
}

export default function Index() {}

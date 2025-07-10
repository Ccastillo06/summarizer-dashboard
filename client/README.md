# Client Application

This is the client application for the Summarizer Dashboard.

Made with:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

Install the dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Fetching data

The app client components use [React Query](https://react-query.tanstack.com/) for data fetching. It uses the `getArticles` and `getArticleSummary` functions from the `api` directory to fetch data.

The app server components use the `getArticles` and `getHighlightedArticles` functions from the `api` directory to fetch data.

As the project works with Docker Compose, a different API endpoint is used for the client and server components. The client component uses the `NEXT_PUBLIC_API_BASE_URL_CLIENT_SIDE` environment variable to set the API endpoint for the client components. The server component uses the `NEXT_PUBLIC_API_BASE_URL_SERVER_SIDE` environment variable to set the API endpoint for the server components. This happens because of the way Docker Compose networking works for internal processes, where the client and server components are run in separate containers.

### Caching

React Query uses a caching mechanism to store data in the browser. This means that the data is not fetched from the server every time the component is rendered. Instead, the data is fetched once and stored in the browser cache. The data is then used for subsequent requests.

In the case of Next.js pages, they are generated on the server and served to the client. This means that the data is fetched from the server every time the page is rendered. If the URL changes (as with the query parameters), the data is fetched again from the server for the new configuration.

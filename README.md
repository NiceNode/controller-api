# controller-api

This is currently deployed to api.nicenode.xyz. To test it, enter `https://api.nicenode.xyz/api/controllerLibrary`into a browser and see the results of a GET HTTP on `/controllerLibrary`.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Use `http://localhost:3000/api` as the local controller environment variable in NiceNode or for testing. Or open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To properly update a controller:
1. Make the change
2. Always increment the version appropriately following semver standards.
3. Deploy to a staging api and test it
4. Then deploy to production

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

We, NiceNode, deploy with `vercel deploy` and to production, `vercel --prod deploy`

For testing, you can take the url from `vercel deploy` and set a local environment variable in NiceNode.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

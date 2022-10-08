This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Todo

- [ ] Add google analytics
- [ ] Bar chart on summary

##### Priorities

- [ ] Handle proper development (local) and production enviromnents
- [ ] Prepare for production release

## In Progress

- [ ] Add summary page after game ended, show if got high score and show all questions that were answered with the source and desc
- [ ] Fix CORS

## Done ✓

- [x] Setup project and dependencies
- [x] Setup tailwind with next
- [x] Setup eslint and prettier with next
- [x] Setup husky with lint-staged pre-commit hook
- [x] Setup local environments
- [x] Create initial file setup and color palette
- [x] Create connection with backend api
- [x] Handle game logic
- [x] Replace Context with game hook
- [x] Move API logic API handler
- [x] Method to retrieve random level from levels array
- [x] Save High score on cookies
- [x] Retrieve high score from cookies
- [x] Store played levels, if we draw a level that has been played, draw again
- [x] Analyze: Instead of storing the played level (we also need to store the answer to send to the backend), store its index on the levels array and make it impossible to draw that index
- [x] Add Styles
- [x] Add info toast on layouT

---

## Functionality:

### Start:

'Play Game' button at middle of the screen at the start

### When Playing:

Show random image with 2 buttons underneath 'HUMAN (human icon)' & 'AI (robot icon)'
If the player gets correct, go to next level.
If the player gets incorrect, end game and show high score with 'play again button'
After each answer show a small graph with the percentage of answered options from all players

### How to:

have a isPlaying state to keep track of wether to show the game or not
have a gameFinished state to know when to display the play again button and end game information (time spent? avg time per pic?)

keep track of answers on backend to have add a graph later on

{index: 1, answered: IA}

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

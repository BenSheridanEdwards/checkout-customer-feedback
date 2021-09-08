# Checkout.com Tech Test - Product feedback

This test tasked me with building a customer feedback page for a product that included:

- A form that collected the user's name, email, rating of the product, and a comment
- A list of the latest comments from prior feedback
- A chart showing a trend

I decided to build a form with simple `input` and `label` for the name, email, and a `textarea` for the comment. I also implemented a 5-star rating system that responds to a user hovering over it.

For the chart, I decided to show the trend of average ratings with every review.

For the latest comments, I sorted by date and virtualized the list.

To go the extra mile, I decided to use TypeScript as I knew it was a part of Checkout.com's tech stack. I also added Cypress for E2E testing of the form.

I didn't install linting on the project but my IDE ran eslint and prettier with every file save, so all the code is formatted.

I wish I had more time for this challenge to thoroughly test and add features to ensure a smooth user experience. I'll detail the known issues and my future improvements below.

### Known issues

- No loading states - Response time is under 100ms but with a bigger feedback list, that time will increase.
- The latest comments virtualized list isn't responsive and the row height is fixed, so if a user submits a comment that wraps, the space between that comment and the one below decreases and looks inconsistent with the rest of the list. `react-virtualized` has an autosizer component that would fix this issue but I was time conscious.
- Comments have a fixed width, causing overflow on mobile screens >~375px

### Improvements

- Add project linting with a pre-commit hook
- Loading states
- Custom form validation feedback
- More informative tooltip information on the chart
- Animations - fade in new comments, loading spinner, etc
- Adding React Profiler to monitor and optimise the performance
- Better colour contrast to ensure I met WCAG guidelines
- Use Lighthouse to ensure my app was fully accessible
- Deploy with a CI/CD that installs dependencies, linted the code, runs the tests, generates code coverage and performance reports with Lighthouse.
- Optimised performance - currently there's a slow initial load time and time to interactive
- Optimise main thread work and deprioritise third-party scripts until the main thread is idle

## Installation and running the app

To install the app dependencies, please run:

```
yarn install
```

To start up the `json-server`, run:

```
yarn run api
```

In a separate terminal, to start up a development server, run:

```
yarn start
```

and navigate to 'http://localhost:3000/'.

To create a production build, run:

```
yarn build
```

To run the unit tests, run:

```
yarn test
```

To run the end-to-end tests, run:

```
yarn test:e2e
```

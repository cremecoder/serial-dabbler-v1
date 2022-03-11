# Serial Dabbler - NextJS and Notion API

A design tool website for a local brand designer. Built with create-next-app featuring React Hooks, custom Styled Components, React Transition Group and integrated with Notion API. Features a dabble button to randomly generate words pulled in from Notion API at build time. Also the ability to lock-in generated words and click on the "About" slide to see the overlay and access the contact form, all of which is controlled using React state and hooks.

> Visit the live site here: https://serialdabbler.co.uk/
>
> Deployed on [Netlify](https://www.netlify.com/)

<br>

## What I took away from this project

My first Next.js project and also my first introduction to styled components.

I chose to use Next.js for this project as way of understanding its features and capabilities, although in hindsight I would have used basic React instead, as it would have made certain actions (like accessing the window object in the browser, and making API calls) simpler. I really enjoyed the CSS-in-JS way of styling for its flexibility, having mostly used SASS in previous projects.

I also dived deeper into performance enhancement and testing using the React Developer Tools in Google Chrome, more specifically the Profiler to detect unwanted re-renders. I fixed some of these issues using memoizastion.

Also, dealing with the slightly more complicated JSON returned from the Notion API was a bit of a challenge, but was a great experience in adding to my knowledge of working with data structures in Javascript.

<br>

## Potential Future Features

- Adding filters to the main UI to display words related more to a specific field of design/creativity.
- Creating branded HTML emails for the contact form instead of plain text.

<br>

## Note on running these files locally

I have permission from the client to show this source code, but it's unable to be run locally at this time. I have plans to create a local only version of this project for others to run in their own developer environment.

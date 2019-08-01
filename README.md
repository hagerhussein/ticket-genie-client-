## ticket-genie-client 
This app was the final assignment for the Codaisseur academy during week 8. It is a full stack web-appication where users can buy and sell tickets for all kinds of events.

## Description 
The app has a login and signup page for customers. You need to login to create events, tickets and posting comments.

# Events have:
- a name
- a description
- a picture or logo
- a start and end date (could be the same)

After you click on an event, you see a list of tickets that are offered for this event.

A ticket is made for a specific event and has an author (the user that created the ticket). Apart from that, it has:

- a picture of the ticket (optional field)
- a price
- a description

When you click on a ticket, you see the details of that ticket (description/price) and which event it's for. On this page you can add comments as a customer, and everybody can see all the comments.

A comment has a text and is connected to a specific ticket. It also has an author.

Anybody can view events and tickets, but you have to login to add a new ticket or comment.

## User Stories 
- As a customer I only want to see events that are not finished yet
- As a customer I want to view a list of tickets when I click on an event
- As a customer I want to view ticket details when I click on a ticket in the ticket list
- As a customer I want to see what the fraud-risk is for a specific ticket
- As a customer I want to be able to login, or sign up if I don't have an account yet
- As a logged in customer I want to add a ticket (for a specific event) that shows up on the event page with a title, picture, price and description
- As an author of the ticket I want to be able to edit a ticket's description, price and picture (other logged in customers cannot do this! only authors and admins)
- As a logged in customer I want to be able to create events with a name, picture (logo), date and description
- As a customer I can see some color (red/yellow/green) indicating the fraud risk of a ticket for all tickets in the all tickets list


## Tools and Technologies Used:
- React 
- Redux 
- Redux-Thunk 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

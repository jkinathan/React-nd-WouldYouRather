# Reactnd Would You Rather Project

This is the code for the final assessment project for Udacity's React & Redux course.


A web application built with react-redux that lets a user play the “Would You Rather?” game. 

The user is asked a question in form: “Would you rather do [option A] or [option B] ?”. He / She
must select an option.

In this app, users are able to ask and answer questions, see which questions they have/haven’t answered, see how other people have voted, and see the ranking of users on the leaderboard.

Once the user is logged in, the user is able to toggle between his/her answered and unanswered polls on the home page. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll; they are not allowed to change their answer after they have voted. 

When the user comes back to the home page, the polling question appears in the “Answered” section.
## Installation Guide

To set-up project:
- Clone the repository from : [https://github.com/jkinathan/React-nd-WouldYouRather]
- install all project dependencies with `npm install`
- start the development server with `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view the application in browser.

## Backend

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the `_DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Data

Data stored in the Redux Store:

- Users
- Questions
- authedUser

## Screenshots

### Login

![1](https://github.com/jkinathan/React-nd-WouldYouRather/public/images/login1.png)

### Dashboard

![2](https://github.com/jkinathan/React-nd-WouldYouRather/public/images/Dashboard.png)

### Leaderboard

![3](https://github.com/jkinathan/React-nd-WouldYouRather/public/images/Leaderboard.png)

### Question Poll

![4](https://github.com/jkinathan/React-nd-WouldYouRather/public/images/NewPoll.png)

### Poll Results

![5](https://github.com/jkinathan/React-nd-WouldYouRather/public/images/Results.png)

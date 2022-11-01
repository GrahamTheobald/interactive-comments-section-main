# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](./Screenshot%202022-11-01%20at%2015.49.30.png)

## My process

I built this app using React. It was my first time using this framework.
I fleshed out the basic structure of the websites by creating components and then styled them before implementing their functionality.
There were several difficult decisions to make along the way and upon reflection I would make some differently. For instance deciding in which component to have the state. I decided to have the state as high as possible, due to how the JSON data provided was structured. However, if I was to implement this app from scratch I would have each Comment component have a state of its own to contain its replies. This is because of the difficulties in accessing each comment and having to traverse through arrays within objects within arrays etc.

### What I learned

I learned the importance of mapping out the structure of Components and considering how they will be nested before implementing them.
I tried to make a universal button component but this created complexity due to differences in where each button was nested. I wanted to use a context for one button which generated errors because the other button didn't have access to the context so I had to pass things down through props which quickly became confusing. I would have made different components in retrospect.

### Continued development

I will persist in practising with React. I should study more hooks so that I can structure my projects with a greater understanding of what is possible with React.
